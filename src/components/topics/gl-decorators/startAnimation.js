import dfValues from '../gl-props/dfValues';
import { isFunction } from '../../../utils/is'

export const _startAnimation = (target) => {
    const {
            initGL, createShaders,
            createPerspective, setPointSize, configMatrix,
            draw,
            props
          } = target
        , {
            valuesForInit,
            createVertices : _createVertices,
            createIndices : _createIndices,
            loadTexture : _loadTexture,
            draw : _draw
          } = props
        , _valuesForInit = Object.assign({}, dfValues, valuesForInit)

    for(const key in _valuesForInit){
      target[key] = _valuesForInit[key]
    }

    initGL(target);
    createShaders(target);
    _createVertices(target);

    if (!target.isWithoutPerspective){
      createPerspective(target);
    }

    if (!target.isWithoutPointSize){
      setPointSize(target);
    }
    configMatrix(target);

    if (isFunction(_createIndices)) {
      _createIndices(target)
    }
    if(isFunction(_loadTexture)) {
      _loadTexture(target)
    }

    if (isFunction(_draw)){ _draw(target)}
    else                  { draw(target) }    
}

const startAnimation = (target) => {
  target.prototype.startAnimation = _startAnimation
}

export default startAnimation
