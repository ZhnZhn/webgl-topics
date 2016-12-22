import React, { Component, PropTypes } from 'react';

import setModeToAll from './decorators/setModeToAll';
import onChangeMode from './decorators/onChangeMode';
import calcInputMode from './decorators/calcInputMode';

import InputFloat from '../zhn-atoms/InputFloat';
import ButtonSet from '../zhn-atoms/ButtonSet';

import  STYLE from './Row.Style';

@setModeToAll
@onChangeMode
@calcInputMode
class RowPerspective extends Component{
  constructor(props){
    super(props);

    this.mode = {
      near : 2,
      far : 2,
      bt : 2
    }
  }

  _handleSetPerspective = () => {
    const comp = this.props.onGetComp()
        , { near, far } = this

    comp.perspectiveNear = near.getValue()
    comp.perspectiveFar = far.getValue();
    comp.createPerspective(comp);
    
    this._setModeToAll(2);
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
          inputKey="near"
          value={perspectiveNear}
          inputStyle={STYLE.INPUT_FLOAT_3}
          onChangeMode={this._onChangeMode.bind(this)}
        />
        <span style={STYLE.LABEL}>
          far:
        </span>
        <InputFloat
          ref={ comp => this.far = comp }
          inputKey="far"
          value={perspectiveFar}
          inputStyle={STYLE.INPUT_FLOAT_3}
          onChangeMode={this._onChangeMode.bind(this)}
        />
        <ButtonSet
           ref={ bt => this.bt = bt }
           onClick={this._handleSetPerspective}
        />
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
