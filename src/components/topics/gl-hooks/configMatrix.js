import { mat4 } from 'gl-matrix';

const configMatrix = (
  config
) => {
  const {
    gl,
    shaderProgram,
    zMatrixTranslate=-2
  } = config
 , matrix = config.matrix = mat4.create();

  mat4.translate(matrix, matrix, [0, 0, zMatrixTranslate]);
  config.matrixLocation = gl.getUniformLocation(shaderProgram, "transformMatrix");
}

export default configMatrix
