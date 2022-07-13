import { mat4 } from 'gl-matrix';

const createPerspective = (
  config
) => {
  const {
    canvas,
    gl,
    shaderProgram,
    perspectiveNear,
    perspectiveFar
  } = config
  , _perspectiveMatrix = mat4.create();

  mat4.perspective(
    _perspectiveMatrix,
    1,
    canvas.width/canvas.height,
    perspectiveNear,
    perspectiveFar
  );

  const _perspectiveLocation = gl.getUniformLocation(shaderProgram, "perspectiveMatrix");
  gl.uniformMatrix4fv(_perspectiveLocation, false, _perspectiveMatrix);
}

export default createPerspective
