import fnGL from '../gl-fn/fnGL'

const _fnAddVertice = (vertices, i) => {
  vertices.push(Math.cos(i))
  vertices.push(Math.sin(i))
  vertices.push(Math.sin(i * 10) * 0.1)
}

const _fnAddColor = (vertices, i) => {
  vertices.push(Math.sin(i * 10) * 0.5 + 0.5)
  vertices.push(Math.sin(i * 8) * 0.5 + 0.5)
  vertices.push(Math.sin(i * 12) * 0.5 + 0.5)
  vertices.push(1)
}

const Plane = {
  createVertices : (target) => {
    const vertices = target.vertices = [];
    //vertices.push( 0, 0, 0,  0, 0, 0, 1);
    vertices.push( 0, 0.9, 0.3,  1, 1, 1, 1);
    for(var i =0; i<Math.PI * 2; i += 0.01){
      _fnAddVertice(vertices, i);
      _fnAddColor(vertices, i)
    }
    i = Math.PI * 2;
    _fnAddVertice(vertices, i);
    _fnAddColor(vertices, i);

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

    target.drawMode = "TRIANGLE_FAN";
},

 clearBuffers : (target) => {
   const { gl, buffer } = target
   gl.deleteBuffer(buffer)
 }
}

export default Plane
