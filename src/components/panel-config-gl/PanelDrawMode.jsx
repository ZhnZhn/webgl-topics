import { useCallback } from '../uiApi';
import useProperty from '../hooks/useProperty';

import OpenClose from '../zhn-atoms/OpenClose';
import ButtonSet from '../zhn-atoms/ButtonSet';
import InputSelect from '../zhn-select/InputSelect';

import {
  OPEN_CLOSE,
  OC_CHILDREN,
  OC_DIV,
  INPUT_SELECT
} from './Panel.Style';

const DRAW_MODE_OPTIONS = [
  { caption: "TRIANGLES", value: "TRIANGLES" },
  { caption: "TRIANGLE_STRIP", value: "TRIANGLE_STRIP" },
  { caption: "TRIANGLE_FAN", value: "TRIANGLE_FAN" },
  { caption: "LINES", value: "LINES" },
  { caption: "LINE_STRIP", value: "LINE_STRIP" },
  { caption: "LINE_LOOP", value: "LINE_LOOP" },
  { caption: "POINTS", value: "POINTS" }
];

const S_BT_SET = {
  position: 'relative',
  top: -6
};

const PanelDrawMode = ({
  onGetComp
}) => {
  const [
    setDrawMode,
    getDrawMode
  ] = useProperty()
  , _hSetDrawMode = useCallback(() => {
    const drawMode = getDrawMode()
    if (drawMode) {
      const comp = onGetComp();
      comp.drawMode = drawMode.value;
    }
  }, [onGetComp, getDrawMode]);

  return (
    <OpenClose
      caption="DrawMode"
      style={OPEN_CLOSE}
      childrenStyle={OC_CHILDREN}
    >
      <div style={OC_DIV}>
        <InputSelect
          width="170"
          options={DRAW_MODE_OPTIONS}
          styleRoot={INPUT_SELECT}
          onSelect={setDrawMode}
        />
        <ButtonSet
           style={S_BT_SET}
           mode={1}
           onClick={_hSetDrawMode}
        />
      </div>
    </OpenClose>
  );
}

export default PanelDrawMode
