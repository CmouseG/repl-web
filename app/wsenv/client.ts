import { SIGNAL_API_URL, WS_URL } from '../utils/constants'
import { requestStore, eventStore } from './store'
import { MESSAGE_TYPES } from 'wsenv/constants'
import axios from 'axios'
import DWebSocket from './dwebsocket'

const wsUrlProvider = async () => {
  if (WS_URL) {
    return WS_URL
  } else {
    try {
      const resp = await axios.get(SIGNAL_API_URL)
      return resp.data.ws_endpoint
    } catch (err) {
      console.error(
        'Failed to get the client URL from the wsenv signalling server: ',
        err
      )
      return Promise.reject(err)
    }
  }
}

const client = new DWebSocket(wsUrlProvider)

client.sendEvent = (type: MESSAGE_TYPES, payload: { [k: string]: any }) => {
  if (client && client.readyState() === 1) {
    client.send(
      JSON.stringify({
        type: type,
        payload: payload
      })
    )
  } else {
    // optional: implement backoff for interval here
    setTimeout(() => {
      client.sendEvent(type, payload)
    }, 300)
  }
}

client.onmessage = (ev: MessageEvent) => {
  const { payload, type } = JSON.parse(ev.data)
  switch (type) {
    case MESSAGE_TYPES.response:
      const { reqId } = payload
      const { method, callback } = requestStore.get(reqId)
      if (payload.error) {
        const message = `[${method}] WS Response error: ${payload.error}`
        console.error(message)
        callback(new Error(message), null)
      } else {
        callback(null, payload ? payload.data : null)
      }
      requestStore.remove(reqId)
      break
    case MESSAGE_TYPES.error:
      console.error(payload.error)
      break
    case MESSAGE_TYPES.notif:
      const eventName = payload.event
      // console.log(`[${eventName}] Event received: ${payload.data}`)
      eventStore.get(eventName).forEach(callback => {
        callback(payload.error, payload.data)
      })
      break
    default:
      console.error(`Invalid message type provided: ${type}`)
      break
  }
}

client.onerror = (ev: ErrorEvent) => {
  console.error('WEBSOCKET ERROR: ', ev.message)
}

client.onclose = (ev: CloseEvent) => {
  console.log(`CLOSED WEBSOCKETS CONNECTION: ${ev.reason}`)
  // TODO display message to user indicating that a page refresh is needed
}

export default client
