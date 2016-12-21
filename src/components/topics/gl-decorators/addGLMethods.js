
import { _initGL } from './initGL';
import { _createShaders } from './createShaders';
import { _createPerspective } from './createPerspective';
import { _setPointSize } from './setPointSize';
import { _configMatrix } from './configMatrix';
import { _draw } from './draw';
import { _startAnimation } from './startAnimation';


const addGLMethods = (target) => {
   console.log(target);
   target.prototype.initGL = _initGL;
   target.prototype.createShaders = _createShaders;
   target.prototype.createPerspective = _createPerspective;
   target.prototype.setPointSize = _setPointSize;
   target.prototype.configMatrix = _configMatrix;
   target.prototype.draw = _draw;
   target.prototype.startAnimation = _startAnimation;
   return target;
}

export default addGLMethods
