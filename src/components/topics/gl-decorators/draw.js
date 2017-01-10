import fnGL from '../gl-fn/fnGL';

export const _draw = (target) => {
    const {
            gl, isAnimate, vertexCount,
            isStopDraw, draw, drawMode="TRIANGLES",
            isDrawElemnts, indexCount,
            isDynamicTranslate,
            matrixLocation, matrix
          } = target

    if (isAnimate){

      fnGL.rotateMatrix(target)
      if(isDynamicTranslate){
        fnGL.translateMatrix(target)
      }

      gl.uniformMatrix4fv(matrixLocation, false, matrix);
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
