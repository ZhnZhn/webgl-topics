"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _useProperty2 = _interopRequireDefault(require("../hooks/useProperty"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _Row = require("./Row.Style");

var _jsxRuntime = require("react/jsx-runtime");

var S_CAPTION = (0, _extends2["default"])({}, _Row.CAPTION, {
  color: '#a487d4'
});
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

var RowDrawMode = function RowDrawMode(_ref) {
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

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: _Row.ROW,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S_CAPTION,
      children: "DrawMode:"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
      options: DRAW_MODE_OPTIONS,
      onSelect: setDrawMode
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ButtonSet, {
      mode: 1,
      onClick: _hSetDrawMode
    })]
  });
};

var _default = RowDrawMode;
exports["default"] = _default;
//# sourceMappingURL=RowDrawMode.js.map