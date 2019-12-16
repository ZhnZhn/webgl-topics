"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _setModeToAll = _interopRequireDefault(require("./decorators/setModeToAll"));

var _onChangeMode = _interopRequireDefault(require("./decorators/onChangeMode"));

var _calcInputMode = _interopRequireDefault(require("./decorators/calcInputMode"));

var _Label = _interopRequireDefault(require("../zhn-atoms/Label"));

var _InputFloat = _interopRequireDefault(require("../zhn-atoms/InputFloat"));

var _ButtonSet = _interopRequireDefault(require("../zhn-atoms/ButtonSet"));

var _Row = _interopRequireDefault(require("./Row.Style"));

var _class, _class2, _temp;

var RowTranslate = (0, _setModeToAll["default"])(_class = (0, _onChangeMode["default"])(_class = (0, _calcInputMode["default"])(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(RowTranslate, _Component);

  function RowTranslate(props) {
    var _this;

    _this = _Component.call(this) || this;

    _this._handleSetTranslate = function () {
      var comp = _this.props.onGetComp();

      comp.zMatrixTranslate = _this.translateZ.getValue();
      comp.configMatrix(comp);

      _this._setModeToAll(2);
    };

    _this.mode = {
      translateZ: 2,
      bt: 2
    };
    return _this;
  }

  var _proto = RowTranslate.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var zMatrixTranslate = this.props.zMatrixTranslate;
    return _react["default"].createElement("div", {
      style: _Row["default"].ROW
    }, _react["default"].createElement(_Label["default"], {
      style: _Row["default"].CAPTION,
      title: "translate:"
    }), _react["default"].createElement(_Label["default"], {
      style: _Row["default"].LABEL,
      title: "Z:"
    }), _react["default"].createElement(_InputFloat["default"], {
      ref: function ref(comp) {
        return _this2.translateZ = comp;
      },
      inputKey: "translateZ",
      inputStyle: _Row["default"].INPUT_FLOAT_2,
      value: zMatrixTranslate,
      onChangeMode: this._onChangeMode.bind(this),
      onKeyDownEnter: this._handleSetTranslate
    }), _react["default"].createElement(_ButtonSet["default"], {
      ref: function ref(bt) {
        return _this2.bt = bt;
      },
      onClick: this._handleSetTranslate
    }));
  };

  return RowTranslate;
}(_react.Component), _class2.propTypes = {
  zMatrixTranslate: _react.PropTypes.number.isRequired,
  onGetComp: _react.PropTypes.func.isRequired
}, _temp)) || _class) || _class) || _class;

var _default = RowTranslate;
exports["default"] = _default;
//# sourceMappingURL=RowTranslate.js.map