"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Header = _interopRequireDefault(require("./header/Header"));

var _TopicMenu = _interopRequireDefault(require("./topic-menu/TopicMenu"));

var _Main = _interopRequireDefault(require("./topics/Main"));

var _Footer = _interopRequireDefault(require("./footer/Footer"));

var AppWebGLTopic = function AppWebGLTopic(_ref) {
  var store = _ref.store;
  return _react["default"].createElement("div", {
    className: "app",
    role: "application"
  }, _react["default"].createElement(_Header["default"], null), _react["default"].createElement(_TopicMenu["default"], {
    store: store
  }), _react["default"].createElement(_Main["default"], {
    store: store
  }), _react["default"].createElement(_Footer["default"], null));
};

var _default = AppWebGLTopic;
exports["default"] = _default;
//# sourceMappingURL=AppWebGLTopic.js.map