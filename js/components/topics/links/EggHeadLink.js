'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  LINK: {
    display: 'table-cell'
  },
  PRO: {
    marginLeft: '4px',
    padding: '3px 7px',
    display: 'inline-block',
    borderRadius: '3px',
    color: '#ffffff',
    textDecoration: 'none',
    background: '#ef494f',
    fontWeight: '700'
  }
};

var EggHeadLink = function EggHeadLink(_ref) {
  var style = _ref.style,
      title = _ref.title,
      href = _ref.href,
      isPro = _ref.isPro;

  var _proEl = isPro ? _react2.default.createElement(
    'span',
    { style: STYLE.PRO },
    'P'
  ) : undefined;
  return _react2.default.createElement(
    'a',
    {
      className: 'native-link',
      style: Object.assign({}, STYLE.LINK, style),
      href: href
    },
    _react2.default.createElement(
      'span',
      null,
      title
    ),
    _proEl
  );
};

exports.default = EggHeadLink;
//# sourceMappingURL=EggHeadLink.js.map