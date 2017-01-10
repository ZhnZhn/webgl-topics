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
class RowRotateAll extends Component {
  constructor(props){
    super(props)

    this.mode = {
      rotateX : 2,
      rotateY : 2,
      rotateZ : 2,
      bt : 2
    }
  }

  _handleSetRotation = () => {
    const comp = this.props.onGetComp();
    comp.rX = this.rotateX.getValue();
    comp.rY = this.rotateY.getValue();
    comp.rZ = this.rotateZ.getValue();

    this._setModeToAll(2)
  }

  render(){
    const { rX, rY, rZ } = this.props
        , onChangeMode = this._onChangeMode.bind(this)
    return(
      <div style={STYLE.ROW}>
        <Label
          style={STYLE.CAPTION}
          title="rotate:"
        />
        <Label
          style={STYLE.LABEL}
          title="X:"
        />
        <InputFloat
          ref={ comp => this.rotateX = comp }
          inputKey="rotateX"
          inputStyle={STYLE.INPUT_FLOAT_3}
          value={rX}
          step={0.001}
          onChangeMode={onChangeMode}
          onKeyDownEnter={this._handleSetRotation}
        />
        <Label
          style={STYLE.LABEL}
          title="Y:"
        />
        <InputFloat
          ref={ comp => this.rotateY = comp }
          inputKey="rotateY"
          inputStyle={STYLE.INPUT_FLOAT_3}
          value={rY}
          step={0.001}
          onChangeMode={onChangeMode}
          onKeyDownEnter={this._handleSetRotation}
        />
        <Label
          style={STYLE.LABEL}
          title="Z:"
        />
        <InputFloat
          ref={ comp => this.rotateZ = comp }
          inputKey="rotateZ"
          inputStyle={STYLE.INPUT_FLOAT_3}
          value={rZ}
          step={0.001}
          onChangeMode={onChangeMode}
          onKeyDownEnter={this._handleSetRotation}
        />
        <ButtonSet
           ref={ bt => this.bt = bt }
           onClick={this._handleSetRotation}
        />
      </div>
    );
  }
}

RowRotateAll.propTypes = {
  rX : PropTypes.number.isRequired,
  rY : PropTypes.number.isRequired,
  rZ : PropTypes.number.isRequired,
  onGetComp : PropTypes.func.isRequired
}

export default RowRotateAll
