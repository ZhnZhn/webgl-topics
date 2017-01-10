
import React , { Component, PropTypes } from 'react';

import OpenClose from '../zhn-atoms/OpenClose';
import RowProp from './RowProp';

import STYLE from './Panel.Style'

class PanelRotate extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const { rX, rY, rZ, onGetComp } = this.props
    return (
      <OpenClose
         isClose={true}
         caption="Rotate"
         style={STYLE.OPEN_CLOSE}
      >
        <RowProp
           labelBy="X:"
           value={rX}
           propKey="rX"
           onGetComp={onGetComp}
        />
        <RowProp
           labelBy="Y:"
           value={rY}
           propKey="rY"
           onGetComp={onGetComp}
        />
        <RowProp
           labelBy="Z:"
           value={rZ}
           propKey="rZ"
           onGetComp={onGetComp}
        />
      </OpenClose>
    );
  }
}

PanelRotate.propTypes = {
  rX : PropTypes.number.isRequired,
  rY : PropTypes.number.isRequired,
  rZ : PropTypes.number.isRequired,
  onGetComp : PropTypes.func.isRequired
}

export default PanelRotate
