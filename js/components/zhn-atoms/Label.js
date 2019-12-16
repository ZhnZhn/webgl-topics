"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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
/*
Label.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  id: PropTypes.string
}
*/


var _default = Label;
exports["default"] = _default;
//# sourceMappingURL=Label.js.map