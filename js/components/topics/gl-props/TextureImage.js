"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _fnGL = _interopRequireDefault(require("../gl-fn/fnGL"));
var _helperFn = require("./helperFn");
const TextureImage = {
  vertexShaderCode: "\n  attribute vec4 coords;\n  attribute float pointSize;\n  uniform mat4 transformMatrix;\n  uniform mat4 perspectiveMatrix;\n  attribute vec4 colors;\n  varying vec4 varyingColors;\n\n  attribute vec2 textureCoords;\n  varying vec2 varyingTextureCoords;\n  void main(void){\n    gl_Position = perspectiveMatrix * transformMatrix * coords;\n    gl_PointSize = pointSize;\n    varyingColors = colors;\n\n    varyingTextureCoords = textureCoords;\n  }\n  ",
  fragmentShaderCode: "\n  precision mediump float;\n  uniform vec4 color;\n  varying vec4 varyingColors;\n\n  varying vec2 varyingTextureCoords;\n  uniform sampler2D sampler;\n  void main(void) {\n    gl_FragColor = texture2D(sampler, varyingTextureCoords);\n  }\n  ",
  valuesForInit: {
    drawMode: "TRIANGLE_STRIP",
    topicLink: (0, _helperFn.crTopicLink)()
  },
  createVertices: target => {
    const vertices = target.vertices = [-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1];
    target.vertexCount = vertices.length / 4;
    const {
      gl,
      shaderProgram
    } = target;
    target.buffer = _fnGL.default.createBuffer(gl, new Float32Array(vertices));
    _fnGL.default.createAttrib(gl, shaderProgram, "coords", 2, Float32Array.BYTES_PER_ELEMENT * 4, 0, false).createAttrib(gl, shaderProgram, "textureCoords", 2, Float32Array.BYTES_PER_ELEMENT * 4, Float32Array.BYTES_PER_ELEMENT * 2, false);
  },
  loadTexture: target => {
    const image = document.createElement("img");
    image.crossOrigin = "";
    image.addEventListener("load", () => {
      const {
          gl,
          shaderProgram
        } = target,
        texture = gl.createTexture(),
        sampler = gl.getUniformLocation(shaderProgram, "sampler");
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
      gl.uniform1i(sampler, 0);
    });
    //image.src = "https://pbs.twimg.com/profile_images/664169149002874880/z1fmxo00.jpg"
    image.src = "img/cat.jpg";
  },
  clearBuffers: target => {}
};
var _default = TextureImage;
exports.default = _default;
//# sourceMappingURL=TextureImage.js.map