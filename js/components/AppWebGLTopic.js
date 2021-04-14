"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _Header = _interopRequireDefault(require("./header/Header"));

var _TopicMenu = _interopRequireDefault(require("./topic-menu/TopicMenu"));

var _Main = _interopRequireDefault(require("./topics/Main"));

var _Footer = _interopRequireDefault(require("./footer/Footer"));

var _jsxRuntime = require("react/jsx-runtime");

var AppWebGLTopic = function AppWebGLTopic(_ref) {
  var store = _ref.store;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "app",
    role: "application",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TopicMenu["default"], {
      store: store
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Main["default"], {
      store: store
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer["default"], {})]
  });
};

var _default = AppWebGLTopic;
exports["default"] = _default;
//# sourceMappingURL=AppWebGLTopic.js.map