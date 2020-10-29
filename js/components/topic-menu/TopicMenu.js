"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _RouterTopicActions = require("../../flux/actions/RouterTopicActions");

var _Menu = _interopRequireDefault(require("../zhn-moleculs/Menu"));

var _menuModel = _interopRequireDefault(require("./menuModel"));

var S = {
  MENU: {
    borderRight: '1px solid black'
  },
  MENU_TOGGLE: {
    paddingLeft: 6
  }
};

var TopicMenu = function TopicMenu(_ref) {
  var store = _ref.store;

  var _useState = (0, _react.useState)(store.state.topicId),
      topicId = _useState[0],
      setTopicId = _useState[1];

  (0, _useListen["default"])(store, function (actionType, state) {
    if (actionType === _RouterTopicActions.RouterTopicActionTypes.VIEW_TOPIC) {
      setTopicId(state.topicId);
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
    className: "sidebar",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "sidebar__menu",
      role: "navigation",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Menu["default"], {
        style: S.MENU,
        toogleStyle: S.MENU_TOGGLE,
        menuModel: _menuModel["default"],
        topicId: topicId
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "sidebar__footer",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "sidebar__footer__link",
        children: "Footer Button"
      })
    })]
  });
};
/*
TopicMenu.propTypes = {
  store : PropTypes.object.isRequired
}
*/


var _default = TopicMenu;
exports["default"] = _default;
//# sourceMappingURL=TopicMenu.js.map