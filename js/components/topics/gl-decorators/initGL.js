"use strict";

exports.__esModule = true;
exports["default"] = exports._init = void 0;

var _init = function _init(target) {
  var canvas = target.canvas,
      width = canvas.width,
      height = canvas.height,
      gl = target.gl = canvas.getContext("webgl");
  gl.enable(gl.DEPTH_TEST);
  gl.viewport(0, 0, width, height);
  gl.clearColor(0.5, 0.5, 0.5, 1);
};

exports._init = _init;

var initGL = function initGL(target) {
  target.prototype.initGL = _init;
};

var _default = initGL;
exports["default"] = _default;
//# sourceMappingURL=initGL.js.map