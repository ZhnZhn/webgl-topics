"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _RouterTopicActions = require("../actions/RouterTopicActions");

var RouterTopicSlice = {
  _setTopicId: function _setTopicId(topicId) {
    this.state.topicId = topicId;
  },
  onViewTopic: function onViewTopic(topicId) {
    this._setTopicId(topicId);

    this.trigger(_RouterTopicActions.RouterTopicActionTypes.VIEW_TOPIC, this.state);
  }
};
var _default = RouterTopicSlice;
exports["default"] = _default;
//# sourceMappingURL=RouterTopicSlice.js.map