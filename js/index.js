"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _AppWebGLTopic = _interopRequireDefault(require("./components/AppWebGLTopic"));

var _WebGlTopicStore = _interopRequireDefault(require("./flux/stores/WebGlTopicStore"));

(0, _reactDom.render)(_react["default"].createElement(_AppWebGLTopic["default"], {
  store: _WebGlTopicStore["default"]
}), document.getElementById("app"));
//# sourceMappingURL=index.js.map