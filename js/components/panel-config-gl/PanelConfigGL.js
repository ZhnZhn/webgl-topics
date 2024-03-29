"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _PanelDrawMode = _interopRequireDefault(require("./PanelDrawMode"));

var _PanelPerspective = _interopRequireDefault(require("./PanelPerspective"));

var _PanelTranslate = _interopRequireDefault(require("./PanelTranslate"));

var _PanelRotate = _interopRequireDefault(require("./PanelRotate"));

var _Panel = require("./Panel.Style");

var _jsxRuntime = require("react/jsx-runtime");

var PanelConfigGL = function PanelConfigGL(_ref) {
  var onGetComp = _ref.onGetComp,
      valuesForInit = _ref.valuesForInit;
  var perspectiveNear = valuesForInit.perspectiveNear,
      perspectiveFar = valuesForInit.perspectiveFar,
      zMatrixTranslate = valuesForInit.zMatrixTranslate,
      rX = valuesForInit.rX,
      rY = valuesForInit.rY,
      rZ = valuesForInit.rZ;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: _Panel.ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: _Panel.ROOT_CAPTION,
      children: "Config WebGL Topic"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PanelDrawMode["default"], {
      onGetComp: onGetComp
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PanelPerspective["default"], {
      perspectiveNear: perspectiveNear,
      perspectiveFar: perspectiveFar,
      onGetComp: onGetComp
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PanelTranslate["default"], {
      zMatrixTranslate: zMatrixTranslate,
      onGetComp: onGetComp
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PanelRotate["default"], {
      rX: rX,
      rY: rY,
      rZ: rZ,
      onGetComp: onGetComp
    })]
  });
};
/*
PanelConfigGL. propTypes = {
  valuesForInit : PropTypes.shape({
      perspectiveNear: PropTypes.number,
      perspectiveFar: PropTypes.number,
      zMatrixTranslate: PropTypes.number,
      rX: PropTypes.number,
      rY: PropTypes.number,
      rZ: PropTypes.number
  }).isRequired,
  onGetComp : PropTypes.func.isRequired
}
*/


var _default = PanelConfigGL;
exports["default"] = _default;
//# sourceMappingURL=PanelConfigGL.js.map