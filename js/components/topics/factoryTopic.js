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

var _rTopicProps2;

var _rTopicProps = (_rTopicProps2 = {
  DF: _RandomTriangles["default"]
}, _rTopicProps2[_ID.ID_RANDOM_TRIANGLES] = _RandomTriangles["default"], _rTopicProps2[_ID.ID_CROWN] = _CoronaSample["default"], _rTopicProps2[_ID.ID_PLANE] = _Plane["default"], _rTopicProps2[_ID.ID_CUBE] = _Cube["default"], _rTopicProps2[_ID.ID_TEXTURE_IMAGE] = _TextureImage["default"], _rTopicProps2[_ID.ID_CUBE_WITH_LIGHT] = _CubeWithLight["default"], _rTopicProps2[_ID.ID_CUBE_TRANSPARENT] = _CubeTransparent["default"], _rTopicProps2);

var factoryTopic = function factoryTopic(topicId) {
  var props = topicId && _rTopicProps[topicId] || _rTopicProps.DF;
  props.key = topicId + Date.now();
  return {
    Comp: _WebGLTopic["default"],
    props: props
  };
};

var _default = factoryTopic;
exports["default"] = _default;
//# sourceMappingURL=factoryTopic.js.map