
export const _init = (target) => {
  const { canvas } = target
      , { width, height } = canvas
      , gl = target.gl = canvas.getContext("webgl");

  gl.enable(gl.DEPTH_TEST);
  gl.viewport(0, 0, width, height);
  gl.clearColor(0.5, 0.5, 0.5, 1);
}

const initGL = (target) => {
    target.prototype.initGL = _init
}

export default initGL
