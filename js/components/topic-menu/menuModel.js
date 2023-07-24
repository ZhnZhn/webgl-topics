"use strict";

exports.__esModule = true;
exports.default = void 0;
var _ID = require("../topics/ID");
var _useWebGLStore = require("../../flux/useWebGLStore");
const _crItem = (id, title) => ({
  id,
  title,
  onClick: () => (0, _useWebGLStore.setTopicId)(id)
});
const ITEM_CONFIG = [[_ID.ID_RANDOM_TRIANGLES, 'Random Triangles'], [_ID.ID_CROWN, 'Crown Sample'], [_ID.ID_PLANE, 'Plane'], [_ID.ID_CUBE, 'Cube'], [_ID.ID_CUBE_WITH_LIGHT, 'Cube With Light'], [_ID.ID_CUBE_TRANSPARENT, 'Cube Transparent']];
const menuModel = [{
  caption: 'WebGL with gl-matrix',
  items: ITEM_CONFIG.map(config => _crItem(config[0], config[1]))
}];
var _default = menuModel;
exports.default = _default;
//# sourceMappingURL=menuModel.js.map