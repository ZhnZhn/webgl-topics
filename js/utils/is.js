"use strict";

exports.__esModule = true;
exports.isFloat = exports.isFunction = void 0;

var isFunction = function isFunction(fn) {
  return typeof fn === "function";
};

exports.isFunction = isFunction;
var regFloat = /^-?\d*(\.\d+)?$/;

var isFloat = function isFloat(strOrNumber) {
  var trimmed = ("" + strOrNumber).trim();

  if (isNaN(parseFloat(trimmed))) {
    return false;
  }

  return trimmed !== "" && regFloat.test(trimmed);
};

exports.isFloat = isFloat;
//# sourceMappingURL=is.js.map