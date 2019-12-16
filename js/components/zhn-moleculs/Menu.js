"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _MenuPart = _interopRequireDefault(require("./MenuPart"));

var Menu = _react["default"].createClass({
  displayName: "Menu",
  _renderMenuParts: function _renderMenuParts(toogleStyle, menuModel, topicId) {
    return menuModel.map(function (menuPart, index) {
      return _react["default"].createElement(_MenuPart["default"], {
        key: index,
        toogleStyle: toogleStyle,
        dataModel: menuPart,
        topicId: topicId
      });
    });
  },
  render: function render() {
    var _this$props = this.props,
        rootStyle = _this$props.rootStyle,
        toogleStyle = _this$props.toogleStyle,
        menuModel = _this$props.menuModel,
        topicId = _this$props.topicId;
    return _react["default"].createElement("div", {
      style: rootStyle
    }, this._renderMenuParts(toogleStyle, menuModel, topicId));
  }
});

var _default = Menu;
exports["default"] = _default;
//# sourceMappingURL=Menu.js.map