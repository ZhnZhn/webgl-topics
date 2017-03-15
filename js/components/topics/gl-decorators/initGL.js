"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _init = exports._init = function _init(target) {
  var canvas = target.canvas,
      width = canvas.width,
      height = canvas.height,
      gl = target.gl = canvas.getContext("webgl");


  gl.enable(gl.DEPTH_TEST);
  gl.viewport(0, 0, width, height);
  gl.clearColor(0.5, 0.5, 0.5, 1);
};

var initGL = function initGL(target) {
  target.prototype.initGL = _init;
};

exports.default = initGL;
//# sourceMappingURL=initGL.js.map