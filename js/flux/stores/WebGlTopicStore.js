'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _ID = require('../../components/topics/ID');

var _ID2 = _interopRequireDefault(_ID);

var _RouterTopicActions = require('../actions/RouterTopicActions');

var _RouterTopicActions2 = _interopRequireDefault(_RouterTopicActions);

var _RouterTopicSlice = require('./RouterTopicSlice');

var _RouterTopicSlice2 = _interopRequireDefault(_RouterTopicSlice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WebGlStore = _reflux2.default.createStore(_extends({
  listenables: [_RouterTopicActions2.default],
  state: {
    topicId: _ID2.default.RANDOM_TRIANGLES
  }

}, _RouterTopicSlice2.default));

exports.default = WebGlStore;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\flux\stores\WebGlTopicStore.js.map