
const _setModeToAll = function(value){
   for(const key in this.mode){
     this.mode[key] = value;
     this[key].setMode(value);
   }
}

const setModeToAll = (target) => {
  target.prototype._setModeToAll = _setModeToAll
}

export default setModeToAll
