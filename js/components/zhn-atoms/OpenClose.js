"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));

var _useKeyEnter = _interopRequireDefault(require("../hooks/useKeyEnter"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_OPEN_CLOSE = "zhn-oc not-selected",
    CL_SHOW_POPUP = 'show-popup',
    DF_CAPTION_COLOR = '#af94dc',
    S_ROOT_DIV = {
  lineHeight: 1.5,
  backgroundColor: '#4d4d4d'
},
    S_CAPTION = {
  color: DF_CAPTION_COLOR,
  paddingLeft: 4,
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
    FILL_OPEN = DF_CAPTION_COLOR,
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
      _hKeyDown = (0, _useKeyEnter["default"])(toggleIsOpen),
      _ref2 = isOpen ? [PATH_OPEN, FILL_OPEN, S_BLOCK, CL_SHOW_POPUP] : [PATH_CLOSE, FILL_CLOSE, S_NONE],
      pathV = _ref2[0],
      fillV = _ref2[1],
      divStyle = _ref2[2],
      classShow = _ref2[3];

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: (0, _extends2["default"])({}, S_ROOT_DIV, style),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      role: "button",
      tabIndex: "0",
      className: CL_OPEN_CLOSE,
      style: toogleStyle,
      onClick: toggleIsOpen,
      onKeyDown: _hKeyDown,
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
            stroke: DF_CAPTION_COLOR
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        style: S_CAPTION,
        children: caption
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      "aria-expanded": isOpen,
      className: classShow,
      style: divStyle,
      children: children
    })]
  });
};

var _default = OpenClose;
exports["default"] = _default;
//# sourceMappingURL=OpenClose.js.map