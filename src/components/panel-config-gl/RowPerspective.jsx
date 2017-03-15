import React, { Component, PropTypes } from 'react';

import setModeToAll from './decorators/setModeToAll';
import onChangeMode from './decorators/onChangeMode';
import calcInputMode from './decorators/calcInputMode';

import Label from '../zhn-atoms/Label';
import InputFloat from '../zhn-atoms/InputFloat';
import ButtonSet from '../zhn-atoms/ButtonSet';

import  STYLE from './Row.Style';

@setModeToAll
@onChangeMode
@calcInputMode
class RowPerspective extends Component {
  static propTypes = {
    perspectiveNear : PropTypes.number.isRequire,
    perspectiveFar : PropTypes.number.isRequired,
    onGetComp : PropTypes.func.isRequired
  }

  constructor(props){
    super()
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
        , onChangeMode = this._onChangeMode.bind(this)
    return(
      <div style={STYLE.ROW}>
        <Label
          style={STYLE.CAPTION}
          title="perspective:"
        />
        <Label
          style={STYLE.LABEL}
          title="near:"
        />
        <InputFloat
          ref={ comp => this.near = comp }
          inputKey="near"
          inputStyle={STYLE.INPUT_FLOAT_2}
          value={perspectiveNear}
          onChangeMode={onChangeMode}
          onKeyDownEnter={this._handleSetPerspective}
        />
        <Label
          style={STYLE.LABEL}
          title="far:"
        />
        <InputFloat
          ref={ comp => this.far = comp }
          inputKey="far"
          value={perspectiveFar}
          inputStyle={STYLE.INPUT_FLOAT_2}
          onChangeMode={onChangeMode}
          onKeyDownEnter={this._handleSetPerspective}
        />
        <ButtonSet
           ref={ bt => this.bt = bt }
           onClick={this._handleSetPerspective}
        />
      </div>
    );
  }
}

export default RowPerspective
