"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _setModeToAll = function _setModeToAll(value) {
  for (var key in this.mode) {
    this.mode[key] = value;
    this[key].setMode(value);
  }
};

var setModeToAll = function setModeToAll(target) {
  target.prototype._setModeToAll = _setModeToAll;
};

var _default = setModeToAll;
exports["default"] = _default;
//# sourceMappingURL=setModeToAll.js.map