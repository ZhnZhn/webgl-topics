"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ButtonCircle = _interopRequireDefault(require("../zhn-atoms/ButtonCircle2"));
var _CL = require("./CL");
var _jsxRuntime = require("preact/jsx-runtime");
const S_BT_CIRCLE = {
  backgroundColor: '#949ab4'
};
const OptionsFooter = props => (0, _jsxRuntime.jsxs)("div", {
  className: `${_CL.CL_FOOTER} ${_CL.CL_NOT_SELECTED}`,
  children: [(0, _jsxRuntime.jsxs)("span", {
    className: _CL.CL_FOOTER_INDEX,
    children: [(0, _jsxRuntime.jsx)("span", {
      ref: props.refIndexNode,
      children: props.indexActiveOption
    }), (0, _jsxRuntime.jsxs)("span", {
      children: [": ", props.nFiltered, ": ", props.nAll]
    })]
  }), (0, _jsxRuntime.jsxs)("span", {
    className: _CL.CL_FOOTER_BTS,
    children: [(0, _jsxRuntime.jsx)(_ButtonCircle.default, {
      className: _CL.CL_FOOTER_MARGIN,
      style: S_BT_CIRCLE,
      caption: "Dn",
      onClick: props.onStepDown
    }), (0, _jsxRuntime.jsx)(_ButtonCircle.default, {
      className: _CL.CL_FOOTER_MARGIN,
      style: S_BT_CIRCLE,
      caption: "Up",
      onClick: props.onStepUp
    }), (0, _jsxRuntime.jsx)(_ButtonCircle.default, {
      style: S_BT_CIRCLE,
      caption: "CL",
      onClick: props.onClear
    })]
  })]
});
var _default = exports.default = OptionsFooter;
//# sourceMappingURL=OptionsFooter.js.map