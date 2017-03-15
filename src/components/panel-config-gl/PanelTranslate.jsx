import React, { Component, PropTypes } from 'react';

import OpenClose from '../zhn-atoms/OpenClose';
import RowProp from './RowProp';

import STYLE from './Panel.Style';

class PanelTranslate extends Component {
  static propTypes = {
    zMatrixTranslate : PropTypes.number.isRequired,
    onGetComp : PropTypes.func.isRequired
  }

  constructor(props){
    super(props)
  }

  _fnAfterSet = (comp) => {
     comp.configMatrix(comp);
  }

  render(){
    const { zMatrixTranslate, onGetComp } = this.props
    return (
      <OpenClose
        caption="Translate"
        style={STYLE.OPEN_CLOSE}
      >
        <RowProp
        labelBy="Z:"
        inputId="tZ"
        value={zMatrixTranslate}
        propKey="zMatrixTranslate"
        onGetComp={onGetComp}
        fnAfterSet={this._fnAfterSet}
        />
      </OpenClose>
    )
  }
}

export default PanelTranslate
