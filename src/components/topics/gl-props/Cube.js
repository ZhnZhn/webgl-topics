import fnGL from '../gl-fn/fnGL';
import { crTopicLink } from './helperFn';

const Cube = {
  valuesForInit: {
    zMatrixTranslate: -4,
    isDrawElemnts: true,
    topicLink: crTopicLink()
  },

  createVertices: (target) => {
    const vertices = target.vertices = [
      -1, -1, -1,   1, 0, 0, 1,
       1, -1, -1,   1, 1, 0, 1,
      -1, 1, -1,    0, 1, 1, 1,
       1, 1, -1,    0, 0, 1, 1,
      -1, 1, 1,     1, 0.5, 0, 1,
       1, 1, 1,     0.5, 1, 1, 1,
      -1, -1, 1,    1, 0, 0.5, 1,
       1, -1, 1,    0.5, 0, 1, 1
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

 createIndices: (target) => {
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
  target.indexBuffer = fnGL.createBuffer(
    gl, new Uint8Array(indices), "ELEMENT_ARRAY_BUFFER"
  );
},

clearBuffers: (target) => {
  const { gl, buffer, indexBuffer } = target
  gl.deleteBuffer(buffer);
  gl.deleteBuffer(indexBuffer)
}

}

export default Cube
