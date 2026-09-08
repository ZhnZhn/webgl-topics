import { isFn } from '../../../utils/isTypeFn';

import {
  useEffect,
  getRefValue
} from '../../uiApi';

import initGl from './initGl';
import createShaders from './createShaders';
import createPerspective from './createPerspective';
import setPointSize from './setPointSize';
import configMatrix from './configMatrix';
import draw from './draw';

const _assign = Object.assign;

const useAnimationGL = (
  refCanvas,
  refConfig,
  props
) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const canvas = getRefValue(refCanvas)
    , config = getRefValue(refConfig)
    , {
      valuesForInit,
      createVertices,
      createIndices,
      loadTexture
    } = props

    _assign(config, {
      ...valuesForInit,
      canvas,
      props,
      configMatrix,
      draw: props.draw || draw
    })

    initGl(config)
    createShaders(config)
    createVertices(config)

    if (!config.isWithoutPerspective){
      config.createPerspective = createPerspective
      createPerspective(config);
    }

    if (!config.isWithoutPointSize){
      setPointSize(config);
    }
    configMatrix(config);

    if (isFn(createIndices)) {
      createIndices(config)
    }
    if(isFn(loadTexture)) {
      loadTexture(config)
    }

   if(isFn(config.draw)) {
     config.draw(config)
   }

   return () => {
     config.isStopDraw = true
   }
  }, [])
  //refCanvas, refConfig, props
  /*eslint-enable react-hooks/exhaustive-deps */
}

export default useAnimationGL
