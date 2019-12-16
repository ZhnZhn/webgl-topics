"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button.Style"));

var Button = function Button(_ref) {
  var caption = _ref.caption,
      style = _ref.style,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick;
  return _react["default"].createElement("button", {
    className: "bt",
    style: (0, _extends2["default"])({}, _Button["default"].BT, {}, style),
    onClick: onClick
  }, caption);
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