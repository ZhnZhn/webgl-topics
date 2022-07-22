"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _uiApi = require("../uiApi");

var _Comp = _interopRequireDefault(require("../Comp"));

var _Row = require("./Row.Style");

var _jsxRuntime = require("react/jsx-runtime");

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var _getInputMode = function _getInputMode(inputMode) {
  return inputMode === 0 ? 0 : inputMode === 1 ? 1 : 2;
};

var RowProp = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(RowProp, _Component);

  function RowProp() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.mode = {
      inputFloat: 2,
      bt: 2
    };

    _this._onChangeMode = function (inputKey, mode) {
      var _btMode = _this.mode.bt;
      _this.mode[inputKey] = mode;

      var _nextBtMode = _getInputMode(_this.mode.inputFloat);

      if (_btMode !== _nextBtMode) {
        _this.mode.bt = _nextBtMode;

        _this.bt.setMode(_nextBtMode);
      }
    };

    _this._setModeToAll = function (value) {
      for (var key in _this.mode) {
        _this.mode[key] = value;

        _this[key].setMode(value);
      }
    };

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

    return _this;
  }

  var _proto = RowProp.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        labelBy = _this$props2.labelBy,
        inputId = _this$props2.inputId,
        value = _this$props2.value,
        styleLabel = _this$props2.styleLabel;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: _Row.ROW,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Label, {
        style: (0, _extends2["default"])({}, _Row.LABEL, styleLabel),
        title: labelBy,
        id: inputId
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputFloat, {
        ref: this._refInputFloat,
        id: inputId,
        inputKey: "inputFloat",
        inputStyle: _Row.INPUT_FLOAT,
        value: value,
        step: 0.001,
        onChangeMode: this._onChangeMode,
        onKeyDownEnter: this._handleSetValue
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ButtonSet, {
        ref: this._refBt,
        onClick: this._handleSetValue
      })]
    });
  };

  return RowProp;
}(_uiApi.Component);

var _default = RowProp;
exports["default"] = _default;
//# sourceMappingURL=RowProp.js.map