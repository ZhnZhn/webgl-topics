import PanelDrawMode from './PanelDrawMode';
import PanelPerspective from './PanelPerspective';
import PanelTranslate from './PanelTranslate';
import PanelRotate from './PanelRotate';

import {
  ROOT,
  ROOT_CAPTION
} from './Panel.Style';

const PanelConfigGL = ({
  onGetComp,
  valuesForInit
}) => {
  const {
      perspectiveNear,
      perspectiveFar,
      zMatrixTranslate,
      rX,
      rY,
      rZ
    } = valuesForInit;
  return (
    <div style={ROOT}>
       <span style={ROOT_CAPTION}>
         Config WebGL Topic
       </span>
      <PanelDrawMode
        {...{ onGetComp }}
      />
      <PanelPerspective
        {...{ perspectiveNear, perspectiveFar, onGetComp }}
      />
      <PanelTranslate
        {...{ zMatrixTranslate, onGetComp }}
      />
       <PanelRotate
         {...{ rX, rY, rZ, onGetComp }}
       />
    </div>
  );
}

/*
PanelConfigGL. propTypes = {
  valuesForInit : PropTypes.shape({
      perspectiveNear: PropTypes.number,
      perspectiveFar: PropTypes.number,
      zMatrixTranslate: PropTypes.number,
      rX: PropTypes.number,
      rY: PropTypes.number,
      rZ: PropTypes.number
  }).isRequired,
  onGetComp : PropTypes.func.isRequired
}
*/

export default PanelConfigGL
