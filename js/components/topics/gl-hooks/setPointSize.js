"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var setPointSize = function setPointSize(_ref) {
  var gl = _ref.gl,
      shaderProgram = _ref.shaderProgram;
  var pointSize = gl.getAttribLocation(shaderProgram, "pointSize");
  gl.vertexAttrib1f(pointSize, 20);
};

var _default = setPointSize;
exports["default"] = _default;
//# sourceMappingURL=setPointSize.js.map