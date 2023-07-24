"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useWebGLStore = require("../../flux/useWebGLStore");
var _Menu = _interopRequireDefault(require("../zhn-moleculs/Menu"));
var _menuModel = _interopRequireDefault(require("./menuModel"));
var _jsxRuntime = require("preact/jsx-runtime");
const SIDEBAR = "sidebar",
  CL_SIDEBAR = SIDEBAR + " with-scroll",
  CL_SIDEBAR_MENU = SIDEBAR + "__menu",
  S_MENU = {
    borderRight: '1px solid black'
  },
  S_MENU_TOGGLE = {
    paddingLeft: 6
  };
const TopicMenu = () => {
  const topicId = (0, _useWebGLStore.useTopicId)();
  return (0, _jsxRuntime.jsx)("section", {
    className: CL_SIDEBAR,
    children: (0, _jsxRuntime.jsx)("div", {
      className: CL_SIDEBAR_MENU,
      role: "navigation",
      children: (0, _jsxRuntime.jsx)(_Menu.default, {
        style: S_MENU,
        toogleStyle: S_MENU_TOGGLE,
        menuModel: _menuModel.default,
        topicId: topicId
      })
    })
  });
};
var _default = TopicMenu;
exports.default = _default;
//# sourceMappingURL=TopicMenu.js.map