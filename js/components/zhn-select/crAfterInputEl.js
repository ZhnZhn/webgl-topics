"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ArrowCell = _interopRequireDefault(require("./ArrowCell"));
var _ButtonCircle = _interopRequireDefault(require("../zhn-atoms/ButtonCircle2"));
var _CL = require("./CL");
var _jsxRuntime = require("preact/jsx-runtime");
const crAfterInputEl = (props, state, isShowOption, hToggleOptions) => {
  const {
      isLoading,
      isLoadingFailed,
      placeholder,
      optionName = '',
      onLoadOption
    } = props,
    {
      optionNames
    } = state;
  return !isLoading && !isLoadingFailed ? [placeholder || `Select ${optionName}...`, (0, _jsxRuntime.jsx)(_ArrowCell.default, {
    isShowOption: isShowOption,
    onClick: hToggleOptions
  })] : isLoading ? [`Loading ${optionNames}...`, (0, _jsxRuntime.jsx)("span", {
    className: _CL.CL_SPINNER,
    "data-loader": "circle"
  })] : isLoadingFailed ? [`Loading ${optionNames} Failed`, (0, _jsxRuntime.jsx)(_ButtonCircle.default, {
    className: _CL.CL_SPINNER_FAILED,
    "data-loader": "circle-failed",
    onClick: onLoadOption
  })] : [];
};
var _default = exports.default = crAfterInputEl;
//# sourceMappingURL=crAfterInputEl.js.map