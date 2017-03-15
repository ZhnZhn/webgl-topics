import React, { Component, PropTypes } from 'react';

import InputSelect from '../zhn-atoms/InputSelect';
import ButtonSet from '../zhn-atoms/ButtonSet';

import STYLE from './Row.Style';

const _drawModeOptions = [
  { caption: "TRIANGLES", value: "TRIANGLES" },
  { caption: "TRIANGLE_STRIP", value: "TRIANGLE_STRIP" },
  { caption: "TRIANGLE_FAN", value: "TRIANGLE_FAN" },
  { caption: "LINES", value: "LINES" },
  { caption: "LINE_STRIP", value: "LINE_STRIP" },
  { caption: "LINE_LOOP", value: "LINE_LOOP" },
  { caption: "POINTS", value: "POINTS" },
]

class RowDrawMode extends Component {
  static propTypes = {
    onGetComp : PropTypes.func.isRequired
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
    return(
      <div style={STYLE.ROW}>
        <span style={Object.assign(STYLE.CAPTION, {color: '#a487d4'})}>
          DrawMode:
        </span>
        <InputSelect
          options={_drawModeOptions}
          onSelect={this._handleSelectDrawMode}
        />
        <ButtonSet
           mode={1}
           onClick={this._handleSetDrawMode}
        />
      </div>
    );
  }
}

export default RowDrawMode
