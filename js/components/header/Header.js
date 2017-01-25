'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GitHubLink = require('./GitHubLink');

var _GitHubLink2 = _interopRequireDefault(_GitHubLink);

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
      'WebGL Topics v0.01.0'
    ),
    _react2.default.createElement(
      'nav',
      { className: 'header__nav', role: 'navigation' },
      _react2.default.createElement(
        'a',
        { className: 'header__nav__link', href: 'javascript:void(0);' },
        'One'
      ),
      _react2.default.createElement(
        'a',
        { className: 'header__nav__link', href: 'javascript:void(0);' },
        'Two'
      ),
      _react2.default.createElement(
        'a',
        { className: 'header__nav__link', href: 'javascript:void(0);' },
        'Three'
      ),
      _react2.default.createElement(_GitHubLink2.default, {
        className: 'header__github-link',
        title: 'GitHub Repo',
        href: 'https://github.com/zhnzhn/webgl-topics'
      })
    )
  );
};

exports.default = Header;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\header\Header.js.map