const setPointSize = ({
  gl,
  shaderProgram
}) => {
  const pointSize = gl.getAttribLocation(shaderProgram, "pointSize");
  gl.vertexAttrib1f(pointSize, 20);
};

export default setPointSize
