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

  translateMatrix : (target) => {
    const {
            matrix,
            trZ, trZD, minTrZ, maxTrZ, trZStep
          } = target

    if (trZD === -1) {
      if (trZ>minTrZ){
        target.trZ = trZ - trZStep
      } else {
       target.trZD = 1
      }
    } else {
      if (trZ<maxTrZ){
        target.trZ = trZ + trZStep
      } else {
       target.trZD = -1
      }
    }

    const translateMatrix = mat4.create()
    mat4.translate(translateMatrix, translateMatrix, [0, 0, target.trZD*trZStep])
    mat4.multiply(matrix, translateMatrix, matrix)

  },

  rotateMatrix : (target) => {
    const { matrix, rX, rY, rZ } = target
    mat4.rotateX(matrix, matrix, rX);
    mat4.rotateY(matrix, matrix, rY);
    mat4.rotateZ(matrix, matrix, rZ);
  }

}

export default fnGL
