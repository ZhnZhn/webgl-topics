"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var STYLE = {
  LINK: {
    display: 'table-cell'
  },
  PRO: {
    marginLeft: 4,
    padding: '3px 7px',
    display: 'inline-block',
    borderRadius: 3,
    color: '#ffffff',
    textDecoration: 'none',
    background: '#ef494f',
    fontWeight: '700'
  }
};

var EggHeadLink = function EggHeadLink(_ref) {
  var style = _ref.style,
      title = _ref.title,
      href = _ref.href,
      isPro = _ref.isPro;

  var _proEl = isPro ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: STYLE.PRO,
    children: "P"
  }) : undefined;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
    className: "native-link",
    style: Object.assign({}, STYLE.LINK, style),
    href: href,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: title
    }), _proEl]
  });
};

var _default = EggHeadLink;
exports["default"] = _default;
//# sourceMappingURL=EggHeadLink.js.map