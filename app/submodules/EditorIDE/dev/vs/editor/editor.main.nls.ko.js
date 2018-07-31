/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.9.0(2e2613f7739c31832496f617356f5fb8eadc2ca1)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

define("vs/editor/editor.main.nls.ko", {
	"vs/base/browser/ui/actionbar/actionbar": [
		"{0}({1})",
	],
	"vs/base/browser/ui/aria/aria": [
		"{0}(다시 발생함)",
	],
	"vs/base/browser/ui/findinput/findInput": [
		"입력",
	],
	"vs/base/browser/ui/findinput/findInputCheckboxes": [
		"대/소문자 구분",
		"단어 단위로",
		"정규식 사용",
	],
	"vs/base/browser/ui/inputbox/inputBox": [
		"오류: {0}",
		"경고: {0}",
		"정보: {0}",
	],
	"vs/base/common/keybindingLabels": [
		"Ctrl",
		"<Shift>",
		"Alt",
		"Windows",
		"컨트롤",
		"<Shift>",
		"Alt",
		"명령",
		"컨트롤",
		"<Shift>",
		"Alt",
		"Windows",
	],
	"vs/base/common/severity": [
		"오류",
		"경고",
		"정보",
	],
	"vs/base/parts/quickopen/browser/quickOpenModel": [
		"{0}, 선택기",
		"선택기",
	],
	"vs/base/parts/quickopen/browser/quickOpenWidget": [
		"빠른 선택기입니다. 결과의 범위를 축소하려면 입력합니다.",
		"빠른 선택기",
	],
	"vs/base/parts/tree/browser/treeDefaults": [
		"축소",
	],
	"vs/editor/browser/widget/diffEditorWidget": [
		"파일 1개가 너무 커서 파일을 비교할 수 없습니다.",
	],
	"vs/editor/browser/widget/diffReview": [
		"닫기",
		"다른 항목 {0} / {1}: 원본 {2}, {3}행, 수정 {4}, {5}행",
		"비어 있음",
		"원본 {0}, 수정 {1}: {2}",
		"+ 수정됨 {0}: {1}",
		"- 원본 {0}: {1}",
		"다음 다른 항목으로 이동",
		"다음 다른 항목으로 이동",
	],
	"vs/editor/common/config/commonEditorConfig": [
		"편집기",
		"글꼴 패밀리를 제어합니다.",
		"글꼴 두께를 제어합니다.",
		"글꼴 크기(픽셀)를 제어합니다.",
		"줄 높이를 제어합니다. fontSize의 lineHeight를 계산하려면 0을 사용합니다.",
		"글자 간격을 픽셀 단위로 조정합니다.",
		"줄 번호의 표시 여부를 제어합니다. 가능한 값은 \'on\', \'off\', \'relative\'입니다. \'relative\'는 현재 커서 위치에서 줄 수를 표시합니다.",
		"특정 수의 고정 폭 문자 뒤에 세로 눈금자를 렌더링합니다. 여러 눈금자의 경우 여러 값을 사용합니다. 배열이 비어 있는 경우 눈금자가 그려져 있지 않습니다.",
		"단어 관련 탐색 또는 작업을 수행할 때 단어 구분 기호로 사용되는 문자입니다.",
		"탭 한 개에 해당하는 공백 수입니다. `editor.detectIndentation`이 켜져 있는 경우 이 설정은 파일 콘텐츠에 따라 재정의됩니다.",
		"\'number\'가 필요합니다. 값 \"auto\"는 `editor.detectIndentation` 설정에 의해 바뀌었습니다.",
		"<Tab> 키를 누를 때 공백을 삽입합니다. `editor.detectIndentation`이 켜져 있는 경우 이 설정은 파일 콘텐츠에 따라 재정의됩니다.",
		"\'boolean\'이 필요합니다. 값 \"auto\"는 `editor.detectIndentation` 설정에 의해 바뀌었습니다.",
		"파일을 열면 파일 콘텐츠를 기반으로 하여 \'editor.tabSize\'와 \'editor.insertSpaces\'가 검색됩니다.",
		"선택 항목의 모서리를 둥글게 할지 여부를 제어합니다.",
		"편집기에서 마지막 줄 이후로 스크롤할지 여부를 제어합니다.",
		"편집기에서 애니메이션을 사용하여 스크롤할지 여부를 제어합니다.",
		"미니맵 표시 여부를 제어합니다.",
		"미니맵 슬라이더를 자동으로 숨길지 결정합니다. 가능한 값은 \'always\' 및 \'mouseover\'입니다.",
		"줄의 실제 문자(색 블록 아님) 렌더링",
		"최대 특정 수의 열을 렌더링하도록 미니맵의 너비를 제한합니다.",
		"편집기 선택에서 Find Widget의 검색 문자열을 시딩할지 설정합니다.",
		"편집기에서 여러 글자 또는 행을 선택했을 때 Find in Selection 플래그를 켤지 설정합니다.",
		"줄이 바뀌지 않습니다.",
		"뷰포트 너비에서 줄이 바뀝니다.",
		"`editor.wordWrapColumn`에서 줄이 바뀝니다.",
		"뷰포트의 최소값 및 `editor.wordWrapColumn`에서 줄이 바뀝니다.",
		"줄 바꿈 여부를 제어합니다. 다음 중 하나일 수 있습니다.\n - \'off\' (줄 바꿈 사용 안 함),\n - \'on\' (뷰포트 줄 바꿈),\n - \'wordWrapColumn\' (`editor.wordWrapColumn`에서 줄 바꿈) 또는\n - \'bounded\' (뷰포트의 최소값 및 `editor.wordWrapColumn`에서 줄 바꿈).",
		"`editor.wordWrap`이 \'wordWrapColumn\' 또는 \'bounded\'인 경우 편집기의 열 줄 바꿈을 제어합니다.",
		"줄 바꿈 행의 들여쓰기를 제어합니다. \'none\', \'same\' 또는 \'indent\' 중 하나일 수 있습니다.",
		"마우스 휠 스크롤 이벤트의 `deltaX` 및 `deltaY`에서 사용할 승수",
		"Windows와 Linux의 \'Control\'을 OSX의 \'Command\'로 매핑합니다.",
		"Windows와 Linux의 \'Alt\'를 OSX의 \'Option\'으로 매핑합니다.",
		"마우스로 여러 커서를 추가할 때 사용할 수정자입니다. `ctrlCmd`는 Windows와 Linux에서 `Control`로 매핑되고 OSX에서 `Command`로 매핑됩니다. Go To Definition 및 Open Link 마우스 제스처가 멀티커서 수정자와 충돌하지 않도록 조정됩니다.",
		"문자열 내에서 빠른 제안을 사용합니다.",
		"주석 내에서 빠른 제안을 사용합니다.",
		"문자열 및 주석 외부에서 빠른 제안을 사용합니다.",
		"입력하는 동안 제안을 자동으로 표시할지 여부를 제어합니다.",
		"빠른 제안을 표시할 지연 시간(ms)을 제어합니다.",
		"입력과 동시에 매개변수 문서와 유형 정보를 표시하는 팝업을 사용",
		"괄호를 연 다음에 편집기에서 괄호를 자동으로 닫을지 여부를 제어합니다.",
		"입력 후 편집기에서 자동으로 줄의 서식을 지정할지 여부를 제어합니다.",
		"붙여넣은 콘텐츠의 서식을 편집기에서 자동으로 지정할지 여부를 제어합니다. 포맷터는 반드시 사용할 수 있어야 하며 문서에서 범위의 서식을 지정할 수 있어야 합니다.",
		"사용자가 입력을 하거나 행을 붙여넣기 또는 이동할 때 편집기가 자동으로 들여쓰기를 적용할지 결정합니다. 해당 언어의 들여쓰기 규칙이 있어야 합니다.",
		"트리거 문자를 입력할 때 제안을 자동으로 표시할지 여부를 제어합니다.",
		"\'Tab\' 키 외에 \'Enter\' 키에 대한 제안도 허용할지를 제어합니다. 새 줄을 삽입하는 동작과 제안을 허용하는 동작 간의 모호함을 없앨 수 있습니다.",
		"커밋 문자에 대한 제안을 허용할지를 제어합니다. 예를 들어 JavaScript에서는 세미콜론(\';\')이 제안을 허용하고 해당 문자를 입력하는 커밋 문자일 수 있습니다.",
		"다른 제안 위에 조각 제안을 표시합니다.",
		"다른 제안 아래에 조각 제안을 표시합니다.",
		"다른 제안과 함께 조각 제안을 표시합니다.",
		"코드 조각 제안을 표시하지 않습니다.\n",
		"코드 조각이 다른 추천과 함께 표시되는지 여부 및 정렬 방법을 제어합니다.",
		"선택 영역 없이 현재 줄 복사 여부를 제어합니다.",
		"문서 내 단어를 기반으로 완성을 계산할지 여부를 제어합니다.",
		"제안 위젯의 글꼴 크기",
		"제안 위젯의 줄 높이",
		"편집기에서 선택 항목과 유사한 일치 항목을 강조 표시할지 여부를 제어합니다.",
		"편집기에서 의미 체계 기호 항목을 강조 표시할지 여부를 제어합니다.",
		"개요 눈금자에서 동일한 위치에 표시될 수 있는 장식 수를 제어합니다.",
		"개요 눈금자 주위에 테두리를 그릴지 여부를 제어합니다.",
		"커서 애니메이션 스타일을 제어합니다. 가능한 값은 \'blink\', \'smooth\', \'phase\', \'expand\' 및 \'solid\'입니다.",
		"마우스 휠을 사용할 때 Ctrl 키를 누르고 있으면 편집기의 글꼴 확대/축소",
		"커서 스타일을 제어합니다. 허용되는 값은 \'블록\', \'블록-윤곽\', \'줄\', \'줄-가늘게\', \'밑줄\' 및 \'밑줄-가늘게\'입니다.",
		"글꼴 합자 사용",
		"커서가 개요 눈금자에서 가려져야 하는지 여부를 제어합니다.",
		"편집기에서 공백 문자를 렌더링하는 방법을 제어합니다. 가능한 값은 \'none\', \'boundary\' 및 \'all\'입니다. \'boundary\' 옵션은 단어 사이의 한 칸 공백을 렌더링하지 않습니다.",
		"편집기에서 제어 문자를 렌더링할지를 제어합니다.",
		"편집기에서 들여쓰기 가이드를 렌더링할지를 제어합니다.",
		"편집기가 현재 줄 강조 표시를 렌더링하는 방식을 제어합니다. 가능한 값은 \'none\', \'gutter\', \'line\' 및 \'all\'입니다.",
		"편집기에서 코드 필터를 표시하는지 여부를 제어합니다.",
		"편집기에서 코드 접기를 사용할지 여부를 제어합니다.",
		"거터의 폴드 컨트롤을 자동으로 숨길지 결정합니다.",
		"대괄호 중 하나를 선택할 때 일치하는 대괄호를 강조 표시합니다.",
		"편집기에서 세로 문자 모양 여백을 렌더링할지 여부를 제어합니다. 문자 모양 여백은 주로 디버깅에 사용됩니다.",
		"탭 정지 뒤에 공백 삽입 및 삭제",
		"끝에 자동 삽입된 공백 제거",
		"해당 콘텐츠를 두 번 클릭하거나 <Esc> 키를 누르더라도 Peek 편집기를 열린 상태로 유지합니다.",
		"편집기에서 끌어서 놓기로 선택 영역을 이동할 수 있는지 여부를 제어합니다.",
		"편집기가 스크린 리더가 연결되면 플랫폼 API를 사용하여 감지합니다.",
		"편집기가 스크린 리더 사용을 위해 영구적으로 최적화됩니다.",
		"편집기가 스크린 리더 사용을 위해 최적화되지 않습니다.",
		"편집기를 스크린 리더를 위해 최적화된 모드로 실행할지 결정합니다.",
		"편집기에서 링크를 감지하고 클릭할 수 있게 만들지 결정합니다.",
		"편집기에서 인라인 색 데코레이터 및 색 선택을 렌더링할지를 제어합니다.",
		"코드 동작 전구를 사용합니다.",
		"diff 편집기에서 diff를 나란히 표시할지 인라인으로 표시할지 여부를 제어합니다.",
		"diff 편집기에서 선행 공백 또는 후행 공백 변경을 diffs로 표시할지 여부를 제어합니다.",
		"diff 편집기에서 추가/제거된 변경 내용에 대해 +/- 표시기를 표시하는지 여부를 제어합니다.",
		"Linux 주 클립보드의 지원 여부를 제어합니다.",
	],
	"vs/editor/common/config/editorOptions": [
		"지금은 편집기를 사용할 수 없습니다. Alt+F1을 눌러 옵션을 보세요.",
		"편집기 콘텐츠",
	],
	"vs/editor/common/controller/cursor": [
		"명령을 실행하는 동안 예기치 않은 예외가 발생했습니다.",
	],
	"vs/editor/common/model/textModelWithTokens": [
		"입력을 토큰화하는 동안 모드에서 오류가 발생했습니다.",
	],
	"vs/editor/common/modes/modesRegistry": [
		"일반 텍스트",
	],
	"vs/editor/common/services/bulkEdit": [
		"이러한 파일이 동시에 변경되었습니다. {0}",
		"편집하지 않음",
		"{1}개 파일에서 {0}개 텍스트 편집을 수행함",
		"1개 파일에서 {0}개 텍스트 편집을 수행함",
	],
	"vs/editor/common/services/modelServiceImpl": [
		"[{0}]\n{1}",
		"[{0}] {1}",
	],
	"vs/editor/common/view/editorColorRegistry": [
		"커서 위치의 줄 강조 표시에 대한 배경색입니다.",
		"커서 위치의 줄 테두리에 대한 배경색입니다.",
		"빠른 열기 및 찾기 기능 등을 통해 강조 표시된 영역의 배경색입니다.",
		"편집기 커서 색입니다.",
		"편집기 커서의 배경색입니다. 블록 커서와 겹치는 글자의 색상을 사용자 정의할 수 있습니다.",
		"편집기의 공백 문자 색입니다.",
		"편집기 들여쓰기 안내선 색입니다.",
		"편집기 줄 번호 색입니다.",
		"편집기 눈금의 색상입니다.",
		"편집기 코드 렌즈의 전경색입니다.",
		"일치하는 브래킷 뒤의 배경색입니다.",
		"일치하는 브래킷 박스의 색상",
		"개요 눈금 경계의 색상입니다.",
		"편집기 거터의 배경색입니다. 거터에는 글리프 여백과 행 수가 있습니다.",
		"편집기 내 오류 표시선의 전경색입니다.",
		"편집기 내 오류 표시선의 테두리 색입니다.",
		"편집기 내 경고 표시선의 전경색입니다.",
		"편집기 내 경고 표시선의 테두리 색입니다.",
		"편집기 내 정보 표시선의 전경색입니다.",
		"편집기 내 정보 표시선의 테두리 색입니다.",
		"범위 강조 표시의 개요 눈금자 마커 색입니다.",
		"오류의 개요 눈금자 마커 색입니다.",
		"경고의 개요 눈금자 마커 색입니다.",
		"정보의 개요 눈금자 마커 색입니다.",
	],
	"vs/editor/contrib/bracketMatching/common/bracketMatching": [
		"대괄호로 이동",
	],
	"vs/editor/contrib/caretOperations/common/caretOperations": [
		"캐럿을 왼쪽으로 이동",
		"캐럿을 오른쪽으로 이동",
	],
	"vs/editor/contrib/caretOperations/common/transpose": [
		"문자 바꾸기",
	],
	"vs/editor/contrib/clipboard/browser/clipboard": [
		"잘라내기",
		"복사",
		"붙여넣기",
		"구문을 강조 표시하여 복사",
	],
	"vs/editor/contrib/comment/common/comment": [
		"줄 주석 설정/해제",
		"줄 주석 추가",
		"줄 주석 제거",
		"블록 주석 설정/해제",
	],
	"vs/editor/contrib/contextmenu/browser/contextmenu": [
		"편집기 상황에 맞는 메뉴 표시",
	],
	"vs/editor/contrib/find/browser/findWidget": [
		"찾기",
		"찾기",
		"이전 검색 결과",
		"다음 검색 결과",
		"선택 항목에서 찾기",
		"닫기",
		"바꾸기",
		"바꾸기",
		"바꾸기",
		"모두 바꾸기",
		"바꾸기 모드 설정/해제",
		"처음 999개의 결과가 강조 표시되지만 모든 찾기 작업은 전체 텍스트에 대해 수행됩니다.",
		"{0}/{1}",
		"결과 없음",
	],
	"vs/editor/contrib/find/common/findController": [
		"찾기",
		"다음 찾기",
		"이전 찾기",
		"다음 선택 찾기",
		"이전 선택 찾기",
		"바꾸기",
		"다음 일치 항목 찾기에 선택 항목 추가",
		"이전 일치 항목 찾기에 선택 항목 추가",
		"다음 일치 항목 찾기로 마지막 선택 항목 이동",
		"마지막 선택 항목을 이전 일치 항목 찾기로 이동",
		"일치 항목 찾기의 모든 항목 선택",
		"모든 항목 변경",
		"다음 검색어 표시",
		"이전 검색어 표시",
	],
	"vs/editor/contrib/folding/browser/folding": [
		"펼치기",
		"재귀적으로 펼치기",
		"접기",
		"재귀적으로 접기",
		"모두 접기",
		"모두 펼치기",
		"수준 {0} 접기",
	],
	"vs/editor/contrib/format/browser/formatActions": [
		"줄 {0}에서 1개 서식 편집을 수행했습니다.",
		"줄 {1}에서 {0}개 서식 편집을 수행했습니다.",
		"줄 {0}과(와) {1} 사이에서 1개 서식 편집을 수행했습니다.",
		"줄 {1}과(와) {2} 사이에서 {0}개 서식 편집을 수행했습니다.",
		"문서 서식",
		"선택 영역 서식",
	],
	"vs/editor/contrib/goToDeclaration/browser/goToDeclarationCommands": [
		"\'{0}\'에 대한 정의를 찾을 수 없습니다.",
		"정의를 찾을 수 없음",
		"– {0} 정의",
		"정의로 이동",
		"측면에서 정의 열기",
		"정의 피킹(Peeking)",
		"\'{0}\'에 대한 구현을 찾을 수 없습니다.",
		"구현을 찾을 수 없습니다.",
		" – {0} 개 구현",
		"구현으로 이동",
		"구현 미리 보기",
		"\'{0}\'에 대한 형식 정의를 찾을 수 없습니다.",
		"형식 정의를 찾을 수 없습니다.",
		"– {0} 형식 정의",
		"형식 정의로 이동",
		"형식 정의 미리 보기",
	],
	"vs/editor/contrib/goToDeclaration/browser/goToDeclarationMouse": [
		"{0}개 정의를 표시하려면 클릭하세요.",
	],
	"vs/editor/contrib/gotoError/browser/gotoError": [
		"({0}/{1})",
		"다음 오류 또는 경고로 이동",
		"이전 오류 또는 경고로 이동",
		"편집기 표식 탐색 위젯 오류 색입니다.",
		"편집기 표식 탐색 위젯 경고 색입니다.",
		"편집기 표식 탐색 위젯 정보 색입니다.",
		"편집기 표식 탐색 위젯 배경입니다.",
	],
	"vs/editor/contrib/hover/browser/hover": [
		"가리키기 표시",
	],
	"vs/editor/contrib/hover/browser/modesContentHover": [
		"로드 중...",
	],
	"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace": [
		"이전 값으로 바꾸기",
		"다음 값으로 바꾸기",
	],
	"vs/editor/contrib/linesOperations/common/linesOperations": [
		"위에 줄 복사",
		"아래에 줄 복사",
		"줄 위로 이동",
		"줄 아래로 이동",
		"줄을 오름차순 정렬",
		"줄을 내림차순으로 정렬",
		"후행 공백 자르기",
		"줄 삭제",
		"줄 들여쓰기",
		"줄 내어쓰기",
		"위에 줄 삽입",
		"아래에 줄 삽입",
		"왼쪽 모두 삭제",
		"우측에 있는 항목 삭제",
		"줄 연결",
		"커서 주위 문자 바꾸기",
		"대문자로 변환",
		"소문자로 변환",
	],
	"vs/editor/contrib/links/browser/links": [
		"Cmd 키를 누르고 클릭하여 링크로 이동",
		"Ctrl 키를 누르고 클릭하여 링크로 이동",
		"명령을 실행하려면 Cmd+클릭",
		"명령을 실행하려면 Ctrl+클릭",
		"Alt 키를 누르고 클릭하여 링크로 이동",
		"명령을 실행하려면 Alt+클릭",
		"죄송합니다. 이 링크는 형식이 올바르지 않으므로 열지 못했습니다. {0}",
		"죄송합니다. 대상이 없으므로 이 링크를 열지 못했습니다.",
		"링크 열기",
	],
	"vs/editor/contrib/multicursor/common/multicursor": [
		"위에 커서 추가",
		"아래에 커서 추가",
		"줄 끝에 커서 추가",
	],
	"vs/editor/contrib/parameterHints/browser/parameterHints": [
		"매개 변수 힌트 트리거",
	],
	"vs/editor/contrib/parameterHints/browser/parameterHintsWidget": [
		"{0}, 힌트",
	],
	"vs/editor/contrib/quickFix/browser/quickFixCommands": [
		"수정 사항 표시({0})",
		"수정 사항 표시",
		"빠른 수정",
	],
	"vs/editor/contrib/referenceSearch/browser/peekViewWidget": [
		"닫기",
	],
	"vs/editor/contrib/referenceSearch/browser/referenceSearch": [
		"–참조 {0}개",
		"모든 참조 찾기",
	],
	"vs/editor/contrib/referenceSearch/browser/referencesController": [
		"로드 중...",
	],
	"vs/editor/contrib/referenceSearch/browser/referencesModel": [
		"{2}열, {1}줄, {0}의 기호",
		"{0}의 기호 1개, 전체 경로 {1}",
		"{1}의 기호 {0}개, 전체 경로 {2}",
		"결과 없음",
		"{0}에서 기호 1개를 찾았습니다.",
		"{1}에서 기호 {0}개를 찾았습니다.",
		"{1}개 파일에서 기호 {0}개를 찾았습니다.",
	],
	"vs/editor/contrib/referenceSearch/browser/referencesWidget": [
		"파일을 확인하지 못했습니다.",
		"참조 {0}개",
		"참조 {0}개",
		"미리 보기를 사용할 수 없음",
		"참조",
		"결과 없음",
		"참조",
		"Peek 뷰 제목 영역의 배경색입니다.",
		"Peek 뷰 제목 색입니다.",
		"Peek 뷰 제목 정보 색입니다.",
		"Peek 뷰 테두리 및 화살표 색입니다.",
		"Peek 뷰 결과 목록의 배경색입니다.",
		"Peek 뷰 결과 목록에서 라인 노드의 전경색입니다.",
		"Peek 뷰 결과 목록에서 파일 노드의 전경색입니다.",
		"Peek 뷰 결과 목록에서 선택된 항목의 배경색입니다.",
		"Peek 뷰 결과 목록에서 선택된 항목의 전경색입니다.",
		"Peek 뷰 편집기의 배경색입니다.",
		"Peek 뷰 편집기의 거터 배경색입니다.",
		"Peek 뷰 결과 목록의 일치 항목 강조 표시 색입니다.",
		"Peek 뷰 편집기의 일치 항목 강조 표시 색입니다.",
	],
	"vs/editor/contrib/rename/browser/rename": [
		"결과가 없습니다.",
		"\'{0}\'을(를) \'{1}\'(으)로 이름을 변경했습니다. 요약: {2}",
		"죄송합니다. 이름 바꾸기를 실행하지 못했습니다.",
		"기호 이름 바꾸기",
	],
	"vs/editor/contrib/rename/browser/renameInputField": [
		"입력 이름을 바꾸세요. 새 이름을 입력한 다음 [Enter] 키를 눌러 커밋하세요.",
	],
	"vs/editor/contrib/smartSelect/common/smartSelect": [
		"선택 확장",
		"선택 축소",
	],
	"vs/editor/contrib/suggest/browser/suggestController": [
		"\'{0}\'을(를) 적용하여 다음 텍스트가 삽입되었습니다.\n {1}",
		"제안 항목 트리거",
	],
	"vs/editor/contrib/suggest/browser/suggestWidget": [
		"제안 위젯의 배경색입니다.",
		"제안 위젯의 테두리 색입니다.",
		"제안 위젯의 전경색입니다.",
		"제한 위젯에서 선택된 항목의 배경색입니다.",
		"제안 위젯의 일치 항목 강조 표시 색입니다.",
		"자세히 알아보기...{0}",
		"{0}, 제안, 세부 정보 있음",
		"{0}, 제안",
		"간단히 보기...{0}",
		"로드 중...",
		"제안 항목이 없습니다.",
		"{0}, 수락됨",
		"{0}, 제안, 세부 정보 있음",
		"{0}, 제안",
	],
	"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode": [
		"<Tab> 키로 포커스 이동 설정/해제",
	],
	"vs/editor/contrib/wordHighlighter/common/wordHighlighter": [
		"변수 읽기와 같은 읽기 액세스 중 기호의 배경색입니다.",
		"변수에 쓰기와 같은 쓰기 액세스 중 기호의 배경색입니다.",
		"기호 강조 표시의 개요 눈금자 마커 색입니다.",
		"쓰기 권한 기호 강조 표시의 개요 눈금자 마커 색입니다.",
	],
	"vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp": [
		"No selection",
		"Line {0}, Column {1} ({2} selected)",
		"Line {0}, Column {1}",
		"{0} selections ({1} characters selected)",
		"{0} selections",
		"Now changing the setting `accessibilitySupport` to \'on\'.",
		"Now opening the Editor Accessibility documentation page.",
		" in a read-only pane of a diff editor.",
		" in a pane of a diff editor.",
		" in a read-only code editor",
		" in a code editor",
		"To configure the editor to be optimized for usage with a Screen Reader press Command+E now.",
		"To configure the editor to be optimized for usage with a Screen Reader press Control+E now.",
		"The editor is configured to be optimized for usage with a Screen Reader.",
		"The editor is configured to never be optimized for usage with a Screen Reader, which is not the case at this time.",
		"Pressing Tab in the current editor will move focus to the next focusable element. Toggle this behavior by pressing {0}.",
		"Pressing Tab in the current editor will move focus to the next focusable element. The command {0} is currently not triggerable by a keybinding.",
		"Pressing Tab in the current editor will insert the tab character. Toggle this behavior by pressing {0}.",
		"Pressing Tab in the current editor will insert the tab character. The command {0} is currently not triggerable by a keybinding.",
		"Press Command+H now to open a browser window with more information related to editor accessibility.",
		"Press Control+H now to open a browser window with more information related to editor accessibility.",
		"You can dismiss this tooltip and return to the editor by pressing Escape or Shift+Escape.",
		"Show Accessibility Help",
	],
	"vs/editor/standalone/browser/inspectTokens/inspectTokens": [
		"Developer: Inspect Tokens",
	],
	"vs/editor/standalone/browser/quickOpen/gotoLine": [
		"Go to line {0} and character {1}",
		"Go to line {0}",
		"Type a line number between 1 and {0} to navigate to",
		"Type a character between 1 and {0} to navigate to",
		"Go to line {0}",
		"Type a line number, followed by an optional colon and a character number to navigate to",
		"Go to Line...",
	],
	"vs/editor/standalone/browser/quickOpen/quickCommand": [
		"{0}, commands",
		"Type the name of an action you want to execute",
		"Command Palette",
	],
	"vs/editor/standalone/browser/quickOpen/quickOutline": [
		"{0}, symbols",
		"Type the name of an identifier you wish to navigate to",
		"Go to Symbol...",
		"symbols ({0})",
		"modules ({0})",
		"classes ({0})",
		"interfaces ({0})",
		"methods ({0})",
		"functions ({0})",
		"properties ({0})",
		"variables ({0})",
		"variables ({0})",
		"constructors ({0})",
		"calls ({0})",
	],
	"vs/editor/standalone/browser/standaloneCodeEditor": [
		"Editor content",
		"Press Ctrl+F1 for Accessibility Options.",
		"Press Alt+F1 for Accessibility Options.",
	],
	"vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast": [
		"Toggle High Contrast Theme",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"기본 구성 재정의",
		"{0} 언어에 대해 재정의할 편집기 설정을 구성합니다.",
		"언어에 대해 재정의할 편집기 설정을 구성합니다.",
		"\'{0}\'을(를) 등록할 수 없습니다. 이는 언어별 편집기 설정을 설명하는 속성 패턴인 \'\\\\[.*\\\\]$\'과(와) 일치합니다. \'configurationDefaults\' 기여를 사용하세요.",
		"\'{0}\'을(를) 등록할 수 없습니다. 이 속성은 이미 등록되어 있습니다.",
	],
	"vs/platform/keybinding/common/abstractKeybindingService": [
		"({0})을(를) 눌렀습니다. 둘째 키는 잠시 기다렸다가 누르세요.",
		"키 조합({0}, {1})은 명령이 아닙니다.",
	],
	"vs/platform/message/common/message": [
		"닫기",
		"나중에",
		"취소",
	],
	"vs/platform/theme/common/colorRegistry": [
		"잘못된 색 형식입니다. #RGB, #RGBA, #RRGGBB 또는 #RRGGBBAA를 사용하세요.",
		"워크벤치에서 사용되는 색입니다.",
		"전체 전경색입니다. 이 색은 구성 요소에서 재정의하지 않은 경우에만 사용됩니다.",
		"오류 메시지에 대한 전체 전경색입니다. 이 색은 구성 요소에서 재정의하지 않은 경우에만 사용됩니다.",
		"레이블과 같이 추가 정보를 제공하는 설명 텍스트의 전경색입니다.",
		"포커스가 있는 요소의 전체 테두리 색입니다. 이 색은 구성 요소에서 재정의하지 않은 경우에만 사용됩니다.",
		"더 뚜렷이 대비되도록 요소를 다른 요소와 구분하는 요소 주위의 추가 테두리입니다.",
		"더 뚜렷이 대비되도록 요소를 다른 요소와 구분하는 활성 요소 주위의 추가 테두리입니다.",
		"워크벤치의 텍스트 선택(예: 입력 필드 또는 텍스트 영역) 전경색입니다. 편집기 내의 선택에는 적용되지 않습니다.",
		"텍스트 구분자 색상입니다.",
		"텍스트 내 링크의 전경색입니다.",
		"텍스트 내 활성 링크의 전경색입니다.",
		"미리 서식이 지정된 텍스트 세그먼트의 전경색입니다.",
		"텍스트 내 블록 인용의 전경색입니다.",
		"텍스트 내 블록 인용의 테두리 색입니다.",
		"텍스트 내 코드 블록의 전경색입니다.",
		"편집기 내에서 찾기/바꾸기 같은 위젯의 그림자 색입니다.",
		"입력 상자 배경입니다.",
		"입력 상자 전경입니다.",
		"입력 상자 테두리입니다.",
		"입력 필드에서 활성화된 옵션의 테두리 색입니다.",
		"위치 표시자 텍스트에 대한 입력 상자 전경색입니다.",
		"정보 심각도의 입력 유효성 검사 배경색입니다.",
		"정보 심각도의 입력 유효성 검사 테두리 색입니다.",
		"정보 경고의 입력 유효성 검사 배경색입니다.",
		"경고 심각도의 입력 유효성 검사 테두리 색입니다.",
		"오류 심각도의 입력 유효성 검사 배경색입니다.",
		"오류 심각도의 입력 유효성 검사 테두리 색입니다.",
		"드롭다운 배경입니다.",
		"드롭다운 전경입니다.",
		"드롭다운 테두리입니다.",
		"목록/트리가 활성 상태인 경우 포커스가 있는 항목의 목록/트리 배경색입니다. 목록/트리가 활성 상태이면 키보드 포커스를 가지며, 비활성 상태이면 포커스가 없습니다.",
		"목록/트리가 활성 상태인 경우 포커스가 있는 항목의 목록/트리 전경색입니다. 목록/트리가 활성 상태이면 키보드 포커스를 가지며, 비활성 상태이면 포커스가 없습니다.",
		"목록/트리가 활성 상태인 경우 선택한 항목의 목록/트리 배경색입니다. 목록/트리가 활성 상태이면 키보드 포커스를 가지며, 비활성 상태이면 포커스가 없습니다.",
		"목록/트리가 활성 상태인 경우 선택한 항목의 목록/트리 전경색입니다. 목록/트리가 활성 상태이면 키보드 포커스를 가지며, 비활성 상태이면 포커스가 없습니다.",
		"목록/트리가 비활성 상태인 경우 선택한 항목의 목록/트리 배경색입니다. 목록/트리가 활성 상태이면 키보드 포커스를 가지며, 비활성 상태이면 포커스가 없습니다.",
		"목록/트리가 비활성 상태인 경우 선택한 항목의 목록/트리 전경색입니다. 목록/트리가 활성 상태이면 키보드 포커스를 가지며, 비활성 상태이면 포커스가 없습니다.",
		"목록/트리가 비활성 상태인 경우 선택한 항목의 목록/트리 배경색입니다. 목록/트리가 활성 상태이면 키보드 포커스를 가지며, 비활성 상태이면 포커스가 없습니다.",
		"목록/트리가 비활성 상태인 경우 선택한 항목의 목록/트리 전경색입니다. 목록/트리가 활성 상태이면 키보드 포커스를 가지며, 비활성 상태이면 포커스가 없습니다.",
		"마우스로 항목을 가리킬 때 목록/트리 배경입니다.",
		"마우스로 항목을 가리킬 때 목록/트리 전경입니다.",
		"마우스로 항목을 이동할 때 목록/트리 끌어서 놓기 배경입니다.",
		"목록/트리 내에서 검색할 때 일치 항목 강조 표시의 목록/트리 전경색입니다.",
		"그룹화 레이블에 대한 빠른 선택기 색입니다.",
		"그룹화 테두리에 대한 빠른 선택기 색입니다.",
		"단추 기본 전경색입니다.",
		"단추 배경색입니다.",
		"마우스로 가리킬 때 단추 배경색입니다.",
		"배지 배경색입니다. 배지는 검색 결과 수와 같은 소량의 정보 레이블입니다.",
		"배지 전경색입니다. 배지는 검색 결과 수와 같은 소량의 정보 레이블입니다.",
		"스크롤되는 보기를 나타내는 스크롤 막대 그림자입니다.",
		"스크롤 막대 슬라이버 배경색입니다.",
		"마우스로 가리킬 때 스크롤 막대 슬라이더 배경색입니다.",
		"활성 상태일 때 스크롤 막대 슬라이더 배경색입니다.",
		"오래 실행 중인 작업에 대해 표시되는 진행률 표시 막대의 배경색입니다.",
		"편집기 배경색입니다.",
		"편집기 기본 전경색입니다.",
		"찾기/바꾸기 같은 편집기 위젯의 배경색입니다.",
		"편집기 위젯의 테두리 색입니다. 위젯에 테두리가 있고 위젯이 색상을 무시하지 않을 때만 사용됩니다.",
		"편집기 선택 영역의 색입니다.",
		"고대비를 위한 선택 텍스트의 색입니다.",
		"비활성 편집기 선택 영역의 색입니다.",
		"선택 영역과 동일한 콘텐츠가 있는 영역의 색입니다.",
		"현재 검색 일치 항목의 색입니다.",
		"기타 검색 일치 항목의 색입니다.",
		"검색을 제한하는 영역의 색을 지정합니다.",
		"호버가 표시된 단어 아래를 강조 표시합니다.",
		"편집기 호버의 배경색.",
		"편집기 호버의 테두리 색입니다.",
		"활성 링크의 색입니다.",
		"삽입된 텍스트의 배경색입니다.",
		"제거된 텍스트의 배경색입니다.",
		"삽입된 텍스트의 윤곽선 색입니다.",
		"제거된 텍스트의 윤곽선 색입니다.",
		"인라인 병합 충돌의 현재 헤더 배경입니다.",
		"인라인 병합 충돌의 현재 콘텐츠 배경입니다.",
		"인라인 병합 충돌에서 수신 헤더 배경입니다.",
		"인라인 병합 충돌에서 수신 콘텐츠 배경입니다.",
		"인라인 병합 충돌의 공통 과거 헤더 배경입니다.",
		"인라인 병합 충돌의 공통 과거 콘텐츠 배경입니다.",
		"인라인 병합 충돌에서 헤더 및 스플리터의 테두리 색입니다.",
		"인라인 병합 충돌에서 현재 개요 눈금 전경색입니다.",
		"인라인 병합 충돌에서 수신 개요 눈금 전경색입니다.",
		"인라인 병합 충돌에서 공통 과거 개요 눈금 전경색입니다.",
		"찾기 일치 항목의 개요 눈금자 마커 색입니다.",
		"선택 영역 강조 표시의 개요 눈금자 마커 색입니다.",
	],
	"vs/platform/workspaces/common/workspaces": [
		"코드 작업 영역",
		"제목 없음(작업 영역)",
		"{0}(작업 영역)",
		"{0}(작업 영역)",
	]
});