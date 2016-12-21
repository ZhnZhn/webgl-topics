import React, { Component, PropTypes } from 'react';

import InputFloat from '../zhn-atoms/InputFloat';
import ButtonSet from '../zhn-atoms/ButtonSet';

import STYLE from './Row.Style';

class RowTranslate extends Component{
  constructor(props){
    super(props)
  }

  _handleSetTranslate = () => {
    const comp = this.props.onGetComp();
    comp.zMatrixTranslate = this.translateZ.getValue();
    comp.configMatrix(comp);
  }

  render(){
    const { zMatrixTranslate } = this.props

    return(
      <div style={STYLE.ROW}>
        <span style={STYLE.CAPTION}>
          translate:
        </span>
        <span style={STYLE.LABEL}>
          Z:
        </span>
        <InputFloat
          ref={ comp => this.translateZ = comp }
          value={zMatrixTranslate}
          inputStyle={STYLE.INPUT_FLOAT_3}
        />
        <ButtonSet onClick={this._handleSetTranslate} />
      </div>
    );
  }
}

RowTranslate.propTypes = {
  zMatrixTranslate : PropTypes.number.isRequired,
  onGetComp : PropTypes.func.isRequired
}

export default RowTranslate
