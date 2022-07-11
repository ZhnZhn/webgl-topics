import { Component } from 'react';

import OpenClose from '../zhn-atoms/OpenClose';
import RowProp from './RowProp';

import {
  OPEN_CLOSE,
  LABEL_PERSPECTIVE
} from './Panel.Style';

class PanelPerspective extends Component {
  /*
  static  propTypes = {
    perspectiveNear : PropTypes.number.isRequired,
    perspectiveFar : PropTypes.number.isRequired,
    onGetComp : PropTypes.func.isRequired
  }
  */

  _fnAfterSet = (comp) => {
    comp.createPerspective(comp);
  }

  render(){
    const {  perspectiveNear, perspectiveFar, onGetComp } = this.props

    return (
      <OpenClose
         caption="Perspective"
         style={OPEN_CLOSE}
      >
        <RowProp
           labelBy="Near:"
           inputId="pNear"
           value={perspectiveNear}
           propKey="perspectiveNear"
           styleLabel={LABEL_PERSPECTIVE}
           onGetComp={onGetComp}
           fnAfterSet={this._fnAfterSet}
        />
        <RowProp
           labelBy="Far:"
           inputId="pFar"
           value={perspectiveFar}
           styleLabel={LABEL_PERSPECTIVE}
           propKey="perspectiveFar"
           onGetComp={onGetComp}
           fnAfterSet={this._fnAfterSet}
        />
      </OpenClose>
    );
  }
}

export default PanelPerspective
