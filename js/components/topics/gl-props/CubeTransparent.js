"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fnGL = require("../gl-fn/fnGL");

var _fnGL2 = _interopRequireDefault(_fnGL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CubeTransparent = {
  valuesForInit: {
    zMatrixTranslate: -4,
    isDrawElemnts: true,
    drawMode: "LINES",

    isDynamicTranslate: true,
    trZStep: 0.005,
    trZ: -4,
    trZD: -1,
    minTrZ: -10,
    maxTrZ: -2
  },

  createVertices: function createVertices(target) {
    var vertices = target.vertices = [0, 0, 0, 1, 1, 1, 1, -1, -1, -1, 1, 0, 0, 1, //1df
    1, -1, -1, 1, 1, 0, 1, //2df
    -1, 1, -1, 1, 0, 0, 1, //3uf
    1, 1, -1, 1, 1, 0, 1, //4uf
    -1, -1, 1, 1, 0, 0, 1, //5dn
    1, -1, 1, 1, 1, 0, 1, //6dn
    -1, 1, 1, 1, 0, 0, 1, //7un
    1, 1, 1, 1, 1, 0, 1];

    target.vertexCount = vertices.length / 7;
    var gl = target.gl,
        shaderProgram = target.shaderProgram;


    target.buffer = _fnGL2.default.createBuffer(gl, new Float32Array(vertices));
    _fnGL2.default.createAttrib(gl, shaderProgram, "coords", 3, Float32Array.BYTES_PER_ELEMENT * 7, 0, false).createAttrib(gl, shaderProgram, "colors", 4, Float32Array.BYTES_PER_ELEMENT * 7, Float32Array.BYTES_PER_ELEMENT * 3);
  },

  createIndices: function createIndices(target) {
    var indices = target.indices = [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 1, 2, 2, 4, 4, 3, 3, 1, 1, 5, 5, 6, 6, 2, 6, 8, 8, 7, 7, 5, 8, 4, 7, 3];
    target.indexCount = indices.length;
    var gl = target.gl;

    target.indexBuffer = _fnGL2.default.createBuffer(gl, new Uint8Array(indices), "ELEMENT_ARRAY_BUFFER");
  },

  clearBuffers: function clearBuffers(target) {
    var gl = target.gl,
        buffer = target.buffer,
        indexBuffer = target.indexBuffer;

    gl.deleteBuffer(buffer);
    gl.deleteBuffer(indexBuffer);
  }

};

exports.default = CubeTransparent;
//# sourceMappingURL=CubeTransparent.js.map