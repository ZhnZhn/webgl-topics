"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _Comp = _interopRequireDefault(require("../Comp"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_ROW = {
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
  FN_NOOP = () => {};
const _getInputMode = inputMode => inputMode === 0 ? 0 : inputMode === 1 ? 1 : 2;
const INPUT_KEY = 'inputFloat';
const RowProp = _ref => {
  let {
    inputId,
    labelBy,
    value,
    propKey,
    styleLabel,
    onGetComp,
    fnAfterSet = FN_NOOP
  } = _ref;
  const _refInputFloat = (0, _uiApi.useRef)(),
    _refBt = (0, _uiApi.useRef)(),
    _refMode = (0, _uiApi.useRef)({
      [INPUT_KEY]: 2,
      bt: 2
    }),
    _onChangeMode = (0, _uiApi.useCallback)((inputKey, nextMode) => {
      const mode = (0, _uiApi.getRefValue)(_refMode);
      mode[INPUT_KEY] = nextMode;
      const _nextBtMode = _getInputMode(nextMode);
      if (mode.bt !== _nextBtMode) {
        mode.bt = _nextBtMode;
        (0, _uiApi.getRefValue)(_refBt).setMode(_nextBtMode);
      }
    }, []),
    _setModeToAll = (0, _uiApi.useCallback)(value => {
      const mode = (0, _uiApi.getRefValue)(_refMode);
      mode[INPUT_KEY] = value;
      mode.bt = value;
      (0, _uiApi.getRefValue)(_refInputFloat).setMode(value);
      (0, _uiApi.getRefValue)(_refBt).setMode(value);
    }, []),
    _hSetValue = (0, _uiApi.useCallback)(() => {
      const comp = onGetComp();
      comp[propKey] = (0, _uiApi.getRefValue)(_refInputFloat).getValue();
      fnAfterSet(comp);
      _setModeToAll(2);
    }, [propKey, onGetComp, fnAfterSet, _setModeToAll]);
  return (0, _jsxRuntime.jsxs)("div", {
    style: S_ROW,
    children: [(0, _jsxRuntime.jsx)(_Comp.default.Label, {
      id: inputId,
      style: {
        ...S_LABEL,
        ...styleLabel
      },
      title: labelBy
    }), (0, _jsxRuntime.jsx)(_Comp.default.InputFloat, {
      refEl: _refInputFloat,
      id: inputId,
      inputKey: INPUT_KEY,
      inputStyle: S_INPUT_FLOAT,
      initialValue: value,
      step: 0.001,
      onChangeMode: _onChangeMode,
      onKeyDownEnter: _hSetValue
    }), (0, _jsxRuntime.jsx)(_Comp.default.ButtonSet, {
      refEl: _refBt,
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
var _default = exports.default = RowProp;
//# sourceMappingURL=RowProp.js.map