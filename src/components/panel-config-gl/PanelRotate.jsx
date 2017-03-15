
import React , { Component, PropTypes } from 'react';

import OpenClose from '../zhn-atoms/OpenClose';
import RowProp from './RowProp';

import STYLE from './Panel.Style'

class PanelRotate extends Component{
  static propTypes = {
    rX : PropTypes.number.isRequired,
    rY : PropTypes.number.isRequired,
    rZ : PropTypes.number.isRequired,
    onGetComp : PropTypes.func.isRequired
  }

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
           inputId="rX"
           value={rX}
           propKey="rX"
           onGetComp={onGetComp}
        />
        <RowProp
           labelBy="Y:"
           inputId="rY"
           value={rY}
           propKey="rY"
           onGetComp={onGetComp}
        />
        <RowProp
           labelBy="Z:"
           inputId="rZ"
           value={rZ}
           propKey="rZ"
           onGetComp={onGetComp}
        />
      </OpenClose>
    );
  }
}

export default PanelRotate
