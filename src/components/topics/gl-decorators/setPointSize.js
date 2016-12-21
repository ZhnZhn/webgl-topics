
export const _setPointSize = (target) => {
  const { gl, shaderProgram } = target

  const pointSize = gl.getAttribLocation(shaderProgram, "pointSize");
  gl.vertexAttrib1f(pointSize, 20);
}

const setPointSize = (target) => {
  target.prototype.setPointSize = _setPointSize
}

export default setPointSize
