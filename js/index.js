"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _reactDom = require("react-dom");

var _AppWebGLTopic = _interopRequireDefault(require("./components/AppWebGLTopic"));

var _WebGlTopicStore = _interopRequireDefault(require("./flux/stores/WebGlTopicStore"));

var _jsxRuntime = require("react/jsx-runtime");

(0, _reactDom.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppWebGLTopic["default"], {
  store: _WebGlTopicStore["default"]
}), document.getElementById("app"));
//# sourceMappingURL=index.js.map