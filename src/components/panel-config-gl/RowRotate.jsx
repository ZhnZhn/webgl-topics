import React, { Component, PropTypes } from 'react';

import setModeToAll from './decorators/setModeToAll';
import onChangeMode from './decorators/onChangeMode';
import calcInputMode from './decorators/calcInputMode';

import InputFloat from '../zhn-atoms/InputFloat';
import ButtonSet from '../zhn-atoms/ButtonSet';

import STYLE from './Row.Style'

@setModeToAll
@onChangeMode
@calcInputMode
class RowRotate extends Component {
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
        <span style={STYLE.CAPTION}>
          rotate:
        </span>
        <span style={STYLE.LABEL}>
          X:
        </span>
        <InputFloat
          ref={ comp => this.rotateX = comp }
          inputKey="rotateX"
          value={rX}
          inputStyle={STYLE.INPUT_FLOAT_3}
          onChangeMode={onChangeMode}
        />
        <span style={STYLE.LABEL}>
          Y:
        </span>
        <InputFloat
          ref={ comp => this.rotateY = comp }
          inputKey="rotateY"
          value={rY}
          inputStyle={STYLE.INPUT_FLOAT_3}
          onChangeMode={onChangeMode}
        />
        <span style={STYLE.LABEL}>
          Z:
        </span>
        <InputFloat
          ref={ comp => this.rotateZ = comp }
          inputKey="rotateZ"
          value={rZ}
          inputStyle={STYLE.INPUT_FLOAT_3}
          onChangeMode={onChangeMode}
        />
        <ButtonSet
           ref={ bt => this.bt = bt }
           onClick={this._handleSetRotation}
        />
      </div>
    );
  }
}

RowRotate.propTypes = {
  rX : PropTypes.number.isRequired,
  rY : PropTypes.number.isRequired,
  rZ : PropTypes.number.isRequired,
  onGetComp : PropTypes.func.isRequired
}

export default RowRotate
