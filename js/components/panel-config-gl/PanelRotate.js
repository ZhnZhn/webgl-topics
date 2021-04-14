"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));

var _RowProp = _interopRequireDefault(require("./RowProp"));

var _Panel = _interopRequireDefault(require("./Panel.Style"));

var _jsxRuntime = require("react/jsx-runtime");

var PanelRotate = function PanelRotate(_ref) {
  var rX = _ref.rX,
      rY = _ref.rY,
      rZ = _ref.rZ,
      onGetComp = _ref.onGetComp;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_OpenClose["default"], {
    isClose: true,
    caption: "Rotate",
    style: _Panel["default"].OPEN_CLOSE,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RowProp["default"], {
      labelBy: "X:",
      inputId: "rX",
      value: rX,
      propKey: "rX",
      onGetComp: onGetComp
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowProp["default"], {
      labelBy: "Y:",
      inputId: "rY",
      value: rY,
      propKey: "rY",
      onGetComp: onGetComp
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowProp["default"], {
      labelBy: "Z:",
      inputId: "rZ",
      value: rZ,
      propKey: "rZ",
      onGetComp: onGetComp
    })]
  });
};

var _default = PanelRotate;
exports["default"] = _default;
//# sourceMappingURL=PanelRotate.js.map