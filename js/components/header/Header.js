"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _IconAppLogo = _interopRequireDefault(require("./IconAppLogo"));
var _AppLabel = _interopRequireDefault(require("./AppLabel"));
var _GitHubLink = _interopRequireDefault(require("./GitHubLink"));
var _jsxRuntime = require("preact/jsx-runtime");
var TITLE = 'WebGL Topics v0.2.0';
var HEADER = "header",
  CL_ICON_APP = HEADER + "__icon-app",
  CL_LABEL_APP = HEADER + "__label-app",
  CL_GITHUB_LINK = HEADER + "__github-link";
var Header = function Header() {
  return (0, _jsxRuntime.jsxs)("header", {
    className: "header",
    children: [(0, _jsxRuntime.jsx)(_IconAppLogo["default"], {
      className: CL_ICON_APP,
      title: TITLE
    }), (0, _jsxRuntime.jsx)(_AppLabel["default"], {
      className: CL_LABEL_APP,
      caption: TITLE
    }), (0, _jsxRuntime.jsx)(_GitHubLink["default"], {
      className: CL_GITHUB_LINK,
      href: "https://github.com/zhnzhn/webgl-topics/",
      ariaLabel: "GitHub Repository"
    })]
  });
};
var _default = Header;
exports["default"] = _default;
//# sourceMappingURL=Header.js.map