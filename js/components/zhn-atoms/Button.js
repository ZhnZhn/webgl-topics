'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button.Style');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var caption = _ref.caption,
      style = _ref.style,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'span',
    {
      style: Object.assign({}, _Button2.default.BT, style),
      tabIndex: '0',
      onClick: onClick
    },
    caption
  );
};

exports.default = Button;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\zhn-atoms\Button.js.map