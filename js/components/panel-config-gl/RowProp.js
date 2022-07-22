"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

var S_ROW = {
  marginTop: 12,
  display: 'flex',
  alignItems: 'center'
},
    S_LABEL = {
  color: 'grey',
  paddingLeft: 24,
  fontWeight: 'bold',
  fontSize: '16px'
},
    S_INPUT_FLOAT = {
  width: 45
},
    FN_NOOP = function FN_NOOP() {};

var _getInputMode = function _getInputMode(inputMode) {
  return inputMode === 0 ? 0 : inputMode === 1 ? 1 : 2;
};

var INPUT_KEY = 'inputFloat';

var RowProp = function RowProp(_ref) {
  var _useRef;

  var inputId = _ref.inputId,
      labelBy = _ref.labelBy,
      value = _ref.value,
      propKey = _ref.propKey,
      styleLabel = _ref.styleLabel,
      onGetComp = _ref.onGetComp,
      _ref$fnAfterSet = _ref.fnAfterSet,
      fnAfterSet = _ref$fnAfterSet === void 0 ? FN_NOOP : _ref$fnAfterSet;

  var _refInputFloat = (0, _uiApi.useRef)(),
      _refBt = (0, _uiApi.useRef)(),
      _refMode = (0, _uiApi.useRef)((_useRef = {}, _useRef[INPUT_KEY] = 2, _useRef.bt = 2, _useRef)),
      _onChangeMode = (0, _uiApi.useCallback)(function (inputKey, nextMode) {
    var mode = (0, _uiApi.getRefValue)(_refMode);
    mode[INPUT_KEY] = nextMode;

    var _nextBtMode = _getInputMode(nextMode);

    if (mode.bt !== _nextBtMode) {
      mode.bt = _nextBtMode;
      (0, _uiApi.getRefValue)(_refBt).setMode(_nextBtMode);
    }
  }, []),
      _setModeToAll = (0, _uiApi.useCallback)(function (value) {
    var mode = (0, _uiApi.getRefValue)(_refMode);
    mode[INPUT_KEY] = value;
    mode.bt = value;
    (0, _uiApi.getRefValue)(_refInputFloat).setMode(value);
    (0, _uiApi.getRefValue)(_refBt).setMode(value);
  }, []),
      _hSetValue = (0, _uiApi.useCallback)(function () {
    var comp = onGetComp();
    comp[propKey] = (0, _uiApi.getRefValue)(_refInputFloat).getValue();
    fnAfterSet(comp);

    _setModeToAll(2);
  }, [propKey, onGetComp, fnAfterSet, _setModeToAll]);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S_ROW,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Label, {
      id: inputId,
      style: (0, _extends2["default"])({}, S_LABEL, styleLabel),
      title: labelBy
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputFloat, {
      ref: _refInputFloat,
      id: inputId,
      inputKey: INPUT_KEY,
      inputStyle: S_INPUT_FLOAT,
      value: value,
      step: 0.001,
      onChangeMode: _onChangeMode,
      onKeyDownEnter: _hSetValue
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ButtonSet, {
      ref: _refBt,
      onClick: _hSetValue
    })]
  });
};
/*
RowProp.ropTypes = {
  inputId: PropTypes.string.isRequired,
  labelBy: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  propKey: PropTypes.string.isRequired,
  styleLabel: PropTypes.object,
  onGetComp: PropTypes.func.isRequired,
  fnAfterSet: PropTypes.func
}
*/


var _default = RowProp;
exports["default"] = _default;
//# sourceMappingURL=RowProp.js.map