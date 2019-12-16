"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _ID = _interopRequireDefault(require("../topics/ID"));

var _RouterTopicActions = _interopRequireDefault(require("../../flux/actions/RouterTopicActions"));

var menuModel = [{
  caption: 'WebGL with gl-matrix',
  items: [{
    id: _ID["default"].RANDOM_TRIANGLES,
    title: "Random Triangles",
    onClick: function onClick() {
      return _RouterTopicActions["default"].viewTopic(_ID["default"].RANDOM_TRIANGLES);
    }
  }, {
    id: _ID["default"].CROWN,
    title: "Crown Sample",
    onClick: function onClick() {
      return _RouterTopicActions["default"].viewTopic(_ID["default"].CROWN);
    }
  }, {
    id: _ID["default"].PLANE,
    title: "Plane",
    onClick: function onClick() {
      return _RouterTopicActions["default"].viewTopic(_ID["default"].PLANE);
    }
  }, {
    id: _ID["default"].CUBE,
    title: "Cube",
    onClick: function onClick() {
      return _RouterTopicActions["default"].viewTopic(_ID["default"].CUBE);
    }
  },
  /*{
  id : ID.TEXTURE_IMAGE,
  title: "TextureImage",
  onClick : () => Actions.viewTopic(ID.TEXTURE_IMAGE)
  },*/
  {
    id: _ID["default"].CUBE_WITH_LIGHT,
    title: "CubeWithLight",
    onClick: function onClick() {
      return _RouterTopicActions["default"].viewTopic(_ID["default"].CUBE_WITH_LIGHT);
    }
  }, {
    id: _ID["default"].CUBE_TRANSPARENT,
    title: "CubeTransparent",
    onClick: function onClick() {
      return _RouterTopicActions["default"].viewTopic(_ID["default"].CUBE_TRANSPARENT);
    }
  }]
}];
var _default = menuModel;
exports["default"] = _default;
//# sourceMappingURL=menuModel.js.map