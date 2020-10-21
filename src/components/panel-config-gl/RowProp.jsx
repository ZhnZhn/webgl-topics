import { Component } from 'react';

import setModeToAll from './decorators/setModeToAll';
import onChangeMode from './decorators/onChangeMode';
import calcInputMode from './decorators/calcInputMode';

import A from '../Comp'
import STYLE from './Row.Style'

const _isFn = fn => typeof fn === 'function';

@setModeToAll
@onChangeMode
@calcInputMode
class RowProp extends Component{
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

  constructor(props){
    super(props)
    this.mode = {
      inputFloat : 2,
      bt : 2
    }
    this._onChangeMode = this._onChangeMode.bind(this)
  }

  _handleSetValue = () => {
    const { onGetComp, propKey, fnAfterSet } = this.props
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
    const { labelBy, inputId, value, styleLabel } = this.props;
    return (
      <div style={STYLE.ROW}>
        <A.Label
          style={{ ...STYLE.LABEL_ROW, ...styleLabel }}
          title={labelBy}
          id={inputId}
        />
        <A.InputFloat
          ref={this._refInputFloat}
          id={inputId}
          inputKey="inputFloat"
          inputStyle={STYLE.INPUT_FLOAT_3}
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
