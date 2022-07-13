"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var initGl = function initGl(config) {
  var canvas = config.canvas,
      width = canvas.width,
      height = canvas.height,
      gl = config.gl = canvas.getContext("webgl");
  gl.enable(gl.DEPTH_TEST);
  gl.viewport(0, 0, width, height);
  gl.clearColor(0.5, 0.5, 0.5, 1);
};

var _default = initGl;
exports["default"] = _default;
//# sourceMappingURL=initGl.js.map