"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _fnGL = _interopRequireDefault(require("../gl-fn/fnGL"));

var RandomTriangles = {
  valuesForInit: {
    topicLink: {
      type: 'EGGHEAD',
      title: 'Egghead: Build Complex 3D models with WebGL',
      href: 'https://egghead.io/courses/build-complex-3d-models-with-webgl'
    }
  },
  createVertices: function createVertices(target) {
    var gl = target.gl,
        shaderProgram = target.shaderProgram,
        vertices = target.vertices = [],
        colors = target.colors = [],
        vertexCount = target.vertexCount = 30;

    for (var i = 0; i < vertexCount; i++) {
      vertices.push(Math.random() * 2 - 1);
      vertices.push(Math.random() * 2 - 1);
      vertices.push(Math.random() * 2 - 1);
      colors.push(Math.random());
      colors.push(Math.random());
      colors.push(Math.random());
      colors.push(1);
    }

    target.buffer = _fnGL["default"].createBuffer(gl, new Float32Array(vertices));

    _fnGL["default"].createAttrib(gl, shaderProgram, "coords", 3);

    target.colorBuffer = _fnGL["default"].createBuffer(gl, new Float32Array(colors));

    _fnGL["default"].createAttrib(gl, shaderProgram, "colors", 4);
  },
  clearBuffers: function clearBuffers(target) {
    var gl = target.gl,
        buffer = target.buffer,
        colorBuffer = target.colorBuffer;
    gl.deleteBuffer(buffer);
    gl.deleteBuffer(colorBuffer);
  }
};
var _default = RandomTriangles;
exports["default"] = _default;
//# sourceMappingURL=RandomTriangles.js.map