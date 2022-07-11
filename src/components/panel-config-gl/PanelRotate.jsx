import OpenClose from '../zhn-atoms/OpenClose';
import RowProp from './RowProp';

import {
  OPEN_CLOSE
} from './Panel.Style'

const PanelRotate = ({
  rX,
  rY,
  rZ,
  onGetComp
}) => (
  <OpenClose
     isClose={true}
     caption="Rotate"
     style={OPEN_CLOSE}
  >
    <RowProp
       labelBy="X:"
       inputId="rX"
       value={rX}
       propKey="rX"
       onGetComp={onGetComp}
    />
    <RowProp
       labelBy="Y:"
       inputId="rY"
       value={rY}
       propKey="rY"
       onGetComp={onGetComp}
    />
    <RowProp
       labelBy="Z:"
       inputId="rZ"
       value={rZ}
       propKey="rZ"
       onGetComp={onGetComp}
    />
  </OpenClose>
);

export default PanelRotate
