"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._draw = undefined;

var _fnGL = require("../gl-fn/fnGL");

var _fnGL2 = _interopRequireDefault(_fnGL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _draw = exports._draw = function _draw(target) {
  var gl = target.gl,
      isAnimate = target.isAnimate,
      vertexCount = target.vertexCount,
      isStopDraw = target.isStopDraw,
      draw = target.draw,
      _target$drawMode = target.drawMode,
      drawMode = _target$drawMode === undefined ? "TRIANGLES" : _target$drawMode,
      isDrawElemnts = target.isDrawElemnts,
      indexCount = target.indexCount,
      isDynamicTranslate = target.isDynamicTranslate,
      matrixLocation = target.matrixLocation,
      matrix = target.matrix;


  if (isAnimate) {

    _fnGL2.default.rotateMatrix(target);
    if (isDynamicTranslate) {
      _fnGL2.default.translateMatrix(target);
    }

    gl.uniformMatrix4fv(matrixLocation, false, matrix);
    gl.clear(gl.COLOR_BUFFER_BIT);

    if (isDrawElemnts) {
      gl.drawElements(gl[drawMode], indexCount, gl.UNSIGNED_BYTE, 0);
    } else {
      gl.drawArrays(gl[drawMode], 0, vertexCount);
    }
  }

  if (!isStopDraw) {
    window.requestAnimationFrame(draw.bind(null, target));
  } else {
    target.props.clearBuffers(target);
  }
};

var draw = function draw(target) {
  target.prototype.draw = _draw;
};

exports.default = draw;
//# sourceMappingURL=draw.js.map