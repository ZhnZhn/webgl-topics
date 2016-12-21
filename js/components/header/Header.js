'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  CAPTION: {
    display: 'inline-block',
    color: 'rgb(128, 192, 64)',
    fontSize: '16px',
    fontWeight: 'bold',
    marginLeft: '16px'
  }
};

var Header = function Header() {
  return _react2.default.createElement(
    'header',
    { className: 'header', role: 'banner' },
    _react2.default.createElement(
      'span',
      { style: STYLE.CAPTION },
      'WebGL Topics v. 0.1.0'
    ),
    _react2.default.createElement(
      'nav',
      { className: 'header__nav', role: 'navigation' },
      _react2.default.createElement(
        'a',
        { className: 'header__nav__link', href: '' },
        'One'
      ),
      _react2.default.createElement(
        'a',
        { className: 'header__nav__link', href: '' },
        'Two'
      ),
      _react2.default.createElement(
        'a',
        { className: 'header__nav__link', href: '' },
        'Three'
      )
    )
  );
};

exports.default = Header;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\header\Header.js.map