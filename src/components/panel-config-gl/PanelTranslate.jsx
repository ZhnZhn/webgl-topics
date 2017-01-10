import React, { Component, PropTypes } from 'react';

import OpenClose from '../zhn-atoms/OpenClose';
import RowProp from './RowProp';

import STYLE from './Panel.Style';

class PanelTranslate extends Component{
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
        value={zMatrixTranslate}
        propKey="zMatrixTranslate"
        onGetComp={onGetComp}
        fnAfterSet={this._fnAfterSet}
        />
      </OpenClose>
    )
  }
}

PanelTranslate.propTypes = {
  zMatrixTranslate : PropTypes.number.isRequired,
  onGetComp : PropTypes.func.isRequired
}

export default PanelTranslate
