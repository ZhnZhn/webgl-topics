import { Component } from '../uiApi';

import A from '../Comp'
import {
  ROW,
  LABEL,
  INPUT_FLOAT
} from './Row.Style'

const _isFn = fn => typeof fn === 'function';

const _getInputMode = (
  inputMode
) => inputMode === 0
  ? 0
  : inputMode === 1
      ? 1
      : 2;

class RowProp extends Component {
  /*
  static propTypes = {
    labelBy: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    propKey: PropTypes.string.isRequired,
    styleLabel: PropTypes.object,
    onGetComp: PropTypes.func.isRequired,
    fnAfterSet: PropTypes.func
  }
  */
  mode = {
    inputFloat : 2,
    bt : 2
  }


  _onChangeMode = (inputKey, mode) => {
    const _btMode = this.mode.bt;
    this.mode[inputKey] = mode;
    const _nextBtMode = _getInputMode(this.mode.inputFloat);
    if (_btMode !== _nextBtMode){
      this.mode.bt = _nextBtMode
      this.bt.setMode(_nextBtMode)
    }
  }

  _setModeToAll = (value) => {
    for(const key in this.mode){
      this.mode[key] = value
      this[key].setMode(value)
    }
  }

  _handleSetValue = () => {
    const {
      onGetComp, 
      propKey,
      fnAfterSet
    } = this.props
    , comp = onGetComp();
    comp[propKey] = this.inputFloat.getValue();

    if (_isFn(fnAfterSet)){
      fnAfterSet(comp);
    }
    this._setModeToAll(2);
  }

  _refInputFloat = comp => this.inputFloat = comp
  _refBt = bt => this.bt = bt

  render(){
    const {
      labelBy,
      inputId,
      value,
      styleLabel
    } = this.props;
    return (
      <div style={ROW}>
        <A.Label
          style={{...LABEL, ...styleLabel}}
          title={labelBy}
          id={inputId}
        />
        <A.InputFloat
          ref={this._refInputFloat}
          id={inputId}
          inputKey="inputFloat"
          inputStyle={INPUT_FLOAT}
          value={value}
          step={0.001}
          onChangeMode={this._onChangeMode}
          onKeyDownEnter={this._handleSetValue}
        />
        <A.ButtonSet
            ref={this._refBt}
            onClick={this._handleSetValue}
        />
      </div>
    );
  }
}

export default RowProp
