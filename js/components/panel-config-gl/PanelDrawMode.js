"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useProperty = _interopRequireDefault(require("../hooks/useProperty"));
var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));
var _ButtonSet = _interopRequireDefault(require("../zhn-atoms/ButtonSet"));
var _InputSelect = _interopRequireDefault(require("../zhn-select/InputSelect"));
var _Panel = require("./Panel.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const DRAW_MODE_OPTIONS = [{
  caption: "TRIANGLES",
  value: "TRIANGLES"
}, {
  caption: "TRIANGLE_STRIP",
  value: "TRIANGLE_STRIP"
}, {
  caption: "TRIANGLE_FAN",
  value: "TRIANGLE_FAN"
}, {
  caption: "LINES",
  value: "LINES"
}, {
  caption: "LINE_STRIP",
  value: "LINE_STRIP"
}, {
  caption: "LINE_LOOP",
  value: "LINE_LOOP"
}, {
  caption: "POINTS",
  value: "POINTS"
}];
const S_BT_SET = {
  position: 'relative',
  top: -6
};
const PanelDrawMode = _ref => {
  let {
    onGetComp
  } = _ref;
  const [setDrawMode, getDrawMode] = (0, _useProperty.default)(),
    _hSetDrawMode = (0, _uiApi.useCallback)(() => {
      const drawMode = getDrawMode();
      if (drawMode) {
        const comp = onGetComp();
        comp.drawMode = drawMode.value;
      }
    }, [onGetComp, getDrawMode]);
  return (0, _jsxRuntime.jsx)(_OpenClose.default, {
    caption: "DrawMode",
    style: _Panel.OPEN_CLOSE,
    childrenStyle: _Panel.OC_CHILDREN,
    children: (0, _jsxRuntime.jsxs)("div", {
      style: _Panel.OC_DIV,
      children: [(0, _jsxRuntime.jsx)(_InputSelect.default, {
        width: "170",
        options: DRAW_MODE_OPTIONS,
        styleRoot: _Panel.INPUT_SELECT,
        onSelect: setDrawMode
      }), (0, _jsxRuntime.jsx)(_ButtonSet.default, {
        style: S_BT_SET,
        mode: 1,
        onClick: _hSetDrawMode
      })]
    })
  });
};
var _default = exports.default = PanelDrawMode;
//# sourceMappingURL=PanelDrawMode.js.map