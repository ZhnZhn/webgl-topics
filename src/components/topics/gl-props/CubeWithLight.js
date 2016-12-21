import fnGL from '../gl-fn/fnGL'


const CubeWithLight = {
  vertexShaderCode : `
  attribute vec4 coords;
  uniform mat4 transformMatrix;
  uniform mat4 perspectiveMatrix;

  attribute vec3 normal;
  uniform vec3 lightColor;
  uniform vec3 lightDirection;

  varying vec4 varyingColors;
  void main(void){
    vec3 norm = normalize(normal);
    vec3 ld = normalize(lightDirection);
    float dotProduct = max(dot(norm, ld), 0.0);
    vec3 vertexColor = lightColor * vec3(1, 1, 0) * dotProduct;
    varyingColors = vec4(vertexColor, 1);

    gl_Position = perspectiveMatrix * transformMatrix * coords;
  }
  `,

  fragmentShaderCode : `
  precision mediump float;
  varying vec4 varyingColors;
  void main(void) {
    gl_FragColor = varyingColors;
  }
  `,

  valuesForInit : {
    zMatrixTranslate : -4
  },

  createVertices : (target) => {
    const vertices = target.vertices = [
  -1, -1, -1,
   1, -1, -1,
  -1, 1, -1,
   1, 1, -1,
  -1, 1, 1,
   1, 1, 1,
  -1, -1, 1,
   1, -1, 1
];

target.vertexCount = vertices.length / 3;
const { gl, shaderProgram } = target

target.buffer = fnGL.createBuffer(gl, new Float32Array(vertices))
fnGL.createAttrib(
    gl, shaderProgram, "coords", 3,
    0, 0,
    false
 );
 const normals = [
   0, 0, 1,   0, 0, 1,   0, 0, 1,   0, 0, 1,
   0, 1, 0,   0, 1, 0,   0, 1, 0,   0, 1, 0,
   0, 0, -1,  0, 0, -1,  0, 0, -1,  0, 0, -1,
   0, -1, 0,  0, -1, 0,  0, -1, 0,  0, -1, 0,
  -1, 0, 0,  -1, 0, 0,  -1, 0, 0,  -1, 0, 0,
   1, 0, 0,   1, 0, 0,   1, 0, 0,   1, 0, 0
];

target.normalBuffer = fnGL.createBuffer(gl, new Float32Array(normals))
fnGL.createAttrib(
    gl, shaderProgram, "normal", 3,
    0, 0
 );

 const lightColor = gl.getUniformLocation(shaderProgram, "lightColor");
 gl.uniform3f(lightColor, 1, 1, 1);
 const lightDirection = gl.getUniformLocation(shaderProgram, "lightDirection")
 gl.uniform3f(lightDirection, 0.5, 1, 0);



 target.isWithoutPointSize = true;
 //target.isWithoutPerspective = true;
//poitSize;
//perspectiveMatrix

//target.zMatrixTranslate = -4

  },

 createIndices : (target) => {
   const indices = target.indices = [
    0, 1, 2,   1, 2, 3,
    2, 3, 4,   3, 4, 5,
    4, 5, 6,   5, 6, 7,
    6, 7, 0,   7, 0, 1,
    0, 2, 6,   2, 6, 4,
    1, 3, 7,   3, 7, 5
  ];
  target.indexCount = indices.length;
  const { gl } = target
  target.indexBuffer = fnGL.createBuffer(gl, new Uint8Array(indices), "ELEMENT_ARRAY_BUFFER")
  target.isDrawElemnts = true;
},

clearBuffers : (target) => {
  const { gl, buffer, indexBuffer } = target
  gl.deleteBuffer(buffer);
  gl.deleteBuffer(indexBuffer)
}

}

export default CubeWithLight
