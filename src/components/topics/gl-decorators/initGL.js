
export const _init = (target) => {
  const { canvas } = target

  target.gl = canvas.getContext("webgl");
  target.gl.enable(target.gl.DEPTH_TEST);
  target.gl.viewport(0, 0, canvas.width, canvas.height);
  target.gl.clearColor(0.5, 0.5, 0.5, 1);
}


const initGL = (target) => {
    target.prototype.initGL = _init
}

/*
const initGL = (target, name, descriptor) => {
   console.log(target);
   console.log(name);
   target[name] = _init;
}
*/

export default initGL
