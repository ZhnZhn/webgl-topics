"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _IconAppLogo = _interopRequireDefault(require("./IconAppLogo"));

var _AppLabel = _interopRequireDefault(require("./AppLabel"));

var _GitHubLink = _interopRequireDefault(require("./GitHubLink"));

var TITLE = 'WebGL Topics v0.1.0';

var Header = function Header() {
  return _react["default"].createElement("header", {
    className: "header",
    role: "banner"
  }, _react["default"].createElement(_IconAppLogo["default"], {
    className: "header__icon-app",
    title: TITLE
  }), _react["default"].createElement(_AppLabel["default"], {
    className: "header__label-app",
    caption: TITLE
  }), _react["default"].createElement(_GitHubLink["default"], {
    className: "header__github-link",
    title: "GitHub Repository",
    href: "https://github.com/zhnzhn/webgl-topics/"
  }));
};

var _default = Header;
exports["default"] = _default;
//# sourceMappingURL=Header.js.map