"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));

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

    return _react["default"].createElement("div", {
      key: id,
      className: className,
      style: Object.assign({}, STYLE.ITEM, _style),
      onClick: onClick
    }, title);
  });
};

var MenuPart = function MenuPart(props) {
  var dataModel = props.dataModel,
      topicId = props.topicId,
      toogleStyle = props.toogleStyle,
      caption = dataModel.caption,
      items = dataModel.items;
  return _react["default"].createElement(_OpenClose["default"], {
    caption: caption,
    style: STYLE.ROOT,
    toogleStyle: toogleStyle
  }, _renderMenuItems(items, topicId));
};

var _default = MenuPart;
exports["default"] = _default;
//# sourceMappingURL=MenuPart.js.map