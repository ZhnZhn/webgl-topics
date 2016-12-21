
import { mat4 } from 'gl-matrix';

export const _configMatrix = (target) => {
  //const { matrix, zMatrixTranslate=-2 } = target
  const { zMatrixTranslate=-2 } = target
  , matrix = target.matrix = mat4.create();
  mat4.translate(matrix, matrix, [0, 0, zMatrixTranslate]);
}

const configMatrix = (target) => {
  target.prototype.configMatrix = _configMatrix
}

export default configMatrix
