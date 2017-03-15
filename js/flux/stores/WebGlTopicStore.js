'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _ID = require('../../components/topics/ID');

var _ID2 = _interopRequireDefault(_ID);

var _RouterTopicActions = require('../actions/RouterTopicActions');

var _RouterTopicActions2 = _interopRequireDefault(_RouterTopicActions);

var _RouterTopicSlice = require('./RouterTopicSlice');

var _RouterTopicSlice2 = _interopRequireDefault(_RouterTopicSlice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WebGlStore = _reflux2.default.createStore((0, _extends3.default)({
  listenables: [_RouterTopicActions2.default],
  state: {
    topicId: _ID2.default.RANDOM_TRIANGLES
  }

}, _RouterTopicSlice2.default));

exports.default = WebGlStore;
//# sourceMappingURL=WebGlTopicStore.js.map