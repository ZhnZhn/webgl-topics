"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _glMatrix = require("gl-matrix");

var fnGL = {
  createBuffer: function createBuffer(gl, bufferData, bufferType) {
    if (bufferType === void 0) {
      bufferType = "ARRAY_BUFFER";
    }

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl[bufferType], buffer);
    gl.bufferData(gl[bufferType], bufferData, gl.STATIC_DRAW);
    return buffer;
  },
  createAttrib: function createAttrib(gl, shaderProgram, attrName, dim, rawDim, offset, isBindBuffer) {
    if (rawDim === void 0) {
      rawDim = 0;
    }

    if (offset === void 0) {
      offset = 0;
    }

    if (isBindBuffer === void 0) {
      isBindBuffer = true;
    }

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
var _default = fnGL;
exports["default"] = _default;
//# sourceMappingURL=fnGL.js.map