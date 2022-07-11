import { Component } from 'react';

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

import {
  OC_DIV,
  INPUT_SELECT,
  OPEN_CLOSE
} from './Panel.Style';

const S_OC_DIV = {
  ...OC_DIV,
  paddingTop: 6
}
, S_BT_SET = {
  position: 'relative',
  top: -6
};


class PanelDrawMode extends Component {
  /*
  static propTypes = {
    onGetComp : PropTypes.func.isRequired
  }
  */

  _hSelectDrawMode = (item) => {
    this.drawMode = item
  }
  _hSetDrawMode = () => {
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
        style={OPEN_CLOSE}
      >
        <div style={S_OC_DIV}>
          <A.InputSelect
            width="170"
            options={_drawModeOptions}
            styleRoot={INPUT_SELECT}
            onSelect={this._hSelectDrawMode}
          />
          <A.ButtonSet
             style={S_BT_SET}
             mode={1}
             onClick={this._hSetDrawMode}
          />
        </div>
      </A.OpenClose>
    );
  }
}

export default PanelDrawMode
