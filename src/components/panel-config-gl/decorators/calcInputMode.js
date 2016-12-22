const _calcInputMode = function(){
  const { mode } = this

  for(const key in mode){
    if (key !== "bt" && mode[key] === 0){
      return 0;
    }
  }

  for(const key in mode){
    if (key !== "bt" && mode[key] === 1){
      return 1;
    }
  }
  return 2;
}

const calcInputMode = (target) => {
  target.prototype._calcInputMode = _calcInputMode
}

export default calcInputMode
