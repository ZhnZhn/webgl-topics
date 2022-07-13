"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _useProperty2 = _interopRequireDefault(require("../hooks/useProperty"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _Panel = require("./Panel.Style");

var _jsxRuntime = require("react/jsx-runtime");

var DRAW_MODE_OPTIONS = [{
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
var S_BT_SET = {
  position: 'relative',
  top: -6
};

var PanelDrawMode = function PanelDrawMode(_ref) {
  var onGetComp = _ref.onGetComp;

  var _useProperty = (0, _useProperty2["default"])(),
      setDrawMode = _useProperty[0],
      getDrawMode = _useProperty[1],
      _hSetDrawMode = (0, _uiApi.useCallback)(function () {
    var drawMode = getDrawMode();

    if (drawMode) {
      var comp = onGetComp();
      comp.drawMode = drawMode.value;
    }
  }, [onGetComp, getDrawMode]);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].OpenClose, {
    caption: "DrawMode",
    style: _Panel.OPEN_CLOSE,
    childrenStyle: _Panel.OC_CHILDREN,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: _Panel.OC_DIV,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
        width: "170",
        options: DRAW_MODE_OPTIONS,
        styleRoot: _Panel.INPUT_SELECT,
        onSelect: setDrawMode
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ButtonSet, {
        style: S_BT_SET,
        mode: 1,
        onClick: _hSetDrawMode
      })]
    })
  });
};

var _default = PanelDrawMode;
exports["default"] = _default;
//# sourceMappingURL=PanelDrawMode.js.map