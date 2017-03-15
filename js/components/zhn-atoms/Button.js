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
    'button',
    {
      className: 'bt',
      style: Object.assign({}, _Button2.default.BT, style),
      tabIndex: '0',
      onClick: onClick
    },
    caption
  );
};

process.env.NODE_ENV !== "production" ? Button.propTypes = {
  caption: _react.PropTypes.string,
  style: _react.PropTypes.object,
  onClick: _react.PropTypes.func
} : void 0;
Button.defaultProps = {
  onClick: function onClick() {}
};

exports.default = Button;
//# sourceMappingURL=Button.js.map