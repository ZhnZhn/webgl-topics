"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = function Label(_ref) {
  var style = _ref.style,
      title = _ref.title;
  return _react2.default.createElement(
    "span",
    {
      className: "not-selected",
      style: style
    },
    title
  );
};

exports.default = Label;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\zhn-atoms\Label.js.map