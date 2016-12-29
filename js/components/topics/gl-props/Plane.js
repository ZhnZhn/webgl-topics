"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fnGL = require("../gl-fn/fnGL");

var _fnGL2 = _interopRequireDefault(_fnGL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnAddVertice = function _fnAddVertice(vertices, i) {
  vertices.push(Math.cos(i));
  vertices.push(Math.sin(i));
  vertices.push(Math.sin(i * 10) * 0.1);
};

var _fnAddColor = function _fnAddColor(vertices, i) {
  vertices.push(Math.sin(i * 10) * 0.5 + 0.5);
  vertices.push(Math.sin(i * 8) * 0.5 + 0.5);
  vertices.push(Math.sin(i * 12) * 0.5 + 0.5);
  vertices.push(1);
};

var Plane = {
  valuesForInit: {
    drawMode: "TRIANGLE_FAN"
  },

  createVertices: function createVertices(target) {
    var vertices = target.vertices = [];
    //vertices.push( 0, 0, 0,  0, 0, 0, 1);
    vertices.push(0, 0.9, 0.3, 1, 1, 1, 1);
    for (var i = 0; i < Math.PI * 2; i += 0.01) {
      _fnAddVertice(vertices, i);
      _fnAddColor(vertices, i);
    }
    i = Math.PI * 2;
    _fnAddVertice(vertices, i);
    _fnAddColor(vertices, i);

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

exports.default = Plane;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\topics\gl-props\Plane.js.map