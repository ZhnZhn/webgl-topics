import { mat4 } from 'gl-matrix';

export const _createPerspective = (target) => {
  const { canvas, gl, shaderProgram, perspectiveNear, perspectiveFar } = target
      , _perspectiveMatrix = mat4.create();
  mat4.perspective(
    _perspectiveMatrix, 1, canvas.width/canvas.height,
    perspectiveNear, perspectiveFar
  );

  const _perspectiveLocation = gl.getUniformLocation(shaderProgram, "perspectiveMatrix");
  gl.uniformMatrix4fv(_perspectiveLocation, false, _perspectiveMatrix);
  
}

const createPerspective = (target) => {
   target.prototype.createPerspective = _createPerspective
}

export default createPerspective
