"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glMatrix = require("gl-matrix");

var fnGL = {
  createBuffer: function createBuffer(gl, bufferData) {
    var bufferType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "ARRAY_BUFFER";

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl[bufferType], buffer);
    gl.bufferData(gl[bufferType], bufferData, gl.STATIC_DRAW);
    return buffer;
  },

  createAttrib: function createAttrib(gl, shaderProgram, attrName, dim) {
    var rawDim = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var offset = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var isBindBuffer = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;

    var attr = gl.getAttribLocation(shaderProgram, attrName);
    gl.vertexAttribPointer(attr, dim, gl.FLOAT, false, rawDim, offset);
    gl.enableVertexAttribArray(attr);
    if (isBindBuffer) {
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }
    return this;
  },

  translateMatrix: function translateMatrix(target) {
    var matrix = target.matrix,
        trZ = target.trZ,
        trZD = target.trZD,
        minTrZ = target.minTrZ,
        maxTrZ = target.maxTrZ,
        trZStep = target.trZStep;


    if (trZD === -1) {
      if (trZ > minTrZ) {
        target.trZ = trZ - trZStep;
      } else {
        target.trZD = 1;
      }
    } else {
      if (trZ < maxTrZ) {
        target.trZ = trZ + trZStep;
      } else {
        target.trZD = -1;
      }
    }

    var translateMatrix = _glMatrix.mat4.create();
    _glMatrix.mat4.translate(translateMatrix, translateMatrix, [0, 0, target.trZD * trZStep]);
    _glMatrix.mat4.multiply(matrix, translateMatrix, matrix);
  },

  rotateMatrix: function rotateMatrix(target) {
    var matrix = target.matrix,
        rX = target.rX,
        rY = target.rY,
        rZ = target.rZ;

    _glMatrix.mat4.rotateX(matrix, matrix, rX);
    _glMatrix.mat4.rotateY(matrix, matrix, rY);
    _glMatrix.mat4.rotateZ(matrix, matrix, rZ);
  }

};

exports.default = fnGL;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\topics\gl-fn\fnGL.js.map