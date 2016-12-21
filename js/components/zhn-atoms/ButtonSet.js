'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  BT_SET: {
    color: 'burlywood',
    fontSize: '16px',
    fontWeight: 'bold',
    border: '2px solid burlywood',
    borderRadius: '8px',
    padding: '4px 6px',
    marginLeft: '16px',
    cursor: 'pointer'
  }
};

var ButtonSet = function ButtonSet(_ref) {
  var onClick = _ref.onClick;
  return _react2.default.createElement(
    'span',
    {
      style: STYLE.BT_SET,
      onClick: onClick
    },
    'Set'
  );
};

exports.default = ButtonSet;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\zhn-atoms\ButtonSet.js.map