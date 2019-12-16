"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var AppLabel = function AppLabel(_ref) {
  var className = _ref.className,
      style = _ref.style,
      caption = _ref.caption;
  return _react["default"].createElement("span", {
    className: className,
    style: style
  }, caption);
};

AppLabel.propTypes = {
  className: _react.PropTypes.string,
  style: _react.PropTypes.object,
  caption: _react.PropTypes.string
};
var _default = AppLabel;
exports["default"] = _default;
//# sourceMappingURL=AppLabel.js.map