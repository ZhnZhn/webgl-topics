import React, { Component, PropTypes } from 'react';

import InputFloat from '../zhn-atoms/InputFloat';
import ButtonSet from '../zhn-atoms/ButtonSet';

import STYLE from './Row.Style'

class RowRotate extends Component {
  constructor(props){
    super(props)
  }

  _handleSetRotation = () => {
    const comp = this.props.onGetComp();
    comp.rX = this.rotateX.getValue();
    comp.rY = this.rotateY.getValue();
    comp.rZ = this.rotateZ.getValue();
  }

  render(){
    const { rX, rY, rZ } = this.props
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
          value={rX}
          inputStyle={STYLE.INPUT_FLOAT_3}
        />
        <span style={STYLE.LABEL}>
          Y:
        </span>
        <InputFloat
          ref={ comp => this.rotateY = comp }
          value={rY}
          inputStyle={STYLE.INPUT_FLOAT_3}
        />
        <span style={STYLE.LABEL}>
          Z:
        </span>
        <InputFloat
          ref={ comp => this.rotateZ = comp }
          value={rZ}
          inputStyle={STYLE.INPUT_FLOAT_3}
        />
        <ButtonSet onClick={this._handleSetRotation} />
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
