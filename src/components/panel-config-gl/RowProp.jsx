import React, { Component, PropTypes } from 'react';

import setModeToAll from './decorators/setModeToAll';
import onChangeMode from './decorators/onChangeMode';
import calcInputMode from './decorators/calcInputMode';

import Label from '../zhn-atoms/Label';
import InputFloat from '../zhn-atoms/InputFloat';
import ButtonSet from '../zhn-atoms/ButtonSet';

import STYLE from './Row.Style'

@setModeToAll
@onChangeMode
@calcInputMode
class RowProp extends Component{
  constructor(props){
    super(props)

    this.mode = {
      inputFloat : 2,
      bt : 2
    }
  }

  _handleSetValue = () => {
    const { onGetComp, propKey, fnAfterSet } = this.props
        , comp = onGetComp();
    comp[propKey] = this.inputFloat.getValue();

    if (typeof fnAfterSet === 'function'){
      fnAfterSet(comp);
    }
    this._setModeToAll(2);
  }

  render(){
    const { labelBy, value, styleLabel } = this.props
    return (
      <div style={STYLE.ROW}>
        <Label
          style={Object.assign({}, STYLE.LABEL_ROW, styleLabel)}
          title={labelBy}
        />
        <InputFloat
          ref={ comp => this.inputFloat = comp }
          inputKey="inputFloat"
          inputStyle={STYLE.INPUT_FLOAT_3}
          value={value}
          step={0.001}
          onChangeMode={this._onChangeMode.bind(this)}
          onKeyDownEnter={this._handleSetValue}
        />
        <ButtonSet
            ref={ bt => this.bt = bt }
            onClick={this._handleSetValue}
        />
      </div>
    );
  }
}

RowProp.propTypes = {
  labelBy : PropTypes.string.isRequired,
  value : PropTypes.number.isRequired,
  propKey : PropTypes.string.isRequired,
  styleLabel : PropTypes.object,
  onGetComp : PropTypes.func.isRequired,
  fnAfterSet : PropTypes.func
}

export default RowProp
