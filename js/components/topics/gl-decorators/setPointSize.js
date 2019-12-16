"use strict";

exports.__esModule = true;
exports["default"] = exports._setPointSize = void 0;

var _setPointSize = function _setPointSize(target) {
  var gl = target.gl,
      shaderProgram = target.shaderProgram;
  var pointSize = gl.getAttribLocation(shaderProgram, "pointSize");
  gl.vertexAttrib1f(pointSize, 20);
};

exports._setPointSize = _setPointSize;

var setPointSize = function setPointSize(target) {
  target.prototype.setPointSize = _setPointSize;
};

var _default = setPointSize;
exports["default"] = _default;
//# sourceMappingURL=setPointSize.js.map