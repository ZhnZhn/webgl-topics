import { Component } from 'react';

import setModeToAll from './decorators/setModeToAll';
import onChangeMode from './decorators/onChangeMode';
import calcInputMode from './decorators/calcInputMode';

import Label from '../zhn-atoms/Label';
import InputFloat from '../zhn-atoms/InputFloat';
import ButtonSet from '../zhn-atoms/ButtonSet';

import {
  CAPTION,
  ROW,
  LABEL,
  INPUT_FLOAT_2
} from './Row.Style';

@setModeToAll
@onChangeMode
@calcInputMode
class RowPerspective extends Component {
  /*
  static propTypes = {
    perspectiveNear : PropTypes.number.isRequire,
    perspectiveFar : PropTypes.number.isRequired,
    onGetComp : PropTypes.func.isRequired
  }
  */

  constructor(props){
    super(props)
    this.mode = {
      near : 2,
      far : 2,
      bt : 2
    }
    this._onChangeMode = this._onChangeMode.bind(this)
  }

  _handleSetPerspective = () => {
    const comp = this.props.onGetComp()
    , { near, far } = this;

    comp.perspectiveNear = near.getValue()
    comp.perspectiveFar = far.getValue();
    comp.createPerspective(comp);

    this._setModeToAll(2);
  }

  _refNear = comp => this.near = comp
  _refFar = comp => this.far = comp
  _refBt = bt => this.bt = bt

  render(){
    const { perspectiveNear, perspectiveFar } = this.props;
    return(
      <div style={ROW}>
        <Label
          style={CAPTION}
          title="perspective:"
        />
        <Label
          style={LABEL}
          title="near:"
        />
        <InputFloat
          ref={this._refNear}
          inputKey="near"
          inputStyle={INPUT_FLOAT_2}
          value={perspectiveNear}
          onChangeMode={this._onChangeMode}
          onKeyDownEnter={this._handleSetPerspective}
        />
        <Label
          style={LABEL}
          title="far:"
        />
        <InputFloat
          ref={this._refFar}
          inputKey="far"
          value={perspectiveFar}
          inputStyle={INPUT_FLOAT_2}
          onChangeMode={onChangeMode}
          onKeyDownEnter={this._handleSetPerspective}
        />
        <ButtonSet
           ref={this._refBt}
           onClick={this._handleSetPerspective}
        />
      </div>
    );
  }
}

export default RowPerspective
