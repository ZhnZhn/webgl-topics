"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var Label = function Label(_ref) {
  var style = _ref.style,
      title = _ref.title,
      id = _ref.id;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
    className: "not-selected",
    style: style,
    htmlFor: id,
    children: title
  });
};
/*
Label.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  id: PropTypes.string
}
*/


var _default = Label;
exports["default"] = _default;
//# sourceMappingURL=Label.js.map