"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _MenuPart = _interopRequireDefault(require("./MenuPart"));

var _renderMenuParts = function _renderMenuParts(toogleStyle, menuModel, topicId) {
  return menuModel.map(function (menuPart, index) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuPart["default"], {
      toogleStyle: toogleStyle,
      dataModel: menuPart,
      topicId: topicId
    }, index);
  });
};

var Menu = function Menu(_ref) {
  var rootStyle = _ref.rootStyle,
      toogleStyle = _ref.toogleStyle,
      menuModel = _ref.menuModel,
      topicId = _ref.topicId;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: rootStyle,
    children: _renderMenuParts(toogleStyle, menuModel, topicId)
  });
};

var _default = Menu;
exports["default"] = _default;
//# sourceMappingURL=Menu.js.map