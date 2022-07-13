"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _glMatrix = require("gl-matrix");

var configMatrix = function configMatrix(config) {
  var gl = config.gl,
      shaderProgram = config.shaderProgram,
      _config$zMatrixTransl = config.zMatrixTranslate,
      zMatrixTranslate = _config$zMatrixTransl === void 0 ? -2 : _config$zMatrixTransl,
      matrix = config.matrix = _glMatrix.mat4.create();

  _glMatrix.mat4.translate(matrix, matrix, [0, 0, zMatrixTranslate]);

  config.matrixLocation = gl.getUniformLocation(shaderProgram, "transformMatrix");
};

var _default = configMatrix;
exports["default"] = _default;
//# sourceMappingURL=configMatrix.js.map