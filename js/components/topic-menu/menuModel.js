'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ID = require('../topics/ID');

var _ID2 = _interopRequireDefault(_ID);

var _RouterTopicActions = require('../../flux/actions/RouterTopicActions');

var _RouterTopicActions2 = _interopRequireDefault(_RouterTopicActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuModel = [{
  caption: 'WebGL with gl-matrix',
  items: [{
    id: _ID2.default.RANDOM_TRIANGLES,
    title: "Random Triangles",
    onClick: function onClick() {
      return _RouterTopicActions2.default.viewTopic(_ID2.default.RANDOM_TRIANGLES);
    }
  }, {
    id: _ID2.default.CROWN,
    title: "Crown Sample",
    onClick: function onClick() {
      return _RouterTopicActions2.default.viewTopic(_ID2.default.CROWN);
    }
  }, {
    id: _ID2.default.PLANE,
    title: "Plane",
    onClick: function onClick() {
      return _RouterTopicActions2.default.viewTopic(_ID2.default.PLANE);
    }
  }, {
    id: _ID2.default.CUBE,
    title: "Cube",
    onClick: function onClick() {
      return _RouterTopicActions2.default.viewTopic(_ID2.default.CUBE);
    }
  }, {
    id: _ID2.default.TEXTURE_IMAGE,
    title: "TextureImage",
    onClick: function onClick() {
      return _RouterTopicActions2.default.viewTopic(_ID2.default.TEXTURE_IMAGE);
    }
  }, {
    id: _ID2.default.CUBE_WITH_LIGHT,
    title: "CubeWithLight",
    onClick: function onClick() {
      return _RouterTopicActions2.default.viewTopic(_ID2.default.CUBE_WITH_LIGHT);
    }
  }, {
    id: _ID2.default.CUBE_TRANSPARENT,
    title: "CubeTransparent",
    onClick: function onClick() {
      return _RouterTopicActions2.default.viewTopic(_ID2.default.CUBE_TRANSPARENT);
    }
  }]
}];

exports.default = menuModel;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\topic-menu\menuModel.js.map