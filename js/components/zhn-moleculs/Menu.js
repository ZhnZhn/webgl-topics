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
  _renderMenuParts: function _renderMenuParts(menuModel) {
    return menuModel.map(function (menuPart, index) {
      return _react2.default.createElement(_MenuPart2.default, { dataModel: menuPart, key: index });
    });
  },
  render: function render() {
    var _props = this.props,
        menuModel = _props.menuModel,
        rootStyle = _props.rootStyle;


    return _react2.default.createElement(
      'div',
      { style: rootStyle },
      this._renderMenuParts(menuModel)
    );
  }
});

exports.default = Menu;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\zhn-moleculs\Menu.js.map