'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Menu = require('../zhn-moleculs/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _menuModel = require('./menuModel');

var _menuModel2 = _interopRequireDefault(_menuModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopicMenu = function TopicMenu(props) {
  return _react2.default.createElement(
    'section',
    { className: 'sidebar', tabindex: '-1' },
    _react2.default.createElement(
      'div',
      { className: 'sidebar__menu', role: 'navigation' },
      _react2.default.createElement(_Menu2.default, { menuModel: _menuModel2.default })
    ),
    _react2.default.createElement(
      'div',
      { className: 'sidebar__footer' },
      _react2.default.createElement(
        'button',
        { className: 'sidebar__footer__link', type: 'button' },
        'Footer Button'
      )
    )
  );
};

exports.default = TopicMenu;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\topic-menu\TopicMenu.js.map