"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _SvgStyle = require("./SvgStyle");

var _jsxRuntime = require("preact/jsx-runtime");

var IconAppLogo = function IconAppLogo(_ref) {
  var className = _ref.className,
      title = _ref.title;
  return (0, _jsxRuntime.jsx)("span", {
    className: className,
    title: title,
    children: (0, _jsxRuntime.jsxs)("svg", (0, _extends2["default"])({}, _SvgStyle.S_SVG, {
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg",
      strokeMiterlimit: "2",
      strokeWidth: "2",
      children: [(0, _jsxRuntime.jsx)("title", {
        children: title
      }), (0, _jsxRuntime.jsx)("rect", {
        ry: "1.8825414",
        rx: "194.14471",
        y: "1.434558",
        x: "19.176462",
        height: "12.460618",
        width: "10.85316",
        fill: "#8ecc2d",
        stroke: "#8ecc2d"
      }), (0, _jsxRuntime.jsx)("rect", {
        ry: "1.87537",
        rx: "204.478",
        y: "16.639841",
        x: "8.8410215",
        height: "13.752699",
        width: "18.307165",
        fill: "#232f3b",
        stroke: "#232f3b"
      }), (0, _jsxRuntime.jsx)("rect", {
        ry: "1.87537",
        rx: "204.478",
        y: "3.4229634",
        x: "2.5897937",
        height: "10.894996",
        width: "10.001963",
        fill: "#a487d4",
        stroke: "#a487d4"
      })]
    }))
  });
};

var _default = IconAppLogo;
exports["default"] = _default;
//# sourceMappingURL=IconAppLogo.js.map