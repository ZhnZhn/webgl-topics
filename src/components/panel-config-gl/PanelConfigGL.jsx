import React, { Component, PropTypes } from 'react';

import PanelDrawMode from './PanelDrawMode';
import PanelPerspective from './PanelPerspective';
import PanelTranslate from './PanelTranslate';
import PanelRotate from './PanelRotate';

import STYLE from './Panel.Style';

class PanelConfigGL extends Component{
  static propTypes = {
    valuesForInit : PropTypes.shape({
        perspectiveNear: PropTypes.number,
        perspectiveFar: PropTypes.number,
        zMatrixTranslate: PropTypes.number,
        rX: PropTypes.number,
        rY: PropTypes.number,
        rZ: PropTypes.number
    }).isRequired,
    onGetComp : PropTypes.func.isRequired
  }

  render(){
    const { onGetComp, valuesForInit } = this.props
        , {
            perspectiveNear, perspectiveFar,
            zMatrixTranslate,
            rX, rY, rZ
          } = valuesForInit
    return (
      <div style={STYLE.ROOT}>
         <span style={STYLE.ROOT_CAPTION}>
           Config WebGL Topic
         </span>
        <PanelDrawMode
          {...{ onGetComp }}
        />
        <PanelPerspective
          {...{ perspectiveNear, perspectiveFar, onGetComp }}
        />
        <PanelTranslate
          {...{ zMatrixTranslate, onGetComp }}
        />
         <PanelRotate
           {...{ rX, rY, rZ, onGetComp }}
         />
      </div>
    );
  }
}

export default PanelConfigGL
