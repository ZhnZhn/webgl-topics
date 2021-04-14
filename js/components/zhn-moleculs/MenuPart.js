"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));

var _jsxRuntime = require("react/jsx-runtime");

var STYLE = {
  ROOT: {
    lineHeight: 2.5,
    backgroundColor: '#24282A'
  },
  ITEM: {
    color: 'gray'
  },
  ITEM_CURRENT: {
    //borderRight: '8px solid #80c040'
    borderRight: '8px solid #1b75bb'
  }
};

var _renderMenuItems = function _renderMenuItems(items, topicId) {
  return items.map(function (item, index) {
    var id = item.id,
        title = item.title,
        onClick = item.onClick,
        className = index % 2 ? 'row__topic__even not-selected' : 'row__topic__odd not-selected',
        _style = id === topicId ? STYLE.ITEM_CURRENT : void 0;

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: className,
      style: (0, _extends2["default"])({}, STYLE.ITEM, _style),
      onClick: onClick,
      children: title
    }, id);
  });
};

var MenuPart = function MenuPart(props) {
  var dataModel = props.dataModel,
      topicId = props.topicId,
      toogleStyle = props.toogleStyle,
      caption = dataModel.caption,
      items = dataModel.items;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_OpenClose["default"], {
    caption: caption,
    style: STYLE.ROOT,
    toogleStyle: toogleStyle,
    children: _renderMenuItems(items, topicId)
  });
};

var _default = MenuPart;
exports["default"] = _default;
//# sourceMappingURL=MenuPart.js.map