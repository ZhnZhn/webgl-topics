"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _fnGL = _interopRequireDefault(require("../gl-fn/fnGL"));

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
    drawMode: "TRIANGLE_FAN",
    topicLink: {
      type: 'EGGHEAD',
      title: 'Egghead: Build Complex 3D models with WebGL',
      href: 'https://egghead.io/courses/build-complex-3d-models-with-webgl',
      isPro: true
    }
  },
  createVertices: function createVertices(target) {
    var vertices = target.vertices = []; //vertices.push( 0, 0, 0,  0, 0, 0, 1);

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
    target.buffer = _fnGL["default"].createBuffer(gl, new Float32Array(vertices));

    _fnGL["default"].createAttrib(gl, shaderProgram, "coords", 3, Float32Array.BYTES_PER_ELEMENT * 7, 0, false).createAttrib(gl, shaderProgram, "colors", 4, Float32Array.BYTES_PER_ELEMENT * 7, Float32Array.BYTES_PER_ELEMENT * 3);
  },
  clearBuffers: function clearBuffers(target) {
    var gl = target.gl,
        buffer = target.buffer;
    gl.deleteBuffer(buffer);
  }
};
var _default = Plane;
exports["default"] = _default;
//# sourceMappingURL=Plane.js.map