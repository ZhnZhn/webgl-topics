"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _PanelDrawMode = _interopRequireDefault(require("./PanelDrawMode"));

var _PanelPerspective = _interopRequireDefault(require("./PanelPerspective"));

var _PanelTranslate = _interopRequireDefault(require("./PanelTranslate"));

var _PanelRotate = _interopRequireDefault(require("./PanelRotate"));

var _Panel = _interopRequireDefault(require("./Panel.Style"));

var PanelConfigGL =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(PanelConfigGL, _Component);

  function PanelConfigGL() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = PanelConfigGL.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        onGetComp = _this$props.onGetComp,
        valuesForInit = _this$props.valuesForInit,
        perspectiveNear = valuesForInit.perspectiveNear,
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

  return PanelConfigGL;
}(_react.Component);

PanelConfigGL.propTypes = {
  valuesForInit: _react.PropTypes.shape({
    perspectiveNear: _react.PropTypes.number,
    perspectiveFar: _react.PropTypes.number,
    zMatrixTranslate: _react.PropTypes.number,
    rX: _react.PropTypes.number,
    rY: _react.PropTypes.number,
    rZ: _react.PropTypes.number
  }).isRequired,
  onGetComp: _react.PropTypes.func.isRequired
};
var _default = PanelConfigGL;
exports["default"] = _default;
//# sourceMappingURL=PanelConfigGL.js.map