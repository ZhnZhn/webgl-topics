
const _defaultVertex = `
attribute float pointSize;
attribute vec4 coords;
attribute vec4 colors;
uniform mat4 transformMatrix;
uniform mat4 perspectiveMatrix;
varying vec4 varyingColors;
void main(void){
  gl_Position = perspectiveMatrix * transformMatrix * coords;
  gl_PointSize = pointSize;
  varyingColors = colors;
}
`
const _defaultFragment = `
precision mediump float;
varying vec4 varyingColors;
void main(void) {
  gl_FragColor = varyingColors;
}
`

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

const TYPE = {
  FRAGMENT : "FRAGMENT",
  VERTEX : "VERTEX"
}

const _compileShader = (gl, shaderCode, shaderType) => {
  let shader;
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
}


export const _createShaders = (target) => {
  const { gl, props={} } = target
  , {
    vertexShaderCode=_defaultVertex,
    fragmentShaderCode=_defaultFragment
  } = props
  , vertexShader = _compileShader(gl, vertexShaderCode, TYPE.VERTEX)
  , fragmentShader = _compileShader(gl, fragmentShaderCode, TYPE.FRAGMENT)
  //,vertexShader = getShader(gl, "shader-vs")
  //,fragmentShader = getShader(gl, "shader-fs");



  target.shaderProgram = gl.createProgram();
  gl.attachShader(target.shaderProgram, vertexShader);
  gl.attachShader(target.shaderProgram, fragmentShader);
  gl.linkProgram(target.shaderProgram);
  gl.useProgram(target.shaderProgram);
}


const createShaders = (target) => {
   target.prototype.createShaders = _createShaders
}

export default createShaders
