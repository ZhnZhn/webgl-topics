"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _calcInputMode = function _calcInputMode() {
  var mode = this.mode;


  for (var key in mode) {
    if (key !== "bt" && mode[key] === 0) {
      return 0;
    }
  }

  for (var _key in mode) {
    if (_key !== "bt" && mode[_key] === 1) {
      return 1;
    }
  }
  return 2;
};

var calcInputMode = function calcInputMode(target) {
  target.prototype._calcInputMode = _calcInputMode;
};

exports.default = calcInputMode;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\panel-config-gl\decorators\calcInputMode.js.map