"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _setModeToAll = _interopRequireDefault(require("./decorators/setModeToAll"));

var _onChangeMode = _interopRequireDefault(require("./decorators/onChangeMode"));

var _calcInputMode = _interopRequireDefault(require("./decorators/calcInputMode"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _Row = _interopRequireDefault(require("./Row.Style"));

var _class, _temp;

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var RowProp = (0, _setModeToAll["default"])(_class = (0, _onChangeMode["default"])(_class = (0, _calcInputMode["default"])(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(RowProp, _Component);

  /*
  static propTypes = {
    labelBy: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    propKey: PropTypes.string.isRequired,
    styleLabel: PropTypes.object,
    onGetComp: PropTypes.func.isRequired,
    fnAfterSet: PropTypes.func
  }
  */
  function RowProp(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleSetValue = function () {
      var _this$props = _this.props,
          onGetComp = _this$props.onGetComp,
          propKey = _this$props.propKey,
          fnAfterSet = _this$props.fnAfterSet,
          comp = onGetComp();
      comp[propKey] = _this.inputFloat.getValue();

      if (_isFn(fnAfterSet)) {
        fnAfterSet(comp);
      }

      _this._setModeToAll(2);
    };

    _this._refInputFloat = function (comp) {
      return _this.inputFloat = comp;
    };

    _this._refBt = function (bt) {
      return _this.bt = bt;
    };

    _this.mode = {
      inputFloat: 2,
      bt: 2
    };
    _this._onChangeMode = _this._onChangeMode.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  var _proto = RowProp.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        labelBy = _this$props2.labelBy,
        inputId = _this$props2.inputId,
        value = _this$props2.value,
        styleLabel = _this$props2.styleLabel;
    return _react["default"].createElement("div", {
      style: _Row["default"].ROW
    }, _react["default"].createElement(_Comp["default"].Label, {
      style: (0, _extends2["default"])({}, _Row["default"].LABEL_ROW, {}, styleLabel),
      title: labelBy,
      id: inputId
    }), _react["default"].createElement(_Comp["default"].InputFloat, {
      ref: this._refInputFloat,
      id: inputId,
      inputKey: "inputFloat",
      inputStyle: _Row["default"].INPUT_FLOAT_3,
      value: value,
      step: 0.001,
      onChangeMode: this._onChangeMode,
      onKeyDownEnter: this._handleSetValue
    }), _react["default"].createElement(_Comp["default"].ButtonSet, {
      ref: this._refBt,
      onClick: this._handleSetValue
    }));
  };

  return RowProp;
}(_react.Component), _temp)) || _class) || _class) || _class;

var _default = RowProp;
exports["default"] = _default;
//# sourceMappingURL=RowProp.js.map