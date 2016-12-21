'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RouterTopicActions = require('../actions/RouterTopicActions');

var RouterTopicSlice = {
  _setTopicId: function _setTopicId(topicId) {
    this.state.topicId = topicId;
    this.trigger(_RouterTopicActions.RouterTopicActionTypes.VIEW_TOPIC, this.state);
  },
  onViewTopic: function onViewTopic(topicId) {
    this._setTopicId(topicId);
  }
};

exports.default = RouterTopicSlice;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\flux\stores\RouterTopicSlice.js.map