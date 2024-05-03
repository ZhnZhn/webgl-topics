"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _CL = require("./CL");
var _crStyleWidth = _interopRequireDefault(require("./crStyleWidth"));
var _OptionsFooter = _interopRequireDefault(require("./OptionsFooter"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_BLOCK = {
    display: 'block'
  },
  S_NONE = {
    display: 'none'
  };
const DivOptions = _ref => {
  let {
    refOptionsComp,
    refIndexNode,
    rootOptionsStyle,
    width,
    isShowOption,
    domOptions,
    indexActiveOption,
    nFiltered,
    nAll,
    onStepUp,
    onStepDown,
    onClear
  } = _ref;
  const _styleOptions = isShowOption ? S_BLOCK : S_NONE,
    _rootWidthStyle = (0, _crStyleWidth.default)(width, _styleOptions);
  return (0, _jsxRuntime.jsxs)("div", {
    className: _CL.CL_OPTIONS,
    style: _rootWidthStyle,
    "data-scrollable": true,
    children: [(0, _jsxRuntime.jsx)("div", {
      ref: refOptionsComp,
      className: _CL.CL_OPTIONS_DIV,
      style: {
        ...rootOptionsStyle,
        ..._rootWidthStyle
      },
      children: domOptions
    }), (0, _jsxRuntime.jsx)(_OptionsFooter.default, {
      refIndexNode: refIndexNode,
      indexActiveOption: indexActiveOption,
      nAll: nAll,
      nFiltered: nFiltered,
      onStepUp: onStepUp,
      onStepDown: onStepDown,
      onClear: onClear
    })]
  });
};
var _default = exports.default = DivOptions;
//# sourceMappingURL=DivOptions.js.map