'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _TopicMenu = require('./topic-menu/TopicMenu');

var _TopicMenu2 = _interopRequireDefault(_TopicMenu);

var _Main = require('./topics/Main');

var _Main2 = _interopRequireDefault(_Main);

var _Footer = require('./footer/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppWebGLTopic = function AppWebGLTopic(_ref) {
  var store = _ref.store;
  return _react2.default.createElement(
    'div',
    { className: 'app', role: 'application' },
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(_TopicMenu2.default, null),
    _react2.default.createElement(_Main2.default, { store: store }),
    _react2.default.createElement(_Footer2.default, null)
  );
};

exports.default = AppWebGLTopic;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\AppWebGLTopic.js.map