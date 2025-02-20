"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _WebGLTopic = _interopRequireDefault(require("./WebGLTopic"));
var _ID = require("./ID");
var _dfValues = _interopRequireDefault(require("./gl-props/dfValues"));
var _RandomTriangles = _interopRequireDefault(require("./gl-props/RandomTriangles"));
var _CoronaSample = _interopRequireDefault(require("./gl-props/CoronaSample"));
var _Plane = _interopRequireDefault(require("./gl-props/Plane"));
var _Cube = _interopRequireDefault(require("./gl-props/Cube"));
var _TextureImage = _interopRequireDefault(require("./gl-props/TextureImage"));
var _CubeWithLight = _interopRequireDefault(require("./gl-props/CubeWithLight"));
var _CubeTransparent = _interopRequireDefault(require("./gl-props/CubeTransparent"));
const _rTopicProps = {
  DF: _Plane.default,
  [_ID.ID_RANDOM_TRIANGLES]: _RandomTriangles.default,
  [_ID.ID_CROWN]: _CoronaSample.default,
  [_ID.ID_PLANE]: _Plane.default,
  [_ID.ID_CUBE]: _Cube.default,
  [_ID.ID_TEXTURE_IMAGE]: _TextureImage.default,
  [_ID.ID_CUBE_WITH_LIGHT]: _CubeWithLight.default,
  [_ID.ID_CUBE_TRANSPARENT]: _CubeTransparent.default
};
const factoryTopic = topicId => {
  const props = topicId && _rTopicProps[topicId] || _rTopicProps.DF;
  props.valuesForInit = {
    ..._dfValues.default,
    ...props.valuesForInit
  };
  props.key = topicId;
  return {
    Comp: _WebGLTopic.default,
    props
  };
};
var _default = exports.default = factoryTopic;
//# sourceMappingURL=factoryTopic.js.map