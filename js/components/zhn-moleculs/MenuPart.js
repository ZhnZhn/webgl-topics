'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OpenClose = require('../zhn-atoms/OpenClose');

var _OpenClose2 = _interopRequireDefault(_OpenClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  ROOT: {
    lineHeight: 2,
    paddingLeft: '8px',
    backgroundColor: '#24282A'
  }
};

var _renderMenuItems = function _renderMenuItems(items) {
  return items.map(function (item, index) {
    var title = item.title,
        onClick = item.onClick,
        className = index % 2 ? 'row__topic__even not-selected' : 'row__topic__odd not-selected';

    return _react2.default.createElement(
      'div',
      {
        key: index,
        className: className,
        style: { color: 'gray' },
        onClick: onClick
      },
      title
    );
  });
};

var MenuPart = function MenuPart(props) {
  var dataModel = props.dataModel,
      caption = dataModel.caption,
      items = dataModel.items;

  return _react2.default.createElement(
    _OpenClose2.default,
    { caption: caption, style: STYLE.ROOT },
    _renderMenuItems(items)
  );
};

exports.default = MenuPart;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\zhn-moleculs\MenuPart.js.map