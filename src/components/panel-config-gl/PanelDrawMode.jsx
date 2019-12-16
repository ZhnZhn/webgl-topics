import React , { Component } from 'react';

import A from '../Comp'

const _drawModeOptions = [
  { caption: "TRIANGLES", value: "TRIANGLES" },
  { caption: "TRIANGLE_STRIP", value: "TRIANGLE_STRIP" },
  { caption: "TRIANGLE_FAN", value: "TRIANGLE_FAN" },
  { caption: "LINES", value: "LINES" },
  { caption: "LINE_STRIP", value: "LINE_STRIP" },
  { caption: "LINE_LOOP", value: "LINE_LOOP" },
  { caption: "POINTS", value: "POINTS" },
];

import STYLE from './Panel.Style';

const S = {
  BT_SET: {
    position: 'relative',
    top: '-6px'
  }
};

class PanelDrawMode extends Component {
  _handleSelectDrawMode = (item) => {
    this.drawMode = item
  }
  _handleSetDrawMode = () => {
    const { drawMode } = this
    if (drawMode){
      const comp = this.props.onGetComp();
      comp.drawMode = drawMode.value;
    }
  }

  render(){
    return (
      <A.OpenClose
        caption="DrawMode"
        style={STYLE.OPEN_CLOSE}
      >
        <div style={STYLE.OC_DIV}>
          <A.InputSelect
            options={_drawModeOptions}
            styleRoot={STYLE.INPUT_SELECT}
            onSelect={this._handleSelectDrawMode}
          />
          <A.ButtonSet
             style={S.BT_SET}
             mode={1}
             onClick={this._handleSetDrawMode}
          />
        </div>
      </A.OpenClose>
    );
  }
}

/*
PanelDrawMode.propTypes = {
  onGetComp : PropTypes.func.isRequired
}
*/


export default PanelDrawMode
