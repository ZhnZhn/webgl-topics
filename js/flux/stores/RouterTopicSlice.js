'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RouterTopicActions = require('../actions/RouterTopicActions');

var RouterTopicSlice = {
  _setTopicId: function _setTopicId(topicId) {
    this.state.topicId = topicId;
  },
  onViewTopic: function onViewTopic(topicId) {
    this._setTopicId(topicId);
    this.trigger(_RouterTopicActions.RouterTopicActionTypes.VIEW_TOPIC, this.state);
  }
};

exports.default = RouterTopicSlice;
//# sourceMappingURL=RouterTopicSlice.js.map