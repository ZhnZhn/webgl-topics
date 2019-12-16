"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var Label = function Label(_ref) {
  var style = _ref.style,
      title = _ref.title,
      id = _ref.id;
  return _react["default"].createElement("label", {
    className: "not-selected",
    style: style,
    htmlFor: id
  }, title);
};

Label.propTypes = {
  style: _react.PropTypes.object,
  title: _react.PropTypes.string,
  id: _react.PropTypes.string
};
var _default = Label;
exports["default"] = _default;
//# sourceMappingURL=Label.js.map