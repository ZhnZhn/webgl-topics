"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _WebGLTopic = _interopRequireDefault(require("./WebGLTopic"));

var _ID = require("./ID");

var _RandomTriangles = _interopRequireDefault(require("./gl-props/RandomTriangles"));

var _CoronaSample = _interopRequireDefault(require("./gl-props/CoronaSample"));

var _Plane = _interopRequireDefault(require("./gl-props/Plane"));

var _Cube = _interopRequireDefault(require("./gl-props/Cube"));

var _TextureImage = _interopRequireDefault(require("./gl-props/TextureImage"));

var _CubeWithLight = _interopRequireDefault(require("./gl-props/CubeWithLight"));

var _CubeTransparent = _interopRequireDefault(require("./gl-props/CubeTransparent"));

var _rTopic2;

var _rTopic = (_rTopic2 = {
  DF: {
    props: _RandomTriangles["default"]
  }
}, _rTopic2[_ID.ID_RANDOM_TRIANGLES] = {
  props: _RandomTriangles["default"]
}, _rTopic2[_ID.ID_CROWN] = {
  props: _CoronaSample["default"]
}, _rTopic2[_ID.ID_PLANE] = {
  props: _Plane["default"]
}, _rTopic2[_ID.ID_CUBE] = {
  props: _Cube["default"]
}, _rTopic2[_ID.ID_TEXTURE_IMAGE] = {
  props: _TextureImage["default"]
}, _rTopic2[_ID.ID_CUBE_WITH_LIGHT] = {
  props: _CubeWithLight["default"]
}, _rTopic2[_ID.ID_CUBE_TRANSPARENT] = {
  props: _CubeTransparent["default"]
}, _rTopic2);

var factoryTopic = function factoryTopic(topicId) {
  var config = topicId && _rTopic[topicId],
      props = config ? config.props : _rTopic.DF.props;
  props.key = topicId + Date.now();
  return {
    Comp: _WebGLTopic["default"],
    props: props
  };
};

var _default = factoryTopic;
exports["default"] = _default;
//# sourceMappingURL=factoryTopic.js.map