"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useKeyEnter = _interopRequireDefault(require("../hooks/useKeyEnter"));
var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_ROW_TOPIC = 'row__topic',
  S_ROOT = {
    backgroundColor: '#24282a'
  },
  S_ITEM = {
    color: 'grey'
  },
  S_ITEM_CURRENT = {
    borderRight: '8px solid #1b75bb'
  };
const MenuItem = props => {
  const _hKeyDown = (0, _useKeyEnter.default)(props.onClick);
  return (0, _jsxRuntime.jsx)("div", {
    role: "menuitem",
    tabIndex: "0",
    className: CL_ROW_TOPIC,
    style: {
      ...S_ITEM,
      ...props.style
    },
    onClick: props.onClick,
    onKeyDown: _hKeyDown,
    children: props.title
  });
};
const MenuPart = props => {
  const {
    caption,
    items
  } = props.dataModel || {};
  return (0, _jsxRuntime.jsx)(_OpenClose.default, {
    caption: caption,
    style: S_ROOT,
    toogleStyle: props.toogleStyle,
    children: items.map(_ref => {
      let {
        id,
        title,
        onClick
      } = _ref;
      return (0, _jsxRuntime.jsx)(MenuItem, {
        style: id === props.topicId ? S_ITEM_CURRENT : void 0,
        title: title,
        onClick: onClick
      }, id);
    })
  });
};
var _default = exports.default = MenuPart;
//# sourceMappingURL=MenuPart.js.map