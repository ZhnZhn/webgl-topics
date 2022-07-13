"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _RouterLink = _interopRequireDefault(require("./links/RouterLink"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["type"];

var TopicLink = function TopicLink(_ref) {
  var config = _ref.config;

  if (!config) {
    return null;
  } else {
    var topicLink = config.topicLink,
        _ref2 = topicLink || {},
        type = _ref2.type,
        restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref2, _excluded),
        Comp = type && _RouterLink["default"][type];

    return Comp ? /*#__PURE__*/(0, _jsxRuntime.jsx)(Comp, (0, _extends2["default"])({}, restProps)) : null;
  }
};

var _default = TopicLink;
exports["default"] = _default;
//# sourceMappingURL=TopicLink.js.map