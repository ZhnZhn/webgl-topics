"use strict";

exports.__esModule = true;
exports["default"] = exports._createPerspective = void 0;

var _glMatrix = require("gl-matrix");

var _createPerspective = function _createPerspective(target) {
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

exports._createPerspective = _createPerspective;

var createPerspective = function createPerspective(target) {
  target.prototype.createPerspective = _createPerspective;
};

var _default = createPerspective;
exports["default"] = _default;
//# sourceMappingURL=createPerspective.js.map