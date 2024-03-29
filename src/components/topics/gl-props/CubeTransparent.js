import fnGL from '../gl-fn/fnGL'

const CubeTransparent = {
  valuesForInit : {
    zMatrixTranslate : -4,
    isDrawElemnts : true,
    drawMode : "LINES",

    isDynamicTranslate : true,
    trZStep : 0.005,
    trZ : -4 ,
    trZD : -1,
    minTrZ : -10,
    maxTrZ : -2,
  },

  createVertices : (target) => {
    const vertices = target.vertices = [
       //0, 0, 0,     1, 1, 1, 1,
      -1, -1, -1,   1, 0, 0, 1,  //1df
       1, -1, -1,   1, 1, 0, 1,  //2df
      -1,  1, -1,   1, 0, 0, 1,  //3uf
       1,  1, -1,   1, 1, 0, 1,  //4uf
      -1, -1,  1,   1, 0, 0, 1,  //5dn
       1, -1,  1,   1, 1, 0, 1,  //6dn
      -1,  1,  1,   1, 0, 0, 1,  //7un
       1,  1,  1,   1, 1, 0, 1,  //8un
    ];


    target.vertexCount = vertices.length / 7;
    const { gl, shaderProgram } = target

    target.buffer = fnGL.createBuffer(gl, new Float32Array(vertices))
    fnGL.createAttrib(
        gl, shaderProgram, "coords", 3,
        Float32Array.BYTES_PER_ELEMENT*7, 0,
        false
     ).createAttrib(
      gl, shaderProgram, "colors", 4,
      Float32Array.BYTES_PER_ELEMENT*7,
      Float32Array.BYTES_PER_ELEMENT*3
    );
  },

 createIndices : (target) => {
   /*
   const indices = target.indices = [
    0, 1,  0, 2,  0, 3,  0, 4,
    0, 5,  0, 6,  0, 7,  0, 8,
    1, 2,  2, 4,  4, 3,  3, 1,
    1, 5,  5, 6,  6, 2,
    6, 8,  8, 7,  7, 5,
    8, 4,  7, 3
  ];
  */
  const indices = target.indices = [
   0, 2,  3, 1,  0, 1,  2, 3,
   4, 6,  7, 5,  4, 5,  6, 7,
   0, 4,  2, 6,  3, 7,  1, 5
 ];
  target.indexCount = indices.length;
  const { gl } = target
  target.indexBuffer = fnGL.createBuffer(
     gl, new Uint8Array(indices), "ELEMENT_ARRAY_BUFFER"
  );
},

clearBuffers : (target) => {
  const { gl, buffer, indexBuffer } = target
  gl.deleteBuffer(buffer);
  gl.deleteBuffer(indexBuffer)
}

}

export default CubeTransparent
