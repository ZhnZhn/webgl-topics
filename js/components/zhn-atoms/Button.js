"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Button = _interopRequireDefault(require("./Button.Style"));

var _jsxRuntime = require("react/jsx-runtime");

var Button = function Button(_ref) {
  var caption = _ref.caption,
      style = _ref.style,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: "bt",
    style: (0, _extends2["default"])({}, _Button["default"].BT, style),
    onClick: onClick,
    children: caption
  });
};
/*
Button.propTypes = {
  caption: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
}
*/


var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=Button.js.map