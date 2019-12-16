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

var PanelPerspective =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(PanelPerspective, _Component);

  function PanelPerspective(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._fnAfterSet = function (comp) {
      comp.createPerspective(comp);
    };

    return _this;
  }

  var _proto = PanelPerspective.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        perspectiveNear = _this$props.perspectiveNear,
        perspectiveFar = _this$props.perspectiveFar,
        onGetComp = _this$props.onGetComp;
    return _react["default"].createElement(_OpenClose["default"], {
      caption: "Perspective",
      style: _Panel["default"].OPEN_CLOSE
    }, _react["default"].createElement(_RowProp["default"], {
      labelBy: "Near:",
      inputId: "pNear",
      value: perspectiveNear,
      propKey: "perspectiveNear",
      styleLabel: _Panel["default"].LABEL_PERSPECTIVE,
      onGetComp: onGetComp,
      fnAfterSet: this._fnAfterSet
    }), _react["default"].createElement(_RowProp["default"], {
      labelBy: "Far:",
      inputId: "pFar",
      value: perspectiveFar,
      styleLabel: _Panel["default"].LABEL_PERSPECTIVE,
      propKey: "perspectiveFar",
      onGetComp: onGetComp,
      fnAfterSet: this._fnAfterSet
    }));
  };

  return PanelPerspective;
}(_react.Component);

PanelPerspective.propTypes = {
  perspectiveNear: _react.PropTypes.number.isRequired,
  perspectiveFar: _react.PropTypes.number.isRequired,
  onGetComp: _react.PropTypes.func.isRequired
};
var _default = PanelPerspective;
exports["default"] = _default;
//# sourceMappingURL=PanelPerspective.js.map