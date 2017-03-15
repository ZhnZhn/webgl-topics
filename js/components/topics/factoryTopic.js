'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _rTopic2;

var _WebGLTopic = require('./WebGLTopic');

var _WebGLTopic2 = _interopRequireDefault(_WebGLTopic);

var _ID = require('./ID');

var _ID2 = _interopRequireDefault(_ID);

var _RandomTriangles = require('./gl-props/RandomTriangles');

var _RandomTriangles2 = _interopRequireDefault(_RandomTriangles);

var _CoronaSample = require('./gl-props/CoronaSample');

var _CoronaSample2 = _interopRequireDefault(_CoronaSample);

var _Plane = require('./gl-props/Plane');

var _Plane2 = _interopRequireDefault(_Plane);

var _Cube = require('./gl-props/Cube');

var _Cube2 = _interopRequireDefault(_Cube);

var _TextureImage = require('./gl-props/TextureImage');

var _TextureImage2 = _interopRequireDefault(_TextureImage);

var _CubeWithLight = require('./gl-props/CubeWithLight');

var _CubeWithLight2 = _interopRequireDefault(_CubeWithLight);

var _CubeTransparent = require('./gl-props/CubeTransparent');

var _CubeTransparent2 = _interopRequireDefault(_CubeTransparent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _rTopic = (_rTopic2 = {
  DEFAULT: { props: _RandomTriangles2.default }

}, (0, _defineProperty3.default)(_rTopic2, _ID2.default.RANDOM_TRIANGLES, { props: _RandomTriangles2.default }), (0, _defineProperty3.default)(_rTopic2, _ID2.default.CROWN, { props: _CoronaSample2.default }), (0, _defineProperty3.default)(_rTopic2, _ID2.default.PLANE, { props: _Plane2.default }), (0, _defineProperty3.default)(_rTopic2, _ID2.default.CUBE, { props: _Cube2.default }), (0, _defineProperty3.default)(_rTopic2, _ID2.default.TEXTURE_IMAGE, { props: _TextureImage2.default }), (0, _defineProperty3.default)(_rTopic2, _ID2.default.CUBE_WITH_LIGHT, { props: _CubeWithLight2.default }), (0, _defineProperty3.default)(_rTopic2, _ID2.default.CUBE_TRANSPARENT, { props: _CubeTransparent2.default }), _rTopic2);

var factoryTopic = function factoryTopic(topicId) {
  var config = _rTopic[topicId],
      props = config ? config.props : _rTopic.DEFAULT.props;

  props.key = topicId + Date.now();
  return { Comp: _WebGLTopic2.default, props: props };
};

exports.default = factoryTopic;
//# sourceMappingURL=factoryTopic.js.map