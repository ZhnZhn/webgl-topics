"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _fnGL = _interopRequireDefault(require("../gl-fn/fnGL"));
var _helperFn = require("./helperFn");
const CoronaSample = {
  valuesForInit: {
    topicLink: (0, _helperFn.crTopicLink)()
  },
  createVertices: target => {
    const vertices = target.vertices = [0.88, -0.25, -0.18, 1, 0, 0, 1, 0.9, 0.25, 0, 1, 0, 0, 1, 0.88, -0.25, 0.18, 1, 0, 0, 1, 0.85, -0.25, 0.29, 1, 1, 0, 1, 0.78, 0.25, 0.45, 1, 1, 0, 1, 0.67, -0.25, 0.6, 1, 1, 0, 1, 0.6, -0.25, 0.67, 0, 1, 0, 1, 0.45, 0.25, 0.78, 0, 1, 0, 1, 0.29, -0.25, 0.85, 0, 1, 0, 1, 0.18, -0.25, 0.88, 0, 1, 1, 1, 0, 0.25, 0.9, 0, 1, 1, 1, -0.18, -0.25, 0.88, 0, 1, 1, 1, -0.29, -0.25, 0.85, 0, 0, 1, 1, -0.45, 0.25, 0.78, 0, 0, 1, 1, -0.6, -0.25, 0.67, 0, 0, 1, 1];
    target.vertexCount = vertices.length / 7;
    const {
      gl,
      shaderProgram
    } = target;
    target.buffer = _fnGL.default.createBuffer(gl, new Float32Array(vertices));
    _fnGL.default.createAttrib(gl, shaderProgram, "coords", 3, Float32Array.BYTES_PER_ELEMENT * 7, 0, false).createAttrib(gl, shaderProgram, "colors", 4, Float32Array.BYTES_PER_ELEMENT * 7, Float32Array.BYTES_PER_ELEMENT * 3);
  },
  clearBuffers: target => {
    const {
      gl,
      buffer
    } = target;
    gl.deleteBuffer(buffer);
  }
};
var _default = CoronaSample;
exports.default = _default;
//# sourceMappingURL=CoronaSample.js.map