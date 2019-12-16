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

var PanelTranslate =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(PanelTranslate, _Component);

  function PanelTranslate(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._fnAfterSet = function (comp) {
      comp.configMatrix(comp);
    };

    return _this;
  }

  var _proto = PanelTranslate.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        zMatrixTranslate = _this$props.zMatrixTranslate,
        onGetComp = _this$props.onGetComp;
    return _react["default"].createElement(_OpenClose["default"], {
      caption: "Translate",
      style: _Panel["default"].OPEN_CLOSE
    }, _react["default"].createElement(_RowProp["default"], {
      labelBy: "Z:",
      inputId: "tZ",
      value: zMatrixTranslate,
      propKey: "zMatrixTranslate",
      onGetComp: onGetComp,
      fnAfterSet: this._fnAfterSet
    }));
  };

  return PanelTranslate;
}(_react.Component);

PanelTranslate.propTypes = {
  zMatrixTranslate: _react.PropTypes.number.isRequired,
  onGetComp: _react.PropTypes.func.isRequired
};
var _default = PanelTranslate;
exports["default"] = _default;
//# sourceMappingURL=PanelTranslate.js.map