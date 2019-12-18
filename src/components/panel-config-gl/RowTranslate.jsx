import React, { Component } from 'react';

import setModeToAll from './decorators/setModeToAll';
import onChangeMode from './decorators/onChangeMode';
import calcInputMode from './decorators/calcInputMode';

import Label from '../zhn-atoms/Label';
import InputFloat from '../zhn-atoms/InputFloat';
import ButtonSet from '../zhn-atoms/ButtonSet';

import STYLE from './Row.Style';

@setModeToAll
@onChangeMode
@calcInputMode
class RowTranslate extends Component{
  /*
  static propTypes = {
    zMatrixTranslate : PropTypes.number.isRequired,
    onGetComp : PropTypes.func.isRequired
  }
  */

  constructor(props){
    super(props)

    this.mode = {
      translateZ : 2,
      bt : 2
    }
    this._onChangeMode = this._onChangeMode.bind(this)
  }

  _handleSetTranslate = () => {
    const comp = this.props.onGetComp();
    comp.zMatrixTranslate = this.translateZ.getValue();
    comp.configMatrix(comp);

    this._setModeToAll(2);
  }

  _refTranslateZ = comp => this.translateZ = comp
  _refBt = bt => this.bt = bt

  render(){
    const { zMatrixTranslate } = this.props

    return(
      <div style={STYLE.ROW}>
        <Label
          style={STYLE.CAPTION}
          title="translate:"
        />
        <Label
          style={STYLE.LABEL}
          title="Z:"
        />
        <InputFloat
          ref={this._refTranslateZ}
          inputKey="translateZ"
          inputStyle={STYLE.INPUT_FLOAT_2}
          value={zMatrixTranslate}
          onChangeMode={this._onChangeMode}
          onKeyDownEnter={this._handleSetTranslate}
        />
        <ButtonSet
            ref={this._refBt}
            onClick={this._handleSetTranslate}
        />
      </div>
    );
  }
}

export default RowTranslate
