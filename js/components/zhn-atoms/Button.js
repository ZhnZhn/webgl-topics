"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("./Button.Style"));

var Button = function Button(_ref) {
  var caption = _ref.caption,
      style = _ref.style,
      onClick = _ref.onClick;
  return _react["default"].createElement("button", {
    className: "bt",
    style: Object.assign({}, _Button["default"].BT, style),
    tabIndex: "0",
    onClick: onClick
  }, caption);
};

Button.propTypes = {
  caption: _react.PropTypes.string,
  style: _react.PropTypes.object,
  onClick: _react.PropTypes.func
};
Button.defaultProps = {
  onClick: function onClick() {}
};
var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=Button.js.map