"use strict";

exports.__esModule = true;
exports.default = void 0;
var _SvgStyle = require("./SvgStyle");
var _jsxRuntime = require("preact/jsx-runtime");
const _crRect = (rx, y, x, height, width, color) => (0, _jsxRuntime.jsx)("rect", {
  ry: "2",
  rx: rx,
  y: y,
  x: x,
  height: height,
  width: width,
  fill: color,
  stroke: color
});
const IconAppLogo = _ref => {
  let {
    className,
    title
  } = _ref;
  return (0, _jsxRuntime.jsx)("span", {
    className: className,
    title: title,
    children: (0, _jsxRuntime.jsxs)("svg", {
      ..._SvgStyle.S_SVG,
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg",
      strokeMiterlimit: "2",
      strokeWidth: "2",
      children: [(0, _jsxRuntime.jsx)("title", {
        children: title
      }), _crRect(194, 1.5, 19, 12.5, 11, "#8ecc2d"), _crRect(204.5, 17.5, 9, 13.5, 18, "#232f3b"), _crRect(204.5, 3.5, 2.5, 11, 10, "#a487d4")]
    })
  });
};
var _default = exports.default = IconAppLogo;
//# sourceMappingURL=IconAppLogo.js.map