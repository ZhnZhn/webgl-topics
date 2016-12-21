"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _init = exports._init = function _init(target) {
  var canvas = target.canvas;


  target.gl = canvas.getContext("webgl");
  target.gl.enable(target.gl.DEPTH_TEST);
  target.gl.viewport(0, 0, canvas.width, canvas.height);
  target.gl.clearColor(0.5, 0.5, 0.5, 1);
};

var initGL = function initGL(target) {
  target.prototype.initGL = _init;
};

/*
const initGL = (target, name, descriptor) => {
   console.log(target);
   console.log(name);
   target[name] = _init;
}
*/

exports.default = initGL;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\topics\gl-decorators\initGL.js.map