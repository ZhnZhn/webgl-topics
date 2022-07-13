"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _fnGL = _interopRequireDefault(require("../gl-fn/fnGL"));

var draw = function draw(config) {
  var _ref = config || {},
      isAnimate = _ref.isAnimate,
      isStopDraw = _ref.isStopDraw,
      gl = _ref.gl,
      vertexCount = _ref.vertexCount,
      draw = _ref.draw,
      _ref$drawMode = _ref.drawMode,
      drawMode = _ref$drawMode === void 0 ? "TRIANGLES" : _ref$drawMode,
      isDrawElemnts = _ref.isDrawElemnts,
      indexCount = _ref.indexCount,
      isDynamicTranslate = _ref.isDynamicTranslate,
      matrixLocation = _ref.matrixLocation,
      matrix = _ref.matrix;

  if (isAnimate) {
    _fnGL["default"].rotateMatrix(config);

    if (isDynamicTranslate) {
      _fnGL["default"].translateMatrix(config);
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
    window.requestAnimationFrame(function () {
      return draw(config);
    });
  } else {
    config.props.clearBuffers(config);
  }
};

var _default = draw;
exports["default"] = _default;
//# sourceMappingURL=draw.js.map