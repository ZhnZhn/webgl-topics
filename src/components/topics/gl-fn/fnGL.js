import { mat4 } from 'gl-matrix';

const  fnGL = {
  createBuffer : (gl, bufferData, bufferType="ARRAY_BUFFER") => {
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl[bufferType], buffer);
    gl.bufferData(gl[bufferType], bufferData, gl.STATIC_DRAW);
    return buffer;
  },

  createAttrib : function(gl, shaderProgram, attrName, dim, rawDim=0, offset=0, isBindBuffer=true) {
    const attr = gl.getAttribLocation(shaderProgram, attrName);
    gl.vertexAttribPointer(attr, dim, gl.FLOAT, false, rawDim, offset);
    gl.enableVertexAttribArray(attr);
    if (isBindBuffer){
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }
    return this;
  },

  rotateTransformMatrix : (gl, shaderProgram, matrix, rX, rY, rZ) => {
    //mat4.rotateX(matrix, matrix, -0.007);
    mat4.rotateX(matrix, matrix, rX);
    mat4.rotateY(matrix, matrix, rY);
    mat4.rotateZ(matrix, matrix, rZ);

    var transformMatrix = gl.getUniformLocation(shaderProgram, "transformMatrix");
    gl.uniformMatrix4fv(transformMatrix, false, matrix);
  }

}

export default fnGL
