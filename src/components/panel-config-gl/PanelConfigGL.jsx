import React, { Component, PropTypes } from 'react';

import PanelDrawMode from './PanelDrawMode';
import PanelPerspective from './PanelPerspective';
import PanelTranslate from './PanelTranslate';
import PanelRotate from './PanelRotate';

import STYLE from './Panel.Style';

class PanelConfigGL extends Component{

  constructor(props){
    super(props);
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
        {/*
        <RowDrawMode
          {...{ onGetComp }}
        />
        */}
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

PanelConfigGL.propTypes = {
  valuesForInit : PropTypes.object.isRequired,
  onGetComp : PropTypes.func.isRequired
}

export default PanelConfigGL
