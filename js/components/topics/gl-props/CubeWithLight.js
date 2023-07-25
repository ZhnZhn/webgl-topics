"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _fnGL = _interopRequireDefault(require("../gl-fn/fnGL"));
var _helperFn = require("./helperFn");
const CubeWithLight = {
  vertexShaderCode: "\n  attribute vec4 coords;\n  uniform mat4 transformMatrix;\n  uniform mat4 perspectiveMatrix;\n\n  attribute vec3 normal;\n  uniform vec3 lightColor;\n  uniform vec3 lightDirection;\n\n  varying vec4 varyingColors;\n  void main(void){\n    vec3 norm = normalize(normal);\n    vec3 ld = normalize(lightDirection);\n    float dotProduct = max(dot(norm, ld), 0.0);\n    vec3 vertexColor = lightColor * vec3(1, 1, 0) * dotProduct;\n    varyingColors = vec4(vertexColor, 1);\n\n    gl_Position = perspectiveMatrix * transformMatrix * coords;\n  }\n  ",
  fragmentShaderCode: "\n  precision mediump float;\n  varying vec4 varyingColors;\n  void main(void) {\n    gl_FragColor = varyingColors;\n  }\n  ",
  valuesForInit: {
    zMatrixTranslate: -4,
    isWithoutPointSize: true,
    isDrawElemnts: true,
    topicLink: (0, _helperFn.crTopicLink)()
  },
  createVertices: target => {
    const vertices = target.vertices = [-1, -1, -1, 1, -1, -1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1];
    target.vertexCount = vertices.length / 3;
    const {
      gl,
      shaderProgram
    } = target;
    target.buffer = _fnGL.default.createBuffer(gl, new Float32Array(vertices));
    _fnGL.default.createAttrib(gl, shaderProgram, "coords", 3, 0, 0, false);
    const normals = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0];
    target.normalBuffer = _fnGL.default.createBuffer(gl, new Float32Array(normals));
    _fnGL.default.createAttrib(gl, shaderProgram, "normal", 3, 0, 0);
    const lightColor = gl.getUniformLocation(shaderProgram, "lightColor");
    gl.uniform3f(lightColor, 1, 1, 1);
    const lightDirection = gl.getUniformLocation(shaderProgram, "lightDirection");
    gl.uniform3f(lightDirection, 0.5, 1, 0);
  },
  createIndices: target => {
    const indices = target.indices = [0, 1, 2, 1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6, 5, 6, 7, 6, 7, 0, 7, 0, 1, 0, 2, 6, 2, 6, 4, 1, 3, 7, 3, 7, 5];
    target.indexCount = indices.length;
    const {
      gl
    } = target;
    target.indexBuffer = _fnGL.default.createBuffer(gl, new Uint8Array(indices), "ELEMENT_ARRAY_BUFFER");
  },
  clearBuffers: target => {
    const {
      gl,
      buffer,
      indexBuffer
    } = target;
    gl.deleteBuffer(buffer);
    gl.deleteBuffer(indexBuffer);
  }
};
var _default = CubeWithLight;
exports.default = _default;
//# sourceMappingURL=CubeWithLight.js.map