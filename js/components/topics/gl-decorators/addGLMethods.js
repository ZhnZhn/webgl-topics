"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _initGL2 = require("./initGL");

var _createShaders2 = require("./createShaders");

var _createPerspective2 = require("./createPerspective");

var _setPointSize2 = require("./setPointSize");

var _configMatrix2 = require("./configMatrix");

var _draw2 = require("./draw");

var _startAnimation2 = require("./startAnimation");

var addGLMethods = function addGLMethods(target) {
  console.log(target);
  target.prototype.initGL = _initGL2._initGL;
  target.prototype.createShaders = _createShaders2._createShaders;
  target.prototype.createPerspective = _createPerspective2._createPerspective;
  target.prototype.setPointSize = _setPointSize2._setPointSize;
  target.prototype.configMatrix = _configMatrix2._configMatrix;
  target.prototype.draw = _draw2._draw;
  target.prototype.startAnimation = _startAnimation2._startAnimation;
  return target;
};

var _default = addGLMethods;
exports["default"] = _default;
//# sourceMappingURL=addGLMethods.js.map