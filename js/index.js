'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _AppWebGLTopic = require('./components/AppWebGLTopic');

var _AppWebGLTopic2 = _interopRequireDefault(_AppWebGLTopic);

var _WebGlTopicStore = require('./flux/stores/WebGlTopicStore');

var _WebGlTopicStore2 = _interopRequireDefault(_WebGlTopicStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_AppWebGLTopic2.default, { store: _WebGlTopicStore2.default }), document.getElementById("app"));
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\index.js.map