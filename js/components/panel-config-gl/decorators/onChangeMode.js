"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _onChangeMode = function _onChangeMode(inputKey, mode) {
  var _btMode = this.mode.bt;
  this.mode[inputKey] = mode;

  var _nextBtMode = this._calcInputMode();

  if (_btMode !== _nextBtMode) {
    this.mode.bt = _nextBtMode;
    this.bt.setMode(_nextBtMode);
  }
};

var onChangeMode = function onChangeMode(target) {
  target.prototype._onChangeMode = _onChangeMode;
};

var _default = onChangeMode;
exports["default"] = _default;
//# sourceMappingURL=onChangeMode.js.map