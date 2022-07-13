import fnGL from '../gl-fn/fnGL';

const draw = (
  config
) => {
    const {
      isAnimate,
      isStopDraw,
      gl,
      vertexCount,
      draw,
      drawMode="TRIANGLES",
      isDrawElemnts,
      indexCount,
      isDynamicTranslate,
      matrixLocation,
      matrix
    } = config || {};

    if (isAnimate){

      fnGL.rotateMatrix(config)
      if(isDynamicTranslate){
        fnGL.translateMatrix(config)
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
      window.requestAnimationFrame(() => draw(config))
    } else {
      config.props.clearBuffers(config)
    }
}

export default draw
