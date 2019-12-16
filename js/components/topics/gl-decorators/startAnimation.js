"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports._startAnimation = void 0;

var _dfValues = _interopRequireDefault(require("../gl-props/dfValues"));

var _is = require("../../../utils/is");

var _startAnimation = function _startAnimation(target) {
  var initGL = target.initGL,
      createShaders = target.createShaders,
      createPerspective = target.createPerspective,
      setPointSize = target.setPointSize,
      configMatrix = target.configMatrix,
      draw = target.draw,
      props = target.props,
      valuesForInit = props.valuesForInit,
      _createVertices = props.createVertices,
      _createIndices = props.createIndices,
      _loadTexture = props.loadTexture,
      _draw = props.draw,
      _valuesForInit = Object.assign({}, _dfValues["default"], valuesForInit);

  for (var key in _valuesForInit) {
    target[key] = _valuesForInit[key];
  }

  initGL(target);
  createShaders(target);

  _createVertices(target);

  if (!target.isWithoutPerspective) {
    createPerspective(target);
  }

  if (!target.isWithoutPointSize) {
    setPointSize(target);
  }

  configMatrix(target);

  if ((0, _is.isFunction)(_createIndices)) {
    _createIndices(target);
  }

  if ((0, _is.isFunction)(_loadTexture)) {
    _loadTexture(target);
  }

  if ((0, _is.isFunction)(_draw)) {
    _draw(target);
  } else {
    draw(target);
  }
};

exports._startAnimation = _startAnimation;

var startAnimation = function startAnimation(target) {
  target.prototype.startAnimation = _startAnimation;
};

var _default = startAnimation;
exports["default"] = _default;
//# sourceMappingURL=startAnimation.js.map