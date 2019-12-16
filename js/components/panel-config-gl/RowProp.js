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

var RowProp = (0, _setModeToAll["default"])(_class = (0, _onChangeMode["default"])(_class = (0, _calcInputMode["default"])(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(RowProp, _Component);

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

      if (typeof fnAfterSet === 'function') {
        fnAfterSet(comp);
      }

      _this._setModeToAll(2);
    };

    _this.mode = {
      inputFloat: 2,
      bt: 2
    };
    return _this;
  }

  var _proto = RowProp.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        labelBy = _this$props2.labelBy,
        inputId = _this$props2.inputId,
        value = _this$props2.value,
        styleLabel = _this$props2.styleLabel;
    return _react["default"].createElement("div", {
      style: _Row["default"].ROW
    }, _react["default"].createElement(_Label["default"], {
      style: Object.assign({}, _Row["default"].LABEL_ROW, styleLabel),
      title: labelBy,
      id: inputId
    }), _react["default"].createElement(_InputFloat["default"], {
      ref: function ref(comp) {
        return _this2.inputFloat = comp;
      },
      id: inputId,
      inputKey: "inputFloat",
      inputStyle: _Row["default"].INPUT_FLOAT_3,
      value: value,
      step: 0.001,
      onChangeMode: this._onChangeMode.bind(this),
      onKeyDownEnter: this._handleSetValue
    }), _react["default"].createElement(_ButtonSet["default"], {
      ref: function ref(bt) {
        return _this2.bt = bt;
      },
      onClick: this._handleSetValue
    }));
  };

  return RowProp;
}(_react.Component), _class2.propTypes = {
  labelBy: _react.PropTypes.string.isRequired,
  value: _react.PropTypes.number.isRequired,
  propKey: _react.PropTypes.string.isRequired,
  styleLabel: _react.PropTypes.object,
  onGetComp: _react.PropTypes.func.isRequired,
  fnAfterSet: _react.PropTypes.func
}, _temp)) || _class) || _class) || _class;

var _default = RowProp;
exports["default"] = _default;
//# sourceMappingURL=RowProp.js.map