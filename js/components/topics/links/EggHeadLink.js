"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var STYLE = {
  LINK: {
    display: 'table-cell'
  },
  PRO: {
    marginLeft: '4px',
    padding: '3px 7px',
    display: 'inline-block',
    borderRadius: '3px',
    color: '#ffffff',
    textDecoration: 'none',
    background: '#ef494f',
    fontWeight: '700'
  }
};

var EggHeadLink = function EggHeadLink(_ref) {
  var style = _ref.style,
      title = _ref.title,
      href = _ref.href,
      isPro = _ref.isPro;

  var _proEl = isPro ? _react["default"].createElement("span", {
    style: STYLE.PRO
  }, "P") : undefined;

  return _react["default"].createElement("a", {
    className: "native-link",
    style: Object.assign({}, STYLE.LINK, style),
    href: href
  }, _react["default"].createElement("span", null, title), _proEl);
};

var _default = EggHeadLink;
exports["default"] = _default;
//# sourceMappingURL=EggHeadLink.js.map