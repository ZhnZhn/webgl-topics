"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_NOT_SELECTED = "not-selected",
    CL_SHOW_POPUP = 'show-popup',
    S_ROOT_DIV = {
  lineHeight: 1.5,
  backgroundColor: '#4d4d4d'
},
    S_CAPTION = {
  paddingLeft: 4,
  verticalAlign: 'top',
  color: 'rgba(164, 135, 212, 1)',
  fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer'
},
    S_DIV_SVG = {
  display: 'inline-block',
  width: 16,
  height: 16
},
    S_SVG = {
  display: 'inline-block'
},
    S_BLOCK = {
  display: 'block'
},
    S_NONE = {
  display: 'none'
};
var PATH_OPEN = 'M 2,14 L 14,14 14,2 2,14',
    FILL_OPEN = 'yellow',
    PATH_CLOSE = 'M 2,2 L 14,8 2,14 2,2',
    FILL_CLOSE = '#33373A';

var OpenClose = function OpenClose(_ref) {
  var isClose = _ref.isClose,
      style = _ref.style,
      toogleStyle = _ref.toogleStyle,
      caption = _ref.caption,
      children = _ref.children;

  var _useToggle = (0, _useToggle2["default"])(!isClose),
      isOpen = _useToggle[0],
      toggleIsOpen = _useToggle[1],
      _ref2 = isOpen ? [PATH_OPEN, FILL_OPEN, S_BLOCK, CL_SHOW_POPUP] : [PATH_CLOSE, FILL_CLOSE, S_NONE],
      pathV = _ref2[0],
      fillV = _ref2[1],
      divStyle = _ref2[2],
      classShow = _ref2[3];

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: (0, _extends2["default"])({}, S_ROOT_DIV, style),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: CL_NOT_SELECTED,
      style: toogleStyle,
      onClick: toggleIsOpen,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: S_DIV_SVG,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
          viewBox: "0 0 16 16",
          width: "100%",
          height: "100%",
          preserveAspectRatio: "none",
          xmlns: "http://www.w3.org/2000/svg",
          style: S_SVG,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
            d: pathV,
            fill: fillV,
            strokeWidth: "1",
            stroke: "yellow"
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        style: S_CAPTION,
        children: caption
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: classShow,
      style: divStyle,
      children: children
    })]
  });
};

var _default = OpenClose;
exports["default"] = _default;
//# sourceMappingURL=OpenClose.js.map