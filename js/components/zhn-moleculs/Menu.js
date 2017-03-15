'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MenuPart = require('./MenuPart');

var _MenuPart2 = _interopRequireDefault(_MenuPart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = _react2.default.createClass({
  displayName: 'Menu',
  _renderMenuParts: function _renderMenuParts(toogleStyle, menuModel, topicId) {
    return menuModel.map(function (menuPart, index) {
      return _react2.default.createElement(_MenuPart2.default, {
        key: index,
        toogleStyle: toogleStyle,
        dataModel: menuPart,
        topicId: topicId
      });
    });
  },
  render: function render() {
    var _props = this.props,
        rootStyle = _props.rootStyle,
        toogleStyle = _props.toogleStyle,
        menuModel = _props.menuModel,
        topicId = _props.topicId;


    return _react2.default.createElement(
      'div',
      { style: rootStyle },
      this._renderMenuParts(toogleStyle, menuModel, topicId)
    );
  }
});

exports.default = Menu;
//# sourceMappingURL=Menu.js.map