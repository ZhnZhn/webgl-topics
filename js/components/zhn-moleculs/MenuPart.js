"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _useKeyEnter = _interopRequireDefault(require("../hooks/useKeyEnter"));

var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_ROW_TOPIC = 'row__topic',
    S_ROOT = {
  backgroundColor: '#24282a'
},
    S_ITEM = {
  color: 'gray'
},
    S_ITEM_CURRENT = {
  borderRight: '8px solid #1b75bb'
};

var MenuItem = function MenuItem(_ref) {
  var style = _ref.style,
      title = _ref.title,
      onClick = _ref.onClick;

  var _hKeyDown = (0, _useKeyEnter["default"])(onClick);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    role: "menuitem",
    tabIndex: "0",
    className: CL_ROW_TOPIC,
    style: (0, _extends2["default"])({}, S_ITEM, style),
    onClick: onClick,
    onKeyDown: _hKeyDown,
    children: title
  });
};

var MenuPart = function MenuPart(_ref2) {
  var dataModel = _ref2.dataModel,
      topicId = _ref2.topicId,
      toogleStyle = _ref2.toogleStyle;

  var _ref3 = dataModel || {},
      caption = _ref3.caption,
      items = _ref3.items;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_OpenClose["default"], {
    caption: caption,
    style: S_ROOT,
    toogleStyle: toogleStyle,
    children: items.map(function (_ref4) {
      var id = _ref4.id,
          title = _ref4.title,
          onClick = _ref4.onClick;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(MenuItem, {
        style: id === topicId ? S_ITEM_CURRENT : void 0,
        title: title,
        onClick: onClick
      }, id);
    })
  });
};

var _default = MenuPart;
exports["default"] = _default;
//# sourceMappingURL=MenuPart.js.map