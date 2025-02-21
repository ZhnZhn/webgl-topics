"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BT = "bt",
  S_BT = {
    position: 'relative',
    color: '#673ab7',
    padding: '6px 8px',
    marginLeft: 16,
    fontSize: '16px',
    fontWeight: 'bold',
    border: '2px solid #673ab7',
    borderRadius: 8
  };
const Button = _ref => {
  let {
    caption,
    style,
    onClick
  } = _ref;
  return (0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: CL_BT,
    style: {
      ...S_BT,
      ...style
    },
    onClick: onClick,
    children: caption
  });
};
var _default = exports.default = Button;
//# sourceMappingURL=Button.js.map