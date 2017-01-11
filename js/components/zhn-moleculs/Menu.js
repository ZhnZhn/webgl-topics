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
  _renderMenuParts: function _renderMenuParts(menuModel, topicId) {
    return menuModel.map(function (menuPart, index) {
      return _react2.default.createElement(_MenuPart2.default, {
        key: index,
        dataModel: menuPart,
        topicId: topicId
      });
    });
  },
  render: function render() {
    var _props = this.props,
        rootStyle = _props.rootStyle,
        menuModel = _props.menuModel,
        topicId = _props.topicId;


    return _react2.default.createElement(
      'div',
      { style: rootStyle },
      this._renderMenuParts(menuModel, topicId)
    );
  }
});

exports.default = Menu;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\zhn-moleculs\Menu.js.map