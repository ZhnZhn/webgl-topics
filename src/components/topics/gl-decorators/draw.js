import fnGL from '../gl-fn/fnGL';


export const _draw = (target) => {
    const {
            gl, isAnimate, matrix, shaderProgram, vertexCount,
            isStopDraw, draw, drawMode="TRIANGLES",
            rX, rY, rZ,
            isDrawElemnts, indexCount
          } = target

    if (isAnimate){
      fnGL.rotateTransformMatrix(gl, shaderProgram, matrix, rX, rY, rZ)
      gl.clear(gl.COLOR_BUFFER_BIT);

      if (isDrawElemnts){
        gl.drawElements(gl[drawMode], indexCount, gl.UNSIGNED_BYTE, 0);
      } else {
        gl.drawArrays(gl[drawMode], 0, vertexCount);
      }
    }

    if (!isStopDraw){
      window.requestAnimationFrame(draw.bind(null, target));
    }
}

const draw = (target) => {
  target.prototype.draw = _draw
}

export default draw
