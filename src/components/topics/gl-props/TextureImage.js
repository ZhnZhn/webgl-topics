import fnGL from '../gl-fn/fnGL'

const TextureImage = {
  vertexShaderCode : `
  attribute vec4 coords;
  attribute float pointSize;
  uniform mat4 transformMatrix;
  uniform mat4 perspectiveMatrix;
  attribute vec4 colors;
  varying vec4 varyingColors;

  attribute vec2 textureCoords;
  varying vec2 varyingTextureCoords;
  void main(void){
    gl_Position = perspectiveMatrix * transformMatrix * coords;
    gl_PointSize = pointSize;
    varyingColors = colors;

    varyingTextureCoords = textureCoords;
  }
  `,
  fragmentShaderCode : `
  precision mediump float;
  uniform vec4 color;
  varying vec4 varyingColors;

  varying vec2 varyingTextureCoords;
  uniform sampler2D sampler;
  void main(void) {
    gl_FragColor = texture2D(sampler, varyingTextureCoords);
  }
  `,
  createVertices : (target) => {
    const vertices = target.vertices = [
      -1, -1,  0, 0,
       1, -1,  1, 0,
      -1,  1,  0, 1,
       1,  1,  1, 1
    ]
    target.vertexCount = vertices.length / 4;
    const { gl, shaderProgram } = target
    target.buffer = fnGL.createBuffer(gl, new Float32Array(vertices))
    fnGL.createAttrib(
      gl, shaderProgram, "coords", 2,
      Float32Array.BYTES_PER_ELEMENT*4, 0,
      false
    ).createAttrib(
      gl, shaderProgram, "textureCoords", 2,
      Float32Array.BYTES_PER_ELEMENT*4,
      Float32Array.BYTES_PER_ELEMENT*2,
      false
    );

    target.drawMode = "TRIANGLE_STRIP";
  },
  loadTexture : (target) => {
    const image = document.createElement("img");
    image.crossOrigin = "";
    image.addEventListener("load", function(){
       const { gl, shaderProgram } = target
           , texture = gl.createTexture()
           , sampler = gl.getUniformLocation(shaderProgram, "sampler");

        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image)
        gl.uniform1i(sampler, 0);
    })
    //image.src = "https://pbs.twimg.com/profile_images/664169149002874880/z1fmxo00.jpg"
    image.src = "/img/cat.jpg";
  },

  clearBuffers : (target) => {

  }

}

export default TextureImage
