"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var DF_VERTEX = "\nattribute float pointSize;\nattribute vec4 coords;\nattribute vec4 colors;\nuniform mat4 transformMatrix;\nuniform mat4 perspectiveMatrix;\nvarying vec4 varyingColors;\nvoid main(void){\n  gl_Position = perspectiveMatrix * transformMatrix * coords;\n  gl_PointSize = pointSize;\n  varyingColors = colors;\n}\n";
var DF_FRAGMENT = "\nprecision mediump float;\nvarying vec4 varyingColors;\nvoid main(void) {\n  gl_FragColor = varyingColors;\n}\n";
var TYPE_FRAGMENT = "FRAGMENT",
    TYPE_VERTEX = "VERTEX";

var _compileShader = function _compileShader(gl, shaderCode, shaderType) {
  var shader;

  if (shaderType === TYPE_FRAGMENT) {
    shader = gl.createShader(gl.FRAGMENT_SHADER);
  } else if (shaderType === TYPE_VERTEX) {
    shader = gl.createShader(gl.VERTEX_SHADER);
  } else {
    return null;
  }

  gl.shaderSource(shader, shaderCode);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(gl.getShaderInfoLog(shader));
    return null;
  }

  return shader;
};

var createShaders = function createShaders(config) {
  var gl = config.gl,
      props = config.props,
      _props$vertexShaderCo = props.vertexShaderCode,
      vertexShaderCode = _props$vertexShaderCo === void 0 ? DF_VERTEX : _props$vertexShaderCo,
      _props$fragmentShader = props.fragmentShaderCode,
      fragmentShaderCode = _props$fragmentShader === void 0 ? DF_FRAGMENT : _props$fragmentShader,
      vertexShader = _compileShader(gl, vertexShaderCode, TYPE_VERTEX),
      fragmentShader = _compileShader(gl, fragmentShaderCode, TYPE_FRAGMENT);

  var _shaderProgram = config.shaderProgram = gl.createProgram();

  gl.attachShader(_shaderProgram, vertexShader);
  gl.attachShader(_shaderProgram, fragmentShader);
  gl.linkProgram(_shaderProgram);
  gl.useProgram(_shaderProgram);
};

var _default = createShaders;
exports["default"] = _default;
//# sourceMappingURL=createShaders.js.map