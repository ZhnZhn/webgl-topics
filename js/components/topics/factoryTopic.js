'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WebGLTopic = require('./WebGLTopic');

var _WebGLTopic2 = _interopRequireDefault(_WebGLTopic);

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

//import React from 'react';

var _rTopic = {
  DEFAULT: { props: _RandomTriangles2.default },
  //DEFAULT : { props : CubeWithLight },
  RANDOM_TRIANGLES: { props: _RandomTriangles2.default },
  CORONA: { props: _CoronaSample2.default },
  PLANE: { props: _Plane2.default },
  CUBE: { props: _Cube2.default },
  TEXTURE_IMAGE: { props: _TextureImage2.default },
  CUBE_WITH_LIGHT: { props: _CubeWithLight2.default },
  CUBE_TRANSPARENT: { props: _CubeTransparent2.default }
};

var factoryTopic = function factoryTopic(topicId) {
  var config = _rTopic[topicId],
      props = config ? config.props : _rTopic.DEFAULT.props;

  props.key = topicId + Date.now();
  //return React.createElement(WebGLTopic, props);
  return { Comp: _WebGLTopic2.default, props: props };
};

exports.default = factoryTopic;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\topics\factoryTopic.js.map