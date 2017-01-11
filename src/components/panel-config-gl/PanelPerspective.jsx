import React, { Component, PropTypes } from 'react';

import OpenClose from '../zhn-atoms/OpenClose';
import RowProp from './RowProp';

import STYLE from './Panel.Style';

class PanelPerspective extends Component{
  constructor(props){
    super(props);
  }

  _fnAfterSet = (comp) => {
    comp.createPerspective(comp);
  }

  render(){
    const {  perspectiveNear, perspectiveFar, onGetComp } = this.props

    return (
      <OpenClose
         caption="Perspective"
         style={STYLE.OPEN_CLOSE}
      >
        <RowProp
           labelBy="Near:"
           value={perspectiveNear}
           propKey="perspectiveNear"
           styleLabel={STYLE.LABEL_PERSPECTIVE}
           onGetComp={onGetComp}
           fnAfterSet={this._fnAfterSet}
        />
        <RowProp
           labelBy="Far:"
           value={perspectiveFar}
           styleLabel={STYLE.LABEL_PERSPECTIVE}
           propKey="perspectiveFar"
           onGetComp={onGetComp}
           fnAfterSet={this._fnAfterSet}
        />
      </OpenClose>
    );
  }
}

PanelPerspective.propTypes = {
  perspectiveNear : PropTypes.number.isRequired,
  perspectiveFar : PropTypes.number.isRequired,
  onGetComp : PropTypes.func.isRequired
}

export default PanelPerspective
