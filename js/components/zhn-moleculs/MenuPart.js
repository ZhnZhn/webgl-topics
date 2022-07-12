"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));

var _jsxRuntime = require("react/jsx-runtime");

var S_ROOT = {
  lineHeight: 2.5,
  backgroundColor: '#24282A'
},
    S_ITEM = {
  color: 'gray'
},
    S_ITEM_CURRENT = {
  borderRight: '8px solid #1b75bb'
};

var _renderMenuItems = function _renderMenuItems(items, topicId) {
  return items.map(function (item, index) {
    var id = item.id,
        title = item.title,
        onClick = item.onClick,
        className = index % 2 ? 'row__topic__even not-selected' : 'row__topic__odd not-selected',
        _style = id === topicId ? S_ITEM_CURRENT : void 0;

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: className,
      style: (0, _extends2["default"])({}, S_ITEM, _style),
      onClick: onClick,
      children: title
    }, id);
  });
};

var MenuPart = function MenuPart(_ref) {
  var dataModel = _ref.dataModel,
      topicId = _ref.topicId,
      toogleStyle = _ref.toogleStyle;

  var _ref2 = dataModel || {},
      caption = _ref2.caption,
      items = _ref2.items;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_OpenClose["default"], {
    caption: caption,
    style: S_ROOT,
    toogleStyle: toogleStyle,
    children: _renderMenuItems(items, topicId)
  });
};

var _default = MenuPart;
exports["default"] = _default;
//# sourceMappingURL=MenuPart.js.map