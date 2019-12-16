"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _PanelDrawMode = _interopRequireDefault(require("./PanelDrawMode"));

var _PanelPerspective = _interopRequireDefault(require("./PanelPerspective"));

var _PanelTranslate = _interopRequireDefault(require("./PanelTranslate"));

var _PanelRotate = _interopRequireDefault(require("./PanelRotate"));

var _Panel = _interopRequireDefault(require("./Panel.Style"));

var PanelConfigGL = function PanelConfigGL(_ref) {
  var onGetComp = _ref.onGetComp,
      valuesForInit = _ref.valuesForInit;
  var perspectiveNear = valuesForInit.perspectiveNear,
      perspectiveFar = valuesForInit.perspectiveFar,
      zMatrixTranslate = valuesForInit.zMatrixTranslate,
      rX = valuesForInit.rX,
      rY = valuesForInit.rY,
      rZ = valuesForInit.rZ;
  return _react["default"].createElement("div", {
    style: _Panel["default"].ROOT
  }, _react["default"].createElement("span", {
    style: _Panel["default"].ROOT_CAPTION
  }, "Config WebGL Topic"), _react["default"].createElement(_PanelDrawMode["default"], {
    onGetComp: onGetComp
  }), _react["default"].createElement(_PanelPerspective["default"], {
    perspectiveNear: perspectiveNear,
    perspectiveFar: perspectiveFar,
    onGetComp: onGetComp
  }), _react["default"].createElement(_PanelTranslate["default"], {
    zMatrixTranslate: zMatrixTranslate,
    onGetComp: onGetComp
  }), _react["default"].createElement(_PanelRotate["default"], {
    rX: rX,
    rY: rY,
    rZ: rZ,
    onGetComp: onGetComp
  }));
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