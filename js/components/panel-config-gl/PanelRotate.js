"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));
var _RowProp = _interopRequireDefault(require("./RowProp"));
var _Panel = require("./Panel.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const PanelRotate = _ref => {
  let {
    rX,
    rY,
    rZ,
    onGetComp
  } = _ref;
  return (0, _jsxRuntime.jsxs)(_OpenClose.default, {
    isClose: true,
    caption: "Rotate",
    style: _Panel.OPEN_CLOSE,
    children: [(0, _jsxRuntime.jsx)(_RowProp.default, {
      labelBy: "X",
      inputId: "rX",
      value: rX,
      propKey: "rX",
      onGetComp: onGetComp
    }), (0, _jsxRuntime.jsx)(_RowProp.default, {
      labelBy: "Y",
      inputId: "rY",
      value: rY,
      propKey: "rY",
      onGetComp: onGetComp
    }), (0, _jsxRuntime.jsx)(_RowProp.default, {
      labelBy: "Z",
      inputId: "rZ",
      value: rZ,
      propKey: "rZ",
      onGetComp: onGetComp
    })]
  });
};
var _default = exports.default = PanelRotate;
//# sourceMappingURL=PanelRotate.js.map