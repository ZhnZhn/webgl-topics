
const _onChangeMode = function(inputKey, mode){  
  const _btMode = this.mode.bt
  this.mode[inputKey] = mode;
  const _nextBtMode = this._calcInputMode()
  if (_btMode !== _nextBtMode){
    this.mode.bt = _nextBtMode
    this.bt.setMode(_nextBtMode)
  }
}

const onChangeMode = (target) => {
  target.prototype._onChangeMode = _onChangeMode;
}

export default onChangeMode
