'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._startAnimation = undefined;

var _dfValues = require('../gl-props/dfValues');

var _dfValues2 = _interopRequireDefault(_dfValues);

var _is = require('../../../utils/is');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _startAnimation = exports._startAnimation = function _startAnimation(target) {
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
        _valuesForInit = Object.assign({}, _dfValues2.default, valuesForInit);

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

var startAnimation = function startAnimation(target) {
    target.prototype.startAnimation = _startAnimation;
};

exports.default = startAnimation;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\topics\gl-decorators\startAnimation.js.map