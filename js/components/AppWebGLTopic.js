"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Header = _interopRequireDefault(require("./header/Header"));
var _TopicMenu = _interopRequireDefault(require("./topic-menu/TopicMenu"));
var _Main = _interopRequireDefault(require("./topics/Main"));
var _jsxRuntime = require("preact/jsx-runtime");
const AppWebGLTopic = () => (0, _jsxRuntime.jsxs)("div", {
  className: "app",
  role: "application",
  children: [(0, _jsxRuntime.jsx)(_Header.default, {}), (0, _jsxRuntime.jsx)(_TopicMenu.default, {}), (0, _jsxRuntime.jsx)(_Main.default, {})]
});
var _default = exports.default = AppWebGLTopic;
//# sourceMappingURL=AppWebGLTopic.js.map