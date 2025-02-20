"use strict";

exports.__esModule = true;
exports.useTopicId = exports.setTopicId = void 0;
var _storeApi = require("./storeApi");
var _ID = require("../components/topics/ID");
const _crStore = () => ({
    topicId: _ID.ID_PLANE
  }),
  _store = (0, _storeApi.createStoreWithSelector)(_crStore),
  _selectTopicId = state => state.topicId,
  [_set] = (0, _storeApi.getStoreApi)(_store);
const useTopicId = exports.useTopicId = (0, _storeApi.fUseStoreState)(_store, _selectTopicId);
const setTopicId = topicId => {
  _set({
    topicId
  });
};
exports.setTopicId = setTopicId;
//# sourceMappingURL=useWebGLStore.js.map