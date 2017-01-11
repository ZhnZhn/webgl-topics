import React , { Component, PropTypes } from 'react';

import OpenClose from '../zhn-atoms/OpenClose';
import InputSelect from '../zhn-atoms/InputSelect';
import ButtonSet from '../zhn-atoms/ButtonSet';

const _drawModeOptions = [
  { caption: "TRIANGLES", value: "TRIANGLES" },
  { caption: "TRIANGLE_STRIP", value: "TRIANGLE_STRIP" },
  { caption: "TRIANGLE_FAN", value: "TRIANGLE_FAN" },
  { caption: "LINES", value: "LINES" },
  { caption: "LINE_STRIP", value: "LINE_STRIP" },
  { caption: "LINE_LOOP", value: "LINE_LOOP" },
  { caption: "POINTS", value: "POINTS" },
]

import STYLE from './Panel.Style';

class PanelDrawMode extends Component{
  constructor(props){
    super(props)
  }

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
      <OpenClose
        caption="DrawMode"
        style={STYLE.OPEN_CLOSE}
      >
        <InputSelect
          options={_drawModeOptions}
          styleRoot={STYLE.INPUT_SELECT}
          onSelect={this._handleSelectDrawMode}
        />
        <ButtonSet
           mode={1}
           onClick={this._handleSetDrawMode}
        />
      </OpenClose>
    );
  }
}

PanelDrawMode.propTypes = {
  onGetComp : PropTypes.func.isRequired
}


export default PanelDrawMode
