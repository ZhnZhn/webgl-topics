'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconAppLogo = require('./IconAppLogo');

var _IconAppLogo2 = _interopRequireDefault(_IconAppLogo);

var _AppLabel = require('./AppLabel');

var _AppLabel2 = _interopRequireDefault(_AppLabel);

var _GitHubLink = require('./GitHubLink');

var _GitHubLink2 = _interopRequireDefault(_GitHubLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TITLE = 'WebGL Topics v0.01.0';

var Header = function Header() {
  return _react2.default.createElement(
    'header',
    { className: 'header', role: 'banner' },
    _react2.default.createElement(_IconAppLogo2.default, {
      className: 'header__icon-app',
      title: TITLE
    }),
    _react2.default.createElement(_AppLabel2.default, {
      className: 'header__label-app',
      caption: TITLE
    }),
    _react2.default.createElement(_GitHubLink2.default, {
      className: 'header__github-link',
      title: 'GitHub Repository',
      href: 'https://github.com/zhnzhn/webgl-topics'
    })
  );
};

exports.default = Header;
//# sourceMappingURL=Header.js.map