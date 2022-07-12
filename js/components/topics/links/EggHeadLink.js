"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_NATIVE_LINK = 'native-link',
    S_LINK = {
  display: 'table-cell'
},
    S_PRO = {
  display: 'inline-block',
  color: '#ffffff',
  marginLeft: 4,
  padding: '3px 7px',
  borderRadius: 3,
  fontWeight: '700',
  textDecoration: 'none',
  background: '#ef494f'
};

var EggHeadLink = function EggHeadLink(_ref) {
  var isPro = _ref.isPro,
      style = _ref.style,
      title = _ref.title,
      href = _ref.href;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
    className: CL_NATIVE_LINK,
    style: (0, _extends2["default"])({}, S_LINK, style),
    href: href,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: title
    }), isPro ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S_PRO,
      children: "P"
    }) : null]
  });
};

var _default = EggHeadLink;
exports["default"] = _default;
//# sourceMappingURL=EggHeadLink.js.map