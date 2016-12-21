import React, { Component } from 'react';

import RowDrawMode from './RowDrawMode';
import RowPerspective from './RowPerspective';
import RowTranslate from './RowTranslate';
import RowRotate from './RowRotate';

const STYLE = {
  ROOT : {
    float : 'left',
    marginLeft : '20px',
    marginTop : '8px',
    marginBottom : '16px'
  },
  PANEL_CAPTION : {
    color: 'forestgreen',
    fontSize: '16px',
    fontWeight: 'bold'
  }
}

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
         <span style={STYLE.PANEL_CAPTION}>
           ConfigGL
         </span>
        <RowDrawMode
          {...{ onGetComp }}
        />
        <RowPerspective
          {...{ perspectiveNear, perspectiveFar, onGetComp }}
        />
        <RowTranslate
           {...{ zMatrixTranslate, onGetComp }}
         />
        <RowRotate
           {...{ rX, rY, rZ, onGetComp }}
         />
      </div>
    );
  }
}

export default PanelConfigGL
