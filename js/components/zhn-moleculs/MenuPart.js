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
    lineHeight: 2.5,
    backgroundColor: '#24282A'
  },
  ITEM: {
    color: 'gray'
  },
  ITEM_CURRENT: {
    borderRight: '8px solid #80c040'
  }
};

var _renderMenuItems = function _renderMenuItems(items, topicId) {
  return items.map(function (item, index) {
    var id = item.id,
        title = item.title,
        onClick = item.onClick,
        className = index % 2 ? 'row__topic__even not-selected' : 'row__topic__odd not-selected',
        _style = id === topicId ? STYLE.ITEM_CURRENT : undefined;

    return _react2.default.createElement(
      'div',
      {
        key: id,
        className: className,
        style: Object.assign({}, STYLE.ITEM, _style),
        onClick: onClick
      },
      title
    );
  });
};

var MenuPart = function MenuPart(props) {
  var dataModel = props.dataModel,
      topicId = props.topicId,
      toogleStyle = props.toogleStyle,
      caption = dataModel.caption,
      items = dataModel.items;

  return _react2.default.createElement(
    _OpenClose2.default,
    {
      caption: caption,
      style: STYLE.ROOT,
      toogleStyle: toogleStyle
    },
    _renderMenuItems(items, topicId)
  );
};

exports.default = MenuPart;
//# sourceMappingURL=MenuPart.js.map