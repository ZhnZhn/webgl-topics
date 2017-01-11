'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RouterTopicActions = require('../../flux/actions/RouterTopicActions');

var _RouterTopicActions2 = _interopRequireDefault(_RouterTopicActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuModel = [{
  caption: 'WebGL',
  items: [{
    id: 'RANDOM_TRIANGLES',
    title: "Random Triangles",
    onClick: function onClick() {
      return _RouterTopicActions2.default.viewTopic('RANDOM_TRIANGLES');
    }
  }, {
    id: 'CORONA',
    title: "Corona",
    onClick: function onClick() {
      return _RouterTopicActions2.default.viewTopic('CORONA');
    }
  }, {
    id: 'PLANE',
    title: "Plane",
    onClick: function onClick() {
      return _RouterTopicActions2.default.viewTopic('PLANE');
    }
  }, {
    id: 'CUBE',
    title: "Cube",
    onClick: function onClick() {
      return _RouterTopicActions2.default.viewTopic('CUBE');
    }
  }, {
    id: 'TEXTURE_IMAGE',
    title: "TextureImage",
    onClick: function onClick() {
      return _RouterTopicActions2.default.viewTopic('TEXTURE_IMAGE');
    }
  }, {
    id: 'CUBE_WITH_LIGHT',
    title: "CubeWithLight",
    onClick: function onClick() {
      return _RouterTopicActions2.default.viewTopic('CUBE_WITH_LIGHT');
    }
  }, {
    id: 'CUBE_TRANSPARENT',
    title: "CubeTransparent",
    onClick: function onClick() {
      return _RouterTopicActions2.default.viewTopic('CUBE_TRANSPARENT');
    }
  }]
}];

exports.default = menuModel;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\topic-menu\menuModel.js.map