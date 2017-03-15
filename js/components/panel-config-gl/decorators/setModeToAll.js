"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _setModeToAll = function _setModeToAll(value) {
  for (var key in this.mode) {
    this.mode[key] = value;
    this[key].setMode(value);
  }
};

var setModeToAll = function setModeToAll(target) {
  target.prototype._setModeToAll = _setModeToAll;
};

exports.default = setModeToAll;
//# sourceMappingURL=setModeToAll.js.map