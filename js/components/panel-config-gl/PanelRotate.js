"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));

var _RowProp = _interopRequireDefault(require("./RowProp"));

var _Panel = _interopRequireDefault(require("./Panel.Style"));

var PanelRotate =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(PanelRotate, _Component);

  function PanelRotate(props) {
    return _Component.call(this, props) || this;
  }

  var _proto = PanelRotate.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        rX = _this$props.rX,
        rY = _this$props.rY,
        rZ = _this$props.rZ,
        onGetComp = _this$props.onGetComp;
    return _react["default"].createElement(_OpenClose["default"], {
      isClose: true,
      caption: "Rotate",
      style: _Panel["default"].OPEN_CLOSE
    }, _react["default"].createElement(_RowProp["default"], {
      labelBy: "X:",
      inputId: "rX",
      value: rX,
      propKey: "rX",
      onGetComp: onGetComp
    }), _react["default"].createElement(_RowProp["default"], {
      labelBy: "Y:",
      inputId: "rY",
      value: rY,
      propKey: "rY",
      onGetComp: onGetComp
    }), _react["default"].createElement(_RowProp["default"], {
      labelBy: "Z:",
      inputId: "rZ",
      value: rZ,
      propKey: "rZ",
      onGetComp: onGetComp
    }));
  };

  return PanelRotate;
}(_react.Component);

PanelRotate.propTypes = {
  rX: _react.PropTypes.number.isRequired,
  rY: _react.PropTypes.number.isRequired,
  rZ: _react.PropTypes.number.isRequired,
  onGetComp: _react.PropTypes.func.isRequired
};
var _default = PanelRotate;
exports["default"] = _default;
//# sourceMappingURL=PanelRotate.js.map