import { 
  useRef,
  getRefValue
} from '../uiApi';

import OpenClose from '../zhn-atoms/OpenClose';
import RowProp from './RowProp';

import {
  OPEN_CLOSE,
  LABEL_PERSPECTIVE
} from './Panel.Style';

const PanelPerspective = ({
  perspectiveNear,
  perspectiveFar,
  onGetComp
}) => {
  const _fnAfterSet = getRefValue(useRef((comp) => {
    comp.createPerspective(comp)
  }));
  return (
    <OpenClose
       caption="Perspective"
       style={OPEN_CLOSE}
    >
      <RowProp
         labelBy="Near:"
         inputId="pNear"
         value={perspectiveNear}
         propKey="perspectiveNear"
         styleLabel={LABEL_PERSPECTIVE}
         onGetComp={onGetComp}
         fnAfterSet={_fnAfterSet}
      />
      <RowProp
         labelBy="Far:"
         inputId="pFar"
         value={perspectiveFar}
         styleLabel={LABEL_PERSPECTIVE}
         propKey="perspectiveFar"
         onGetComp={onGetComp}
         fnAfterSet={_fnAfterSet}
      />
    </OpenClose>
  );
}

/*
PanelPerspective.propTypes = {
  perspectiveNear: PropTypes.number.isRequired,
  perspectiveFar: PropTypes.number.isRequired,
  onGetComp: PropTypes.func.isRequired
}
*/

export default PanelPerspective
