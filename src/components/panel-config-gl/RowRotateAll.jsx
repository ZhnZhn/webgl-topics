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
  INPUT_FLOAT_3
} from './Row.Style'

@setModeToAll
@onChangeMode
@calcInputMode
class RowRotateAll extends Component {
  /*
  static propTypes = {
    rX : PropTypes.number.isRequired,
    rY : PropTypes.number.isRequired,
    rZ : PropTypes.number.isRequired,
    onGetComp : PropTypes.func.isRequired
  }
  */

  constructor(props){
    super(props)

    this.mode = {
      rotateX : 2,
      rotateY : 2,
      rotateZ : 2,
      bt : 2
    }
    this._onChangeMode = this._onChangeMode.bind(this)
  }

  _handleSetRotation = () => {
    const comp = this.props.onGetComp();
    comp.rX = this.rotateX.getValue();
    comp.rY = this.rotateY.getValue();
    comp.rZ = this.rotateZ.getValue();

    this._setModeToAll(2)
  }

  _refRotateX = comp => this.rotateX = comp
  _refRotateY = comp => this.rotateY = comp
  _refRotateZ = comp => this.rotateZ = comp
  _refBt = comp => this.bt = comp

  render(){
    const { rX, rY, rZ } = this.props;

    return(
      <div style={ROW}>
        <Label
          style={CAPTION}
          title="rotate:"
        />
        <Label
          style={LABEL}
          title="X:"
        />
        <InputFloat
          ref={this._refRotateX}
          inputKey="rotateX"
          inputStyle={INPUT_FLOAT_3}
          value={rX}
          step={0.001}
          onChangeMode={this._onChangeMode}
          onKeyDownEnter={this._handleSetRotation}
        />
        <Label
          style={LABEL}
          title="Y:"
        />
        <InputFloat
          ref={this._refRotateY}
          inputKey="rotateY"
          inputStyle={INPUT_FLOAT_3}
          value={rY}
          step={0.001}
          onChangeMode={this._onChangeMode}
          onKeyDownEnter={this._handleSetRotation}
        />
        <Label
          style={LABEL}
          title="Z:"
        />
        <InputFloat
          ref={this._refRotateZ}
          inputKey="rotateZ"
          inputStyle={INPUT_FLOAT_3}
          value={rZ}
          step={0.001}
          onChangeMode={this._onChangeMode}
          onKeyDownEnter={this._handleSetRotation}
        />
        <ButtonSet
           ref={this._refBt}
           onClick={this._handleSetRotation}
        />
      </div>
    );
  }
}

export default RowRotateAll
