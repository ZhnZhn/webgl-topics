"use strict";

exports.__esModule = true;
exports["default"] = exports._createShaders = void 0;
var _defaultVertex = "\nattribute float pointSize;\nattribute vec4 coords;\nattribute vec4 colors;\nuniform mat4 transformMatrix;\nuniform mat4 perspectiveMatrix;\nvarying vec4 varyingColors;\nvoid main(void){\n  gl_Position = perspectiveMatrix * transformMatrix * coords;\n  gl_PointSize = pointSize;\n  varyingColors = colors;\n}\n";
var _defaultFragment = "\nprecision mediump float;\nvarying vec4 varyingColors;\nvoid main(void) {\n  gl_FragColor = varyingColors;\n}\n";
/*
const getShader = function(gl, id) {
      var shaderScript = document.getElementById(id);
      if (!shaderScript) {
          return null;
      }

      var str = "";
      var k = shaderScript.firstChild;
      while (k) {
          if (k.nodeType == 3)
              str += k.textContent;
          k = k.nextSibling;
      }

      var shader;
      if (shaderScript.type == "x-shader/x-fragment") {
          shader = gl.createShader(gl.FRAGMENT_SHADER);
      } else if (shaderScript.type == "x-shader/x-vertex") {
          shader = gl.createShader(gl.VERTEX_SHADER);
      } else {
          return null;
      }

      gl.shaderSource(shader, str);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          alert(gl.getShaderInfoLog(shader));
          return null;
      }

      return shader;
  }
*/

var TYPE = {
  FRAGMENT: "FRAGMENT",
  VERTEX: "VERTEX"
};

var _compileShader = function _compileShader(gl, shaderCode, shaderType) {
  var shader;

  if (shaderType === TYPE.FRAGMENT) {
    shader = gl.createShader(gl.FRAGMENT_SHADER);
  } else if (shaderType === TYPE.VERTEX) {
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

var _createShaders = function _createShaders(target) {
  var gl = target.gl,
      _target$props = target.props,
      props = _target$props === void 0 ? {} : _target$props,
      _props$vertexShaderCo = props.vertexShaderCode,
      vertexShaderCode = _props$vertexShaderCo === void 0 ? _defaultVertex : _props$vertexShaderCo,
      _props$fragmentShader = props.fragmentShaderCode,
      fragmentShaderCode = _props$fragmentShader === void 0 ? _defaultFragment : _props$fragmentShader,
      vertexShader = _compileShader(gl, vertexShaderCode, TYPE.VERTEX),
      fragmentShader = _compileShader(gl, fragmentShaderCode, TYPE.FRAGMENT); //,vertexShader = getShader(gl, "shader-vs")
  //,fragmentShader = getShader(gl, "shader-fs");


  target.shaderProgram = gl.createProgram();
  gl.attachShader(target.shaderProgram, vertexShader);
  gl.attachShader(target.shaderProgram, fragmentShader);
  gl.linkProgram(target.shaderProgram);
  gl.useProgram(target.shaderProgram);
};

exports._createShaders = _createShaders;

var createShaders = function createShaders(target) {
  target.prototype.createShaders = _createShaders;
};

var _default = createShaders;
exports["default"] = _default;
//# sourceMappingURL=createShaders.js.map