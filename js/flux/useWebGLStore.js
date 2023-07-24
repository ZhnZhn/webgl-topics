"use strict";

exports.__esModule = true;
exports.useTopicId = exports.setTopicId = void 0;
var _zustand = require("zustand");
var _ID = require("../components/topics/ID");
const useWebGLStore = (0, _zustand.create)(set => ({
  topicId: _ID.ID_RANDOM_TRIANGLES,
  setTopicId: id => set({
    topicId: id
  })
}));
const useTopicId = () => useWebGLStore(state => state.topicId);
exports.useTopicId = useTopicId;
const setTopicId = useWebGLStore.getState().setTopicId;
exports.setTopicId = setTopicId;
//# sourceMappingURL=useWebGLStore.js.map