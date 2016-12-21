'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._configMatrix = undefined;

var _glMatrix = require('gl-matrix');

var _configMatrix = exports._configMatrix = function _configMatrix(target) {
  //const { matrix, zMatrixTranslate=-2 } = target
  var _target$zMatrixTransl = target.zMatrixTranslate,
      zMatrixTranslate = _target$zMatrixTransl === undefined ? -2 : _target$zMatrixTransl,
      matrix = target.matrix = _glMatrix.mat4.create();

  _glMatrix.mat4.translate(matrix, matrix, [0, 0, zMatrixTranslate]);
};

var configMatrix = function configMatrix(target) {
  target.prototype.configMatrix = _configMatrix;
};

exports.default = configMatrix;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\topics\gl-decorators\configMatrix.js.map