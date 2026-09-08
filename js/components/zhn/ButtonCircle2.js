"use strict";

exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BT_CIRCLE_2 = 'zhn-bt-circle2';
const ButtonCircle2 = ({
  className,
  style,
  caption,
  onClick,
  ...restProps
}) => caption ? (0, _jsxRuntime.jsx)("button", {
  ...restProps,
  type: "button",
  className: (0, _styleFn.crCn)(CL_BT_CIRCLE_2, className),
  style: style,
  onClick: onClick,
  children: caption
}) : null;
var _default = exports.default = ButtonCircle2;
//# sourceMappingURL=ButtonCircle2.js.map