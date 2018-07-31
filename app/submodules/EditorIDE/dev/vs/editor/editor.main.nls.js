/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.9.0(2e2613f7739c31832496f617356f5fb8eadc2ca1)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

/*---------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/editor/editor.main.nls", {
	"vs/base/browser/ui/actionbar/actionbar": [
		"{0} ({1})"
	],
	"vs/base/browser/ui/aria/aria": [
		"{0} (occurred again)"
	],
	"vs/base/browser/ui/findinput/findInput": [
		"input"
	],
	"vs/base/browser/ui/findinput/findInputCheckboxes": [
		"Match Case",
		"Match Whole Word",
		"Use Regular Expression"
	],
	"vs/base/browser/ui/inputbox/inputBox": [
		"Error: {0}",
		"Warning: {0}",
		"Info: {0}"
	],
	"vs/base/common/keybindingLabels": [
		"Ctrl",
		"Shift",
		"Alt",
		"Windows",
		"Control",
		"Shift",
		"Alt",
		"Command",
		"Control",
		"Shift",
		"Alt",
		"Windows"
	],
	"vs/base/common/severity": [
		"Error",
		"Warning",
		"Info"
	],
	"vs/base/parts/quickopen/browser/quickOpenModel": [
		"{0}, picker",
		"picker"
	],
	"vs/base/parts/quickopen/browser/quickOpenWidget": [
		"Quick picker. Type to narrow down results.",
		"Quick Picker"
	],
	"vs/base/parts/tree/browser/treeDefaults": [
		"Collapse"
	],
	"vs/editor/browser/widget/diffEditorWidget": [
		"Cannot compare files because one file is too large."
	],
	"vs/editor/browser/widget/diffReview": [
		"Close",
		"Difference {0} of {1}: original {2}, {3} lines, modified {4}, {5} lines",
		"blank",
		"original {0}, modified {1}: {2}",
		"+ modified {0}: {1}",
		"- original {0}: {1}",
		"Go to Next Difference",
		"Go to Previous Difference"
	],
	"vs/editor/common/config/commonEditorConfig": [
		"Editor",
		"Controls the font family.",
		"Controls the font weight.",
		"Controls the font size in pixels.",
		"Controls the line height. Use 0 to compute the lineHeight from the fontSize.",
		"Controls the letter spacing in pixels.",
		"Controls the display of line numbers. Possible values are 'on', 'off', and 'relative'. 'relative' shows the line count from the current cursor position.",
		"Render vertical rulers after a certain number of monospace characters. Use multiple values for multiple rulers. No rulers are drawn if array is empty",
		"Characters that will be used as word separators when doing word related navigations or operations",
		"The number of spaces a tab is equal to. This setting is overriden based on the file contents when `editor.detectIndentation` is on.",
		"Expected 'number'. Note that the value \"auto\" has been replaced by the `editor.detectIndentation` setting.",
		"Insert spaces when pressing Tab. This setting is overriden based on the file contents when `editor.detectIndentation` is on.",
		"Expected 'boolean'. Note that the value \"auto\" has been replaced by the `editor.detectIndentation` setting.",
		"When opening a file, `editor.tabSize` and `editor.insertSpaces` will be detected based on the file contents.",
		"Controls if selections have rounded corners",
		"Controls if the editor will scroll beyond the last line",
		"Controls if the editor will scroll using an animation",
		"Controls if the minimap is shown",
		"Controls whether the minimap slider is automatically hidden. Possible values are 'always' and 'mouseover'",
		"Render the actual characters on a line (as opposed to color blocks)",
		"Limit the width of the minimap to render at most a certain number of columns",
		"Controls if we seed the search string in Find Widget from editor selection",
		"Controls if Find in Selection flag is turned on when multiple characters or lines of text are selected in the editor",
		"Lines will never wrap.",
		"Lines will wrap at the viewport width.",
		"Lines will wrap at `editor.wordWrapColumn`.",
		"Lines will wrap at the minimum of viewport and `editor.wordWrapColumn`.",
		"Controls how lines should wrap. Can be:\n - 'off' (disable wrapping),\n - 'on' (viewport wrapping),\n - 'wordWrapColumn' (wrap at `editor.wordWrapColumn`) or\n - 'bounded' (wrap at minimum of viewport and `editor.wordWrapColumn`).",
		"Controls the wrapping column of the editor when `editor.wordWrap` is 'wordWrapColumn' or 'bounded'.",
		"Controls the indentation of wrapped lines. Can be one of 'none', 'same' or 'indent'.",
		"A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events",
		"Maps to `Control` on Windows and Linux and to `Command` on OSX.",
		"Maps to `Alt` on Windows and Linux and to `Option` on OSX.",
		"The modifier to be used to add multiple cursors with the mouse. `ctrlCmd` maps to `Control` on Windows and Linux and to `Command` on OSX. The Go To Definition and Open Link mouse gestures will adapt such that they do not conflict with the multicursor modifier.",
		"Enable quick suggestions inside strings.",
		"Enable quick suggestions inside comments.",
		"Enable quick suggestions outside of strings and comments.",
		"Controls if suggestions should automatically show up while typing",
		"Controls the delay in ms after which quick suggestions will show up",
		"Enables pop-up that shows parameter documentation and type information as you type",
		"Controls if the editor should automatically close brackets after opening them",
		"Controls if the editor should automatically format the line after typing",
		"Controls if the editor should automatically format the pasted content. A formatter must be available and the formatter should be able to format a range in a document.",
		"Controls if the editor should automatically adjust the indentation when users type, paste or move lines. Indentation rules of the language must be available. ",
		"Controls if suggestions should automatically show up when typing trigger characters",
		"Controls if suggestions should be accepted on 'Enter' - in addition to 'Tab'. Helps to avoid ambiguity between inserting new lines or accepting suggestions. The value 'smart' means only accept a suggestion with Enter when it makes a textual change",
		"Controls if suggestions should be accepted on commit characters. For instance in JavaScript the semi-colon (';') can be a commit character that accepts a suggestion and types that character.",
		"Show snippet suggestions on top of other suggestions.",
		"Show snippet suggestions below other suggestions.",
		"Show snippets suggestions with other suggestions.",
		"Do not show snippet suggestions.",
		"Controls whether snippets are shown with other suggestions and how they are sorted.",
		"Controls whether copying without a selection copies the current line.",
		"Controls whether completions should be computed based on words in the document.",
		"Font size for the suggest widget",
		"Line height for the suggest widget",
		"Controls whether the editor should highlight similar matches to the selection",
		"Controls whether the editor should highlight semantic symbol occurrences",
		"Controls the number of decorations that can show up at the same position in the overview ruler",
		"Controls if a border should be drawn around the overview ruler.",
		"Control the cursor animation style, possible values are 'blink', 'smooth', 'phase', 'expand' and 'solid'",
		"Zoom the font of the editor when using mouse wheel and holding Ctrl",
		"Controls the cursor style, accepted values are 'block', 'block-outline', 'line', 'line-thin', 'underline' and 'underline-thin'",
		"Enables font ligatures",
		"Controls if the cursor should be hidden in the overview ruler.",
		"Controls how the editor should render whitespace characters, possibilities are 'none', 'boundary', and 'all'. The 'boundary' option does not render single spaces between words.",
		"Controls whether the editor should render control characters",
		"Controls whether the editor should render indent guides",
		"Controls how the editor should render the current line highlight, possibilities are 'none', 'gutter', 'line', and 'all'.",
		"Controls if the editor shows code lenses",
		"Controls whether the editor has code folding enabled",
		"Controls whether the fold controls on the gutter are automatically hidden.",
		"Highlight matching brackets when one of them is selected.",
		"Controls whether the editor should render the vertical glyph margin. Glyph margin is mostly used for debugging.",
		"Inserting and deleting whitespace follows tab stops",
		"Remove trailing auto inserted whitespace",
		"Keep peek editors open even when double clicking their content or when hitting Escape.",
		"Controls if the editor should allow to move selections via drag and drop.",
		"The editor will use platform APIs to detect when a Screen Reader is attached.",
		"The editor will be permanently optimized for usage with a Screen Reader.",
		"The editor will never be optimized for usage with a Screen Reader.",
		"Controls whether the editor should run in a mode where it is optimized for screen readers.",
		"Controls whether the editor should detect links and make them clickable",
		"Controls whether the editor should render the inline color decorators and color picker.",
		"Enables the code action lightbulb",
		"Controls if the diff editor shows the diff side by side or inline",
		"Controls if the diff editor shows changes in leading or trailing whitespace as diffs",
		"Controls if the diff editor shows +/- indicators for added/removed changes",
		"Controls if the Linux primary clipboard should be supported."
	],
	"vs/editor/common/config/editorOptions": [
		"The editor is not accessible at this time. Press Alt+F1 for options.",
		"Editor content"
	],
	"vs/editor/common/controller/cursor": [
		"Unexpected exception while executing command."
	],
	"vs/editor/common/model/textModelWithTokens": [
		"The mode has failed while tokenizing the input."
	],
	"vs/editor/common/modes/modesRegistry": [
		"Plain Text"
	],
	"vs/editor/common/services/bulkEdit": [
		"These files have changed in the meantime: {0}",
		"Made no edits",
		"Made {0} text edits in {1} files",
		"Made {0} text edits in one file"
	],
	"vs/editor/common/services/modelServiceImpl": [
		"[{0}]\n{1}",
		"[{0}] {1}"
	],
	"vs/editor/common/view/editorColorRegistry": [
		"Background color for the highlight of line at the cursor position.",
		"Background color for the border around the line at the cursor position.",
		"Background color of highlighted ranges, like by quick open and find features.",
		"Color of the editor cursor.",
		"The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.",
		"Color of whitespace characters in the editor.",
		"Color of the editor indentation guides.",
		"Color of editor line numbers.",
		"Color of the editor rulers.",
		"Foreground color of editor code lenses",
		"Background color behind matching brackets",
		"Color for matching brackets boxes",
		"Color of the overview ruler border.",
		"Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.",
		"Foreground color of error squigglies in the editor.",
		"Border color of error squigglies in the editor.",
		"Foreground color of warning squigglies in the editor.",
		"Border color of warning squigglies in the editor.",
		"Foreground color of info squigglies in the editor.",
		"Border color of info squigglies in the editor.",
		"Overview ruler marker color for range highlights.",
		"Overview ruler marker color for errors.",
		"Overview ruler marker color for warnings.",
		"Overview ruler marker color for infos."
	],
	"vs/editor/contrib/bracketMatching/common/bracketMatching": [
		"Go to Bracket"
	],
	"vs/editor/contrib/caretOperations/common/caretOperations": [
		"Move Caret Left",
		"Move Caret Right"
	],
	"vs/editor/contrib/caretOperations/common/transpose": [
		"Transpose Letters"
	],
	"vs/editor/contrib/clipboard/browser/clipboard": [
		"Cut",
		"Copy",
		"Paste",
		"Copy With Syntax Highlighting"
	],
	"vs/editor/contrib/comment/common/comment": [
		"Toggle Line Comment",
		"Add Line Comment",
		"Remove Line Comment",
		"Toggle Block Comment"
	],
	"vs/editor/contrib/contextmenu/browser/contextmenu": [
		"Show Editor Context Menu"
	],
	"vs/editor/contrib/find/browser/findWidget": [
		"Find",
		"Find",
		"Previous match",
		"Next match",
		"Find in selection",
		"Close",
		"Replace",
		"Replace",
		"Replace",
		"Replace All",
		"Toggle Replace mode",
		"Only the first 999 results are highlighted, but all find operations work on the entire text.",
		"{0} of {1}",
		"No Results"
	],
	"vs/editor/contrib/find/common/findController": [
		"Find",
		"Find Next",
		"Find Previous",
		"Find Next Selection",
		"Find Previous Selection",
		"Replace",
		"Add Selection To Next Find Match",
		"Add Selection To Previous Find Match",
		"Move Last Selection To Next Find Match",
		"Move Last Selection To Previous Find Match",
		"Select All Occurrences of Find Match",
		"Change All Occurrences",
		"Show Next Find Term",
		"Show Previous Find Term"
	],
	"vs/editor/contrib/folding/browser/folding": [
		"Unfold",
		"Unfold Recursively",
		"Fold",
		"Fold Recursively",
		"Fold All",
		"Unfold All",
		"Fold Level {0}"
	],
	"vs/editor/contrib/format/browser/formatActions": [
		"Made 1 formatting edit on line {0}",
		"Made {0} formatting edits on line {1}",
		"Made 1 formatting edit between lines {0} and {1}",
		"Made {0} formatting edits between lines {1} and {2}",
		"Format Document",
		"Format Selection"
	],
	"vs/editor/contrib/goToDeclaration/browser/goToDeclarationCommands": [
		"No definition found for '{0}'",
		"No definition found",
		" – {0} definitions",
		"Go to Definition",
		"Open Definition to the Side",
		"Peek Definition",
		"No implementation found for '{0}'",
		"No implementation found",
		" – {0} implementations",
		"Go to Implementation",
		"Peek Implementation",
		"No type definition found for '{0}'",
		"No type definition found",
		" – {0} type definitions",
		"Go to Type Definition",
		"Peek Type Definition"
	],
	"vs/editor/contrib/goToDeclaration/browser/goToDeclarationMouse": [
		"Click to show {0} definitions."
	],
	"vs/editor/contrib/gotoError/browser/gotoError": [
		"({0}/{1})",
		"Go to Next Error or Warning",
		"Go to Previous Error or Warning",
		"Editor marker navigation widget error color.",
		"Editor marker navigation widget warning color.",
		"Editor marker navigation widget info color.",
		"Editor marker navigation widget background."
	],
	"vs/editor/contrib/hover/browser/hover": [
		"Show Hover"
	],
	"vs/editor/contrib/hover/browser/modesContentHover": [
		"Loading..."
	],
	"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace": [
		"Replace with Previous Value",
		"Replace with Next Value"
	],
	"vs/editor/contrib/linesOperations/common/linesOperations": [
		"Copy Line Up",
		"Copy Line Down",
		"Move Line Up",
		"Move Line Down",
		"Sort Lines Ascending",
		"Sort Lines Descending",
		"Trim Trailing Whitespace",
		"Delete Line",
		"Indent Line",
		"Outdent Line",
		"Insert Line Above",
		"Insert Line Below",
		"Delete All Left",
		"Delete All Right",
		"Join Lines",
		"Transpose characters around the cursor",
		"Transform to Uppercase",
		"Transform to Lowercase"
	],
	"vs/editor/contrib/links/browser/links": [
		"Cmd + click to follow link",
		"Ctrl + click to follow link",
		"Cmd + click to execute command",
		"Ctrl + click to execute command",
		"Alt + click to follow link",
		"Alt + click to execute command",
		"Sorry, failed to open this link because it is not well-formed: {0}",
		"Sorry, failed to open this link because its target is missing.",
		"Open Link"
	],
	"vs/editor/contrib/multicursor/common/multicursor": [
		"Add Cursor Above",
		"Add Cursor Below",
		"Add Cursors to Line Ends"
	],
	"vs/editor/contrib/parameterHints/browser/parameterHints": [
		"Trigger Parameter Hints"
	],
	"vs/editor/contrib/parameterHints/browser/parameterHintsWidget": [
		"{0}, hint"
	],
	"vs/editor/contrib/quickFix/browser/quickFixCommands": [
		"Show Fixes ({0})",
		"Show Fixes",
		"Quick Fix"
	],
	"vs/editor/contrib/referenceSearch/browser/peekViewWidget": [
		"Close"
	],
	"vs/editor/contrib/referenceSearch/browser/referenceSearch": [
		" – {0} references",
		"Find All References"
	],
	"vs/editor/contrib/referenceSearch/browser/referencesController": [
		"Loading..."
	],
	"vs/editor/contrib/referenceSearch/browser/referencesModel": [
		"symbol in {0} on line {1} at column {2}",
		"1 symbol in {0}, full path {1}",
		"{0} symbols in {1}, full path {2}",
		"No results found",
		"Found 1 symbol in {0}",
		"Found {0} symbols in {1}",
		"Found {0} symbols in {1} files"
	],
	"vs/editor/contrib/referenceSearch/browser/referencesWidget": [
		"Failed to resolve file.",
		"{0} references",
		"{0} reference",
		"no preview available",
		"References",
		"No results",
		"References",
		"Background color of the peek view title area.",
		"Color of the peek view title.",
		"Color of the peek view title info.",
		"Color of the peek view borders and arrow.",
		"Background color of the peek view result list.",
		"Foreground color for line nodes in the peek view result list.",
		"Foreground color for file nodes in the peek view result list.",
		"Background color of the selected entry in the peek view result list.",
		"Foreground color of the selected entry in the peek view result list.",
		"Background color of the peek view editor.",
		"Background color of the gutter in the peek view editor.",
		"Match highlight color in the peek view result list.",
		"Match highlight color in the peek view editor."
	],
	"vs/editor/contrib/rename/browser/rename": [
		"No result.",
		"Successfully renamed '{0}' to '{1}'. Summary: {2}",
		"Sorry, rename failed to execute.",
		"Rename Symbol"
	],
	"vs/editor/contrib/rename/browser/renameInputField": [
		"Rename input. Type new name and press Enter to commit."
	],
	"vs/editor/contrib/smartSelect/common/smartSelect": [
		"Expand Select",
		"Shrink Select"
	],
	"vs/editor/contrib/suggest/browser/suggestController": [
		"Accepting '{0}' did insert the following text: {1}",
		"Trigger Suggest"
	],
	"vs/editor/contrib/suggest/browser/suggestWidget": [
		"Background color of the suggest widget.",
		"Border color of the suggest widget.",
		"Foreground color of the suggest widget.",
		"Background color of the selected entry in the suggest widget.",
		"Color of the match highlights in the suggest widget.",
		"Read More...{0}",
		"{0}, suggestion, has details",
		"{0}, suggestion",
		"Read less...{0}",
		"Loading...",
		"No suggestions.",
		"{0}, accepted",
		"{0}, suggestion, has details",
		"{0}, suggestion"
	],
	"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode": [
		"Toggle Tab Key Moves Focus"
	],
	"vs/editor/contrib/wordHighlighter/common/wordHighlighter": [
		"Background color of a symbol during read-access, like reading a variable.",
		"Background color of a symbol during write-access, like writing to a variable.",
		"Overview ruler marker color for symbol highlights.",
		"Overview ruler marker color for write-access symbol highlights."
	],
	"vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp": [
		"No selection",
		"Line {0}, Column {1} ({2} selected)",
		"Line {0}, Column {1}",
		"{0} selections ({1} characters selected)",
		"{0} selections",
		"Now changing the setting `accessibilitySupport` to 'on'.",
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
		"Show Accessibility Help"
	],
	"vs/editor/standalone/browser/inspectTokens/inspectTokens": [
		"Developer: Inspect Tokens"
	],
	"vs/editor/standalone/browser/quickOpen/gotoLine": [
		"Go to line {0} and character {1}",
		"Go to line {0}",
		"Type a line number between 1 and {0} to navigate to",
		"Type a character between 1 and {0} to navigate to",
		"Go to line {0}",
		"Type a line number, followed by an optional colon and a character number to navigate to",
		"Go to Line..."
	],
	"vs/editor/standalone/browser/quickOpen/quickCommand": [
		"{0}, commands",
		"Type the name of an action you want to execute",
		"Command Palette"
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
		"calls ({0})"
	],
	"vs/editor/standalone/browser/standaloneCodeEditor": [
		"Editor content",
		"Press Ctrl+F1 for Accessibility Options.",
		"Press Alt+F1 for Accessibility Options."
	],
	"vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast": [
		"Toggle High Contrast Theme"
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Default Configuration Overrides",
		"Configure editor settings to be overridden for {0} language.",
		"Configure editor settings to be overridden for a language.",
		"Cannot register '{0}'. This matches property pattern '\\\\[.*\\\\]$' for describing language specific editor settings. Use 'configurationDefaults' contribution.",
		"Cannot register '{0}'. This property is already registered."
	],
	"vs/platform/keybinding/common/abstractKeybindingService": [
		"({0}) was pressed. Waiting for second key of chord...",
		"The key combination ({0}, {1}) is not a command."
	],
	"vs/platform/message/common/message": [
		"Close",
		"Later",
		"Cancel"
	],
	"vs/platform/theme/common/colorRegistry": [
		"Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA",
		"Colors used in the workbench.",
		"Overall foreground color. This color is only used if not overridden by a component.",
		"Overall foreground color for error messages. This color is only used if not overridden by a component.",
		"Foreground color for description text providing additional information, for example for a label.",
		"Overall border color for focused elements. This color is only used if not overridden by a component.",
		"An extra border around elements to separate them from others for greater contrast.",
		"An extra border around active elements to separate them from others for greater contrast.",
		"The background color of text selections in the workbench (e.g. for input fields or text areas). Note that this does not apply to selections within the editor.",
		"Color for text separators.",
		"Foreground color for links in text.",
		"Foreground color for active links in text.",
		"Foreground color for preformatted text segments.",
		"Background color for block quotes in text.",
		"Border color for block quotes in text.",
		"Background color for code blocks in text.",
		"Shadow color of widgets such as find/replace inside the editor.",
		"Input box background.",
		"Input box foreground.",
		"Input box border.",
		"Border color of activated options in input fields.",
		"Input box foreground color for placeholder text.",
		"Input validation background color for information severity.",
		"Input validation border color for information severity.",
		"Input validation background color for information warning.",
		"Input validation border color for warning severity.",
		"Input validation background color for error severity.",
		"Input validation border color for error severity.",
		"Dropdown background.",
		"Dropdown foreground.",
		"Dropdown border.",
		"List/Tree background color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.",
		"List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.",
		"List/Tree background color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.",
		"List/Tree foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.",
		"List/Tree background color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.",
		"List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.",
		"List/Tree background color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.",
		"List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.",
		"List/Tree background when hovering over items using the mouse.",
		"List/Tree foreground when hovering over items using the mouse.",
		"List/Tree drag and drop background when moving items around using the mouse.",
		"List/Tree foreground color of the match highlights when searching inside the list/tree.",
		"Quick picker color for grouping labels.",
		"Quick picker color for grouping borders.",
		"Button foreground color.",
		"Button background color.",
		"Button background color when hovering.",
		"Badge background color. Badges are small information labels, e.g. for search results count.",
		"Badge foreground color. Badges are small information labels, e.g. for search results count.",
		"Scrollbar shadow to indicate that the view is scrolled.",
		"Scrollbar slider background color.",
		"Scrollbar slider background color when hovering.",
		"Scrollbar slider background color when active.",
		"Background color of the progress bar that can show for long running operations.",
		"Editor background color.",
		"Editor default foreground color.",
		"Background color of editor widgets, such as find/replace.",
		"Border color of editor widgets. The color is only used if the widget chooses to have a border and if the color is not overridden by a widget.",
		"Color of the editor selection.",
		"Color of the selected text for high contrast.",
		"Color of the selection in an inactive editor.",
		"Color for regions with the same content as the selection.",
		"Color of the current search match.",
		"Color of the other search matches.",
		"Color the range limiting the search.",
		"Highlight below the word for which a hover is shown.",
		"Background color of the editor hover.",
		"Border color of the editor hover.",
		"Color of active links.",
		"Background color for text that got inserted.",
		"Background color for text that got removed.",
		"Outline color for the text that got inserted.",
		"Outline color for text that got removed.",
		"Current header background in inline merge-conflicts.",
		"Current content background in inline merge-conflicts.",
		"Incoming header background in inline merge-conflicts.",
		"Incoming content background in inline merge-conflicts.",
		"Common ancestor header background in inline merge-conflicts.",
		"Common ancester content background in inline merge-conflicts.",
		"Border color on headers and the splitter in inline merge-conflicts.",
		"Current overview ruler foreground for inline merge-conflicts.",
		"Incoming overview ruler foreground for inline merge-conflicts.",
		"Common ancestor overview ruler foreground for inline merge-conflicts.",
		"Overview ruler marker color for find matches.",
		"Overview ruler marker color for selection highlights."
	],
	"vs/platform/workspaces/common/workspaces": [
		"Code Workspace",
		"Untitled (Workspace)",
		"{0} (Workspace)",
		"{0} (Workspace)"
	]
});