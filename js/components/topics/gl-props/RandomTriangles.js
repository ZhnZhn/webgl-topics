"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _fnGL = _interopRequireDefault(require("../gl-fn/fnGL"));
var _helperFn = require("./helperFn");
const _mathRandom = Math.random;
const RandomTriangles = {
  valuesForInit: {
    topicLink: (0, _helperFn.crTopicLink)()
  },
  createVertices: target => {
    const {
        gl,
        shaderProgram
      } = target,
      vertices = target.vertices = [],
      colors = target.colors = [],
      vertexCount = target.vertexCount = 30;
    for (var i = 0; i < vertexCount; i++) {
      vertices.push(_mathRandom() * 2 - 1);
      vertices.push(_mathRandom() * 2 - 1);
      vertices.push(_mathRandom() * 2 - 1);
      colors.push(_mathRandom());
      colors.push(_mathRandom());
      colors.push(_mathRandom());
      colors.push(1);
    }
    target.buffer = _fnGL.default.createBuffer(gl, new Float32Array(vertices));
    _fnGL.default.createAttrib(gl, shaderProgram, "coords", 3);
    target.colorBuffer = _fnGL.default.createBuffer(gl, new Float32Array(colors));
    _fnGL.default.createAttrib(gl, shaderProgram, "colors", 4);
  },
  clearBuffers: target => {
    const {
      gl,
      buffer,
      colorBuffer
    } = target;
    gl.deleteBuffer(buffer);
    gl.deleteBuffer(colorBuffer);
  }
};
var _default = RandomTriangles;
exports.default = _default;
//# sourceMappingURL=RandomTriangles.js.map