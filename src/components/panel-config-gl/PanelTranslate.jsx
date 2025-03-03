import useRefValue from '../hooks/useRefValue';

import OpenClose from '../zhn-atoms/OpenClose';
import RowProp from './RowProp';

import {
  OPEN_CLOSE,
  OC_CHILDREN
} from './Panel.Style';

const PanelTranslate = ({
  zMatrixTranslate,
  onGetComp
}) => {
  const _fnAfterSet = useRefValue(comp => {
    comp.configMatrix(comp)
  });
  return (
    <OpenClose
      caption="Translate"
      style={OPEN_CLOSE}
      childrenStyle={OC_CHILDREN}
    >
      <RowProp
        labelBy="Z"
        inputId="tZ"
        value={zMatrixTranslate}
        propKey="zMatrixTranslate"
        onGetComp={onGetComp}
        fnAfterSet={_fnAfterSet}
      />
    </OpenClose>
  );
}

/*
PanelTranslate.propTypes = {
  zMatrixTranslate: PropTypes.number.isRequired,
  onGetComp: PropTypes.func.isRequired
}
*/

export default PanelTranslate
