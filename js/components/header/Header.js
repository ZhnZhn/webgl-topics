"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _IconAppLogo = _interopRequireDefault(require("./IconAppLogo"));

var _AppLabel = _interopRequireDefault(require("./AppLabel"));

var _GitHubLink = _interopRequireDefault(require("./GitHubLink"));

var _jsxRuntime = require("react/jsx-runtime");

var TITLE = 'WebGL Topics v0.1.0';

var Header = function Header() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("header", {
    className: "header",
    role: "banner",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_IconAppLogo["default"], {
      className: "header__icon-app",
      title: TITLE
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppLabel["default"], {
      className: "header__label-app",
      caption: TITLE
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_GitHubLink["default"], {
      className: "header__github-link",
      title: "GitHub Repository",
      href: "https://github.com/zhnzhn/webgl-topics/"
    })]
  });
};

var _default = Header;
exports["default"] = _default;
//# sourceMappingURL=Header.js.map