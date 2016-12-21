"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fnGL = require("../gl-fn/fnGL");

var _fnGL2 = _interopRequireDefault(_fnGL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextureImage = {
  vertexShaderCode: "\n  attribute vec4 coords;\n  attribute float pointSize;\n  uniform mat4 transformMatrix;\n  uniform mat4 perspectiveMatrix;\n  attribute vec4 colors;\n  varying vec4 varyingColors;\n\n  attribute vec2 textureCoords;\n  varying vec2 varyingTextureCoords;\n  void main(void){\n    gl_Position = perspectiveMatrix * transformMatrix * coords;\n    gl_PointSize = pointSize;\n    varyingColors = colors;\n\n    varyingTextureCoords = textureCoords;\n  }\n  ",
  fragmentShaderCode: "\n  precision mediump float;\n  uniform vec4 color;\n  varying vec4 varyingColors;\n\n  varying vec2 varyingTextureCoords;\n  uniform sampler2D sampler;\n  void main(void) {\n    gl_FragColor = texture2D(sampler, varyingTextureCoords);\n  }\n  ",
  createVertices: function createVertices(target) {
    var vertices = target.vertices = [-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1];
    target.vertexCount = vertices.length / 4;
    var gl = target.gl,
        shaderProgram = target.shaderProgram;

    target.buffer = _fnGL2.default.createBuffer(gl, new Float32Array(vertices));
    _fnGL2.default.createAttrib(gl, shaderProgram, "coords", 2, Float32Array.BYTES_PER_ELEMENT * 4, 0, false).createAttrib(gl, shaderProgram, "textureCoords", 2, Float32Array.BYTES_PER_ELEMENT * 4, Float32Array.BYTES_PER_ELEMENT * 2, false);

    target.drawMode = "TRIANGLE_STRIP";
  },
  loadTexture: function loadTexture(target) {
    var image = document.createElement("img");
    image.crossOrigin = "";
    image.addEventListener("load", function () {
      var gl = target.gl,
          shaderProgram = target.shaderProgram,
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
    image.src = "/img/cat.jpg";
  },

  clearBuffers: function clearBuffers(target) {}

};

exports.default = TextureImage;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\topics\gl-props\TextureImage.js.map