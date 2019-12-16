"use strict";

exports.__esModule = true;
exports["default"] = exports._configMatrix = void 0;

var _glMatrix = require("gl-matrix");

var _configMatrix = function _configMatrix(target) {
  var gl = target.gl,
      shaderProgram = target.shaderProgram,
      _target$zMatrixTransl = target.zMatrixTranslate,
      zMatrixTranslate = _target$zMatrixTransl === void 0 ? -2 : _target$zMatrixTransl,
      matrix = target.matrix = _glMatrix.mat4.create();

  _glMatrix.mat4.translate(matrix, matrix, [0, 0, zMatrixTranslate]);

  target.matrixLocation = gl.getUniformLocation(shaderProgram, "transformMatrix");
};

exports._configMatrix = _configMatrix;

var configMatrix = function configMatrix(target) {
  target.prototype.configMatrix = _configMatrix;
};

var _default = configMatrix;
exports["default"] = _default;
//# sourceMappingURL=configMatrix.js.map