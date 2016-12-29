"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isFunction = exports.isFunction = function isFunction(fn) {
  return typeof fn === "function";
};

var regFloat = /^-?\d*(\.\d+)?$/;
var isFloat = exports.isFloat = function isFloat(strOrNumber) {
  var trimmed = ("" + strOrNumber).trim();

  if (isNaN(parseFloat(trimmed))) {
    return false;
  }

  return trimmed !== "" && regFloat.test(trimmed);
};
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\utils\is.js.map