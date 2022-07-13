const DF_VERTEX = `
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

const DF_FRAGMENT = `
precision mediump float;
varying vec4 varyingColors;
void main(void) {
  gl_FragColor = varyingColors;
}
`

const TYPE_FRAGMENT = "FRAGMENT"
, TYPE_VERTEX = "VERTEX";

const _compileShader = (
  gl,
  shaderCode,
  shaderType
) => {
  let shader;
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
}


const createShaders = (
  config
) => {
  const {
    gl,
    props
  } = config
  , {
    vertexShaderCode=DF_VERTEX,
    fragmentShaderCode=DF_FRAGMENT
  } = props
  , vertexShader = _compileShader(gl, vertexShaderCode, TYPE_VERTEX)
  , fragmentShader = _compileShader(gl, fragmentShaderCode, TYPE_FRAGMENT);

  const _shaderProgram = config.shaderProgram = gl.createProgram();
  gl.attachShader(_shaderProgram, vertexShader);
  gl.attachShader(_shaderProgram, fragmentShader);
  gl.linkProgram(_shaderProgram);
  gl.useProgram(_shaderProgram);
}

export default createShaders
