import fnGL from '../gl-fn/fnGL';
import { crTopicLink } from './helperFn';

const _mathRandom = Math.random;

const RandomTriangles = {
  valuesForInit: {
    topicLink: crTopicLink()
  },

  createVertices: (target) => {
    const { gl, shaderProgram } = target
    , vertices = target.vertices = []
    , colors = target.colors = []
    , vertexCount = target.vertexCount = 30;

    for (var i=0; i< vertexCount; i++){
      vertices.push(_mathRandom()*2 - 1);
      vertices.push(_mathRandom()*2 - 1);
      vertices.push(_mathRandom()*2 - 1);
      colors.push(_mathRandom());
      colors.push(_mathRandom());
      colors.push(_mathRandom());
      colors.push(1);
    }

    target.buffer = fnGL.createBuffer(gl, new Float32Array(vertices));
    fnGL.createAttrib(gl, shaderProgram, "coords", 3);

    target.colorBuffer = fnGL.createBuffer(gl, new Float32Array(colors));
    fnGL.createAttrib(gl, shaderProgram, "colors", 4)
  },

  clearBuffers: (target) => {
    const { gl, buffer, colorBuffer } = target;
    gl.deleteBuffer(buffer)
    gl.deleteBuffer(colorBuffer)
  }

}

export default RandomTriangles
