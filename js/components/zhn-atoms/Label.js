"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var CL_NOT_SELECTED = "not-selected";

var Label = function Label(_ref) {
  var id = _ref.id,
      style = _ref.style,
      title = _ref.title;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
    className: CL_NOT_SELECTED,
    style: style,
    htmlFor: id,
    children: title
  });
};

var _default = Label;
exports["default"] = _default;
//# sourceMappingURL=Label.js.map