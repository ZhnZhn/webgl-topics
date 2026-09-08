"use strict";

exports.__esModule = true;
exports.isFn = exports.isFloat = void 0;
const isFn = fn => typeof fn === "function";
exports.isFn = isFn;
const regFloat = /^-?\d*(\.\d+)?$/;
const isFloat = strOrNumber => {
  const trimmed = ("" + strOrNumber).trim();
  return isNaN(parseFloat(trimmed)) ? false : trimmed !== "" && regFloat.test(trimmed);
};
exports.isFloat = isFloat;
//# sourceMappingURL=isTypeFn.js.map