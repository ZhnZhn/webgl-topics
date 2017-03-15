'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fnGL = require('../gl-fn/fnGL');

var _fnGL2 = _interopRequireDefault(_fnGL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CoronaSample = {

  valuesForInit: {
    topicLink: {
      type: 'EGGHEAD',
      title: 'Egghead : Course : Build Complex 3D models with WebGL',
      href: 'https://egghead.io/courses/build-complex-3d-models-with-webgl',
      isPro: true
    }
  },

  createVertices: function createVertices(target) {
    var vertices = target.vertices = [0.88, -0.25, -0.18, 1, 0, 0, 1, 0.9, 0.25, 0, 1, 0, 0, 1, 0.88, -0.25, 0.18, 1, 0, 0, 1, 0.85, -0.25, 0.29, 1, 1, 0, 1, 0.78, 0.25, 0.45, 1, 1, 0, 1, 0.67, -0.25, 0.6, 1, 1, 0, 1, 0.6, -0.25, 0.67, 0, 1, 0, 1, 0.45, 0.25, 0.78, 0, 1, 0, 1, 0.29, -0.25, 0.85, 0, 1, 0, 1, 0.18, -0.25, 0.88, 0, 1, 1, 1, 0, 0.25, 0.9, 0, 1, 1, 1, -0.18, -0.25, 0.88, 0, 1, 1, 1, -0.29, -0.25, 0.85, 0, 0, 1, 1, -0.45, 0.25, 0.78, 0, 0, 1, 1, -0.6, -0.25, 0.67, 0, 0, 1, 1];

    target.vertexCount = vertices.length / 7;

    var gl = target.gl,
        shaderProgram = target.shaderProgram;


    target.buffer = _fnGL2.default.createBuffer(gl, new Float32Array(vertices));
    _fnGL2.default.createAttrib(gl, shaderProgram, "coords", 3, Float32Array.BYTES_PER_ELEMENT * 7, 0, false).createAttrib(gl, shaderProgram, "colors", 4, Float32Array.BYTES_PER_ELEMENT * 7, Float32Array.BYTES_PER_ELEMENT * 3);
  },

  clearBuffers: function clearBuffers(target) {
    var gl = target.gl,
        buffer = target.buffer;

    gl.deleteBuffer(buffer);
  }
};

exports.default = CoronaSample;
//# sourceMappingURL=CoronaSample.js.map