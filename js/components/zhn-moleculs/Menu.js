"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _MenuPart = _interopRequireDefault(require("./MenuPart"));

var _jsxRuntime = require("react/jsx-runtime");

var Menu = function Menu(_ref) {
  var style = _ref.style,
      toogleStyle = _ref.toogleStyle,
      menuModel = _ref.menuModel,
      topicId = _ref.topicId;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: style,
    children: menuModel.map(function (menuPart) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuPart["default"], {
        toogleStyle: toogleStyle,
        dataModel: menuPart,
        topicId: topicId
      }, topicId);
    })
  });
};

var _default = Menu;
exports["default"] = _default;
//# sourceMappingURL=Menu.js.map