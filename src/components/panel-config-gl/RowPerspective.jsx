import React, { Component, PropTypes } from 'react';

import InputFloat from '../zhn-atoms/InputFloat';
import ButtonSet from '../zhn-atoms/ButtonSet';

import  STYLE from './Row.Style';

class RowPerspective extends Component{
  constructor(props){
    super(props);
  }

  _handleSetPerspective = () => {
    const comp = this.props.onGetComp();
    comp.perspectiveNear = this.near.getValue();
    comp.perspectiveFar = this.far.getValue();
    comp.createPerspective(comp);
  }

  render(){
    const { perspectiveNear, perspectiveFar } = this.props
    return(
      <div style={STYLE.ROW}>
        <span style={STYLE.CAPTION}>
          perspective:
        </span>
        <span style={STYLE.LABEL}>
          near:
        </span>
        <InputFloat
          ref={ comp => this.near = comp }
          value={perspectiveNear}
          inputStyle={STYLE.INPUT_FLOAT_3}
        />
        <span style={STYLE.LABEL}>
          far:
        </span>
        <InputFloat
          ref={ comp => this.far = comp }
          value={perspectiveFar}
          inputStyle={STYLE.INPUT_FLOAT_3}
        />
        <ButtonSet onClick={this._handleSetPerspective} />
      </div>
    );
  }
}

RowPerspective.propTypes = {
  perspectiveNear : PropTypes.number.isRequired,
  perspectiveFar : PropTypes.number.isRequired,
  onGetComp : PropTypes.func.isRequired
}

export default RowPerspective
