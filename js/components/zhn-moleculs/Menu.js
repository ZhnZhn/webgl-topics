"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _MenuPart = _interopRequireDefault(require("./MenuPart"));

var _renderMenuParts = function _renderMenuParts(toogleStyle, menuModel, topicId) {
  return menuModel.map(function (menuPart, index) {
    return _react["default"].createElement(_MenuPart["default"], {
      key: index,
      toogleStyle: toogleStyle,
      dataModel: menuPart,
      topicId: topicId
    });
  });
};

var Menu = function Menu(_ref) {
  var rootStyle = _ref.rootStyle,
      toogleStyle = _ref.toogleStyle,
      menuModel = _ref.menuModel,
      topicId = _ref.topicId;
  return _react["default"].createElement("div", {
    style: rootStyle
  }, _renderMenuParts(toogleStyle, menuModel, topicId));
};

var _default = Menu;
exports["default"] = _default;
//# sourceMappingURL=Menu.js.map