"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _glMatrix = require("gl-matrix");

var createPerspective = function createPerspective(config) {
  var canvas = config.canvas,
      gl = config.gl,
      shaderProgram = config.shaderProgram,
      perspectiveNear = config.perspectiveNear,
      perspectiveFar = config.perspectiveFar,
      _perspectiveMatrix = _glMatrix.mat4.create();

  _glMatrix.mat4.perspective(_perspectiveMatrix, 1, canvas.width / canvas.height, perspectiveNear, perspectiveFar);

  var _perspectiveLocation = gl.getUniformLocation(shaderProgram, "perspectiveMatrix");

  gl.uniformMatrix4fv(_perspectiveLocation, false, _perspectiveMatrix);
};

var _default = createPerspective;
exports["default"] = _default;
//# sourceMappingURL=createPerspective.js.map