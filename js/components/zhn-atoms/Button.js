"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Button = _interopRequireDefault(require("./Button.Style"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_BT = "bt";

var Button = function Button(_ref) {
  var caption = _ref.caption,
      style = _ref.style,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: CL_BT,
    style: (0, _extends2["default"])({}, _Button["default"].BT, style),
    onClick: onClick,
    children: caption
  });
};

var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=Button.js.map