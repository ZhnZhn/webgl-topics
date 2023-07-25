"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("preact/jsx-runtime");
const CL_NATIVE_LINK = 'native-link',
  S_LINK = {
    display: 'table-cell'
  };
const EggHeadLink = _ref => {
  let {
    style,
    title,
    href
  } = _ref;
  return (0, _jsxRuntime.jsx)("a", {
    className: CL_NATIVE_LINK,
    style: {
      ...S_LINK,
      ...style
    },
    href: href,
    children: title
  });
};
var _default = EggHeadLink;
exports.default = _default;
//# sourceMappingURL=EggHeadLink.js.map