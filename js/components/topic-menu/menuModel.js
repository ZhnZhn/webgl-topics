"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _ID = require("../topics/ID");

var _RouterTopicActions = _interopRequireDefault(require("../../flux/actions/RouterTopicActions"));

var _crItem = function _crItem(id, title) {
  return {
    id: id,
    title: title,
    onClick: function onClick() {
      return _RouterTopicActions["default"].viewTopic(id);
    }
  };
};

var ITEM_CONFIG = [[_ID.ID_RANDOM_TRIANGLES, 'Random Triangles'], [_ID.ID_CROWN, 'Crown Sample'], [_ID.ID_PLANE, 'Plane'], [_ID.ID_CUBE, 'Cube'], [_ID.ID_CUBE_WITH_LIGHT, 'Cube With Light'], [_ID.ID_CUBE_TRANSPARENT, 'Cube Transparent']];
var menuModel = [{
  caption: 'WebGL with gl-matrix',
  items: ITEM_CONFIG.map(function (config) {
    return _crItem(config[0], config[1]);
  })
}];
var _default = menuModel;
exports["default"] = _default;
//# sourceMappingURL=menuModel.js.map