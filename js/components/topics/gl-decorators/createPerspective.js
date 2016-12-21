"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._createPerspective = undefined;

var _glMatrix = require("gl-matrix");

var _createPerspective = exports._createPerspective = function _createPerspective(target) {
  var canvas = target.canvas,
      gl = target.gl,
      shaderProgram = target.shaderProgram,
      perspectiveNear = target.perspectiveNear,
      perspectiveFar = target.perspectiveFar,
      _perspectiveMatrix = _glMatrix.mat4.create();

  _glMatrix.mat4.perspective(_perspectiveMatrix, 1, canvas.width / canvas.height, perspectiveNear, perspectiveFar);

  var _perspectiveLocation = gl.getUniformLocation(shaderProgram, "perspectiveMatrix");
  gl.uniformMatrix4fv(_perspectiveLocation, false, _perspectiveMatrix);
};

var createPerspective = function createPerspective(target) {
  target.prototype.createPerspective = _createPerspective;
};

exports.default = createPerspective;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\topics\gl-decorators\createPerspective.js.map