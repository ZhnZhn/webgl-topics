"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _useListen = _interopRequireDefault(require("../hooks/useListen"));
var _RouterTopicActions = require("../../flux/actions/RouterTopicActions");
var _Menu = _interopRequireDefault(require("../zhn-moleculs/Menu"));
var _menuModel = _interopRequireDefault(require("./menuModel"));
var _jsxRuntime = require("preact/jsx-runtime");
var SIDEBAR = "sidebar",
  CL_SIDEBAR = SIDEBAR + " with-scroll",
  CL_SIDEBAR_MENU = SIDEBAR + "__menu",
  S_MENU = {
    borderRight: '1px solid black'
  },
  S_MENU_TOGGLE = {
    paddingLeft: 6
  };
var TopicMenu = function TopicMenu(_ref) {
  var store = _ref.store;
  var _useState = (0, _uiApi.useState)(store.state.topicId),
    topicId = _useState[0],
    setTopicId = _useState[1];
  (0, _useListen["default"])(store, function (actionType, state) {
    if (actionType === _RouterTopicActions.RouterTopicActionTypes.VIEW_TOPIC) {
      setTopicId(state.topicId);
    }
  });
  return (0, _jsxRuntime.jsx)("section", {
    className: CL_SIDEBAR,
    children: (0, _jsxRuntime.jsx)("div", {
      className: CL_SIDEBAR_MENU,
      role: "navigation",
      children: (0, _jsxRuntime.jsx)(_Menu["default"], {
        style: S_MENU,
        toogleStyle: S_MENU_TOGGLE,
        menuModel: _menuModel["default"],
        topicId: topicId
      })
    })
  });
};
var _default = TopicMenu;
exports["default"] = _default;
//# sourceMappingURL=TopicMenu.js.map