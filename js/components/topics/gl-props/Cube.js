"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _fnGL = _interopRequireDefault(require("../gl-fn/fnGL"));

var Cube = {
  valuesForInit: {
    zMatrixTranslate: -4,
    isDrawElemnts: true,
    topicLink: {
      type: 'EGGHEAD',
      title: 'Egghead : Course : Build Complex 3D models with WebGL',
      href: 'https://egghead.io/courses/build-complex-3d-models-with-webgl',
      isPro: true
    }
  },
  createVertices: function createVertices(target) {
    var vertices = target.vertices = [-1, -1, -1, 1, 0, 0, 1, 1, -1, -1, 1, 1, 0, 1, -1, 1, -1, 0, 1, 1, 1, 1, 1, -1, 0, 0, 1, 1, -1, 1, 1, 1, 0.5, 0, 1, 1, 1, 1, 0.5, 1, 1, 1, -1, -1, 1, 1, 0, 0.5, 1, 1, -1, 1, 0.5, 0, 1, 1];
    target.vertexCount = vertices.length / 7;
    var gl = target.gl,
        shaderProgram = target.shaderProgram;
    target.buffer = _fnGL["default"].createBuffer(gl, new Float32Array(vertices));

    _fnGL["default"].createAttrib(gl, shaderProgram, "coords", 3, Float32Array.BYTES_PER_ELEMENT * 7, 0, false).createAttrib(gl, shaderProgram, "colors", 4, Float32Array.BYTES_PER_ELEMENT * 7, Float32Array.BYTES_PER_ELEMENT * 3);
  },
  createIndices: function createIndices(target) {
    var indices = target.indices = [0, 1, 2, 1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6, 5, 6, 7, 6, 7, 0, 7, 0, 1, 0, 2, 6, 2, 6, 4, 1, 3, 7, 3, 7, 5];
    target.indexCount = indices.length;
    var gl = target.gl;
    target.indexBuffer = _fnGL["default"].createBuffer(gl, new Uint8Array(indices), "ELEMENT_ARRAY_BUFFER");
  },
  clearBuffers: function clearBuffers(target) {
    var gl = target.gl,
        buffer = target.buffer,
        indexBuffer = target.indexBuffer;
    gl.deleteBuffer(buffer);
    gl.deleteBuffer(indexBuffer);
  }
};
var _default = Cube;
exports["default"] = _default;
//# sourceMappingURL=Cube.js.map