"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fn = require("./fn");

var CubeWithLight = {
  createVertices: function createVertices(target) {
    var vertices = target.vertices = [-1, -1, -1, 1, -1, -1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1];

    target.vertexCount = vertices.length / 3;
    var gl = target.gl,
        shaderProgram = target.shaderProgram;


    target.buffer = (0, _fn.fnCreateBuffer)(gl, new Float32Array(vertices));
    (0, _fn.fnCreateAttribWithoutBind)(gl, shaderProgram, "coords", 3, 0, 0);

    target.isWithoutPointSize = true;
    target.isWithoutPerspective = true;
    //poitSize;
    //perspectiveMatrix

    target.zMatrixTranslate = -4;
  },

  createIndices: function createIndices(target) {
    var indices = target.indices = [0, 1, 2, 1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6, 5, 6, 7, 6, 7, 0, 7, 0, 1, 0, 2, 6, 2, 6, 4, 1, 3, 7, 3, 7, 5];
    target.indexCount = indices.length;
    var gl = target.gl;

    target.indexBuffer = (0, _fn.fnCreateBuffer)(gl, new Uint8Array(indices), "ELEMENT_ARRAY_BUFFER");
    target.isDrawElemnts = true;
  },

  clearBuffers: function clearBuffers(target) {
    var gl = target.gl,
        buffer = target.buffer,
        indexBuffer = target.indexBuffer;

    gl.deleteBuffer(buffer);
    gl.deleteBuffer(indexBuffer);
  }

};

exports.default = CubeWithLight;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\topics\gl-props\CubeWithLigth.js.map