"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

var CL_BT = "bt",
    S_BT = {
  color: '#fefcff',
  height: 30,
  padding: '4px 6px',
  marginLeft: 16,
  fontSize: '16px',
  fontWeight: 'bold',
  backgroundColor: '#673ab7',
  border: '2px solid #673ab7',
  borderRadius: 8
},
    S_VALID_CHANGED = {
  border: '2px solid #673ab7'
},
    S_VALID_NOT_CHANGED = {
  backgroundColor: '#9e9e9e',
  border: '2px solid #9e9e9e'
},
    S_NOT_VALID = {
  color: '#f44336',
  backgroundColor: '#9e9e9e',
  border: '2px solid #9e9e9e'
};
var HM_MODE_STYLE = {
  0: (0, _extends2["default"])({}, S_BT, S_NOT_VALID),
  1: (0, _extends2["default"])({}, S_BT, S_VALID_CHANGED),
  2: (0, _extends2["default"])({}, S_BT, S_VALID_NOT_CHANGED)
};
var ButtonSet = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? 2 : _ref$mode,
      style = _ref.style,
      onClick = _ref.onClick;

  var _useState = (0, _react.useState)(mode),
      btMode = _useState[0],
      setBtMode = _useState[1];

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      setMode: setBtMode
    };
  }, []);

  var _style = HM_MODE_STYLE[btMode],
      _onClick = btMode === 1 ? onClick : void 0;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: CL_BT,
    style: (0, _extends2["default"])({}, style, _style),
    onClick: _onClick,
    children: "Set"
  });
});
/*
ButtonSet.propTypes = {
  mode: PropTypes.number,
  style: PropTypes.object,
  onClick: PropTypes.func
}
*/

var _default = ButtonSet;
exports["default"] = _default;
//# sourceMappingURL=ButtonSet.js.map