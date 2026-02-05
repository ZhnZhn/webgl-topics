"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _MenuPart = _interopRequireDefault(require("./MenuPart"));
var _jsxRuntime = require("preact/jsx-runtime");
const Menu = props => (0, _jsxRuntime.jsx)("div", {
  style: props.style,
  children: props.menuModel.map(menuPart => (0, _jsxRuntime.jsx)(_MenuPart.default, {
    toogleStyle: props.toogleStyle,
    topicId: props.topicId,
    dataModel: menuPart
  }, props.topicId))
});
var _default = exports.default = Menu;
//# sourceMappingURL=Menu.js.map