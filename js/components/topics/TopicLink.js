"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _RouterLink = _interopRequireDefault(require("./links/RouterLink"));

var TopicLink = function TopicLink(_ref) {
  var config = _ref.config;

  if (!config) {
    return null;
  } else {
    var topicLink = config.topicLink,
        _ref2 = topicLink || {},
        type = _ref2.type;

    return type && _RouterLink["default"][type] || null;
  }
};

var _default = TopicLink;
exports["default"] = _default;
//# sourceMappingURL=TopicLink.js.map