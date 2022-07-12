"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _refluxCore = _interopRequireDefault(require("reflux-core"));

var _ID = require("../../components/topics/ID");

var _RouterTopicActions = _interopRequireDefault(require("../actions/RouterTopicActions"));

var _RouterTopicSlice = _interopRequireDefault(require("./RouterTopicSlice"));

var WebGlStore = _refluxCore["default"].createStore((0, _extends2["default"])({
  listenables: [_RouterTopicActions["default"]],
  state: {
    topicId: _ID.ID_RANDOM_TRIANGLES
  }
}, _RouterTopicSlice["default"]));

var _default = WebGlStore;
exports["default"] = _default;
//# sourceMappingURL=WebGlTopicStore.js.map