"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports._draw = void 0;

var _fnGL = _interopRequireDefault(require("../gl-fn/fnGL"));

var _draw = function _draw(target) {
  var gl = target.gl,
      isAnimate = target.isAnimate,
      vertexCount = target.vertexCount,
      isStopDraw = target.isStopDraw,
      draw = target.draw,
      _target$drawMode = target.drawMode,
      drawMode = _target$drawMode === void 0 ? "TRIANGLES" : _target$drawMode,
      isDrawElemnts = target.isDrawElemnts,
      indexCount = target.indexCount,
      isDynamicTranslate = target.isDynamicTranslate,
      matrixLocation = target.matrixLocation,
      matrix = target.matrix;

  if (isAnimate) {
    _fnGL["default"].rotateMatrix(target);

    if (isDynamicTranslate) {
      _fnGL["default"].translateMatrix(target);
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

exports._draw = _draw;

var draw = function draw(target) {
  target.prototype.draw = _draw;
};

var _default = draw;
exports["default"] = _default;
//# sourceMappingURL=draw.js.map