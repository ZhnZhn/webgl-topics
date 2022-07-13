const initGl = (
  config
) => {
  const { canvas } = config
  , { width, height } = canvas
  , gl = config.gl = canvas.getContext("webgl");

  gl.enable(gl.DEPTH_TEST);
  gl.viewport(0, 0, width, height);
  gl.clearColor(0.5, 0.5, 0.5, 1);
}

export default initGl
