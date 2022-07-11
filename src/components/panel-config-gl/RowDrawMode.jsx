import { useCallback } from '../uiApi';
import useProperty from '../hooks/useProperty'

import A from '../Comp'

import {
  ROW,
  CAPTION
} from './Row.Style';

const S_CAPTION = {
  ...CAPTION,
  color: '#a487d4'
};

const DRAW_MODE_OPTIONS = [
  { caption: "TRIANGLES", value: "TRIANGLES" },
  { caption: "TRIANGLE_STRIP", value: "TRIANGLE_STRIP" },
  { caption: "TRIANGLE_FAN", value: "TRIANGLE_FAN" },
  { caption: "LINES", value: "LINES" },
  { caption: "LINE_STRIP", value: "LINE_STRIP" },
  { caption: "LINE_LOOP", value: "LINE_LOOP" },
  { caption: "POINTS", value: "POINTS" }
];

const RowDrawMode = ({
  onGetComp
}) => {
  const [
    setDrawMode,
    getDrawMode
  ] = useProperty()
  , _hSetDrawMode = useCallback(() => {
    const drawMode  = getDrawMode()
    if (drawMode){
      const comp = onGetComp();
      comp.drawMode = drawMode.value;
    }
  }, [onGetComp, getDrawMode]);

  return (
    <div style={ROW}>
      <span style={S_CAPTION}>
        DrawMode:
      </span>
      <A.InputSelect
        options={DRAW_MODE_OPTIONS}
        onSelect={setDrawMode}
      />
      <A.ButtonSet
         mode={1}
         onClick={_hSetDrawMode}
      />
    </div>
  );
}

export default RowDrawMode
