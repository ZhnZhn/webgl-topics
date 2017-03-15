"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports.default = onChangeMode;
//# sourceMappingURL=onChangeMode.js.map