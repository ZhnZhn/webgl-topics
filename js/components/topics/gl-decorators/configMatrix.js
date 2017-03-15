"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._configMatrix = undefined;

var _glMatrix = require("gl-matrix");

var _configMatrix = exports._configMatrix = function _configMatrix(target) {
  var gl = target.gl,
      shaderProgram = target.shaderProgram,
      _target$zMatrixTransl = target.zMatrixTranslate,
      zMatrixTranslate = _target$zMatrixTransl === undefined ? -2 : _target$zMatrixTransl,
      matrix = target.matrix = _glMatrix.mat4.create();

  _glMatrix.mat4.translate(matrix, matrix, [0, 0, zMatrixTranslate]);
  target.matrixLocation = gl.getUniformLocation(shaderProgram, "transformMatrix");
};

var configMatrix = function configMatrix(target) {
  target.prototype.configMatrix = _configMatrix;
};

exports.default = configMatrix;
//# sourceMappingURL=configMatrix.js.map