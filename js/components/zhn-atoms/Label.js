"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = function Label(_ref) {
  var style = _ref.style,
      title = _ref.title,
      id = _ref.id;
  return _react2.default.createElement(
    "label",
    {
      className: "not-selected",
      style: style,
      htmlFor: id
    },
    title
  );
};

process.env.NODE_ENV !== "production" ? Label.propTypes = {
  style: _react.PropTypes.object,
  title: _react.PropTypes.string,
  id: _react.PropTypes.string
} : void 0;

exports.default = Label;
//# sourceMappingURL=Label.js.map