"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _setPointSize = exports._setPointSize = function _setPointSize(target) {
  var gl = target.gl,
      shaderProgram = target.shaderProgram;


  var pointSize = gl.getAttribLocation(shaderProgram, "pointSize");
  gl.vertexAttrib1f(pointSize, 20);
};

var setPointSize = function setPointSize(target) {
  target.prototype.setPointSize = _setPointSize;
};

exports.default = setPointSize;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\topics\gl-decorators\setPointSize.js.map