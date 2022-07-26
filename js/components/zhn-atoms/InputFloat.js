"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _big = _interopRequireDefault(require("big.js"));

var _uiApi = require("../uiApi");

var _is = require("../../utils/is");

var _jsxRuntime = require("react/jsx-runtime");

var S_ROOT = {
  position: 'relative',
  display: 'inline-block',
  backgroundColor: 'rgb(225, 225, 203)',
  margin: '0 5px',
  boxShadow: '0 2px 2px 0 rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)'
},
    S_DIV_INPUT = {
  display: 'inline-block'
},
    S_INPUT = {
  display: 'inline',
  color: 'green',
  width: 40,
  height: 26,
  marginRight: 5,
  fontSize: '16px',
  fontWeight: 'bold',
  backgroundColor: '#e1e1cb',
  background: 'transparent none repeat scroll 0 0',
  border: 'medium none',
  outline: 'medium none'
},
    S_HR = {
  width: '100%',
  margin: '0 0 5px 0',
  borderWidth: 'medium medium 2px',
  borderStyle: 'none none solid',
  borderColor: 'red',
  borderImage: 'none'
},
    S_VALID_CHANGED = {
  borderColor: '#673ab7'
},
    S_VALID_NOT_CHANGED = {
  borderColor: '#9e9e9e'
},
    S_NOT_VALID = {
  borderColor: '#f44336'
},
    S_ARROW = {
  display: 'inline-block',
  position: 'relative',
  borderColor: 'rgb(103, 58, 183) transparent transparent',
  borderStyle: 'solid',
  borderWidth: '12px 6px 4px',
  cursor: 'pointer'
},
    S_BT_PLUS = (0, _extends2["default"])({}, S_ARROW, {
  transform: 'rotateX(180deg)',
  margin: '0 6px',
  top: -16
}),
    S_BT_MINUS = (0, _extends2["default"])({}, S_ARROW, {
  top: -12,
  marginRight: 6
});

var FN_NOOP = function FN_NOOP() {};

var _hmModeStyle = {
  0: S_NOT_VALID,
  1: S_VALID_CHANGED,
  2: S_VALID_NOT_CHANGED
};

var _calcMode = function _calcMode(initialValue, value) {
  return !(0, _is.isFloat)(value) ? 0 // isChanged
  : initialValue !== parseFloat(value) ? 1 : 2;
};

var _crInitialState = function _crInitialState(_ref) {
  var _ref$initialValue = _ref.initialValue,
      initialValue = _ref$initialValue === void 0 ? '0' : _ref$initialValue;
  return {
    mode: (0, _is.isFloat)(initialValue) ? 2 : 0,
    value: initialValue,
    initedValue: initialValue
  };
};

var _crNextState = function _crNextState(prevState, nextMode, nextValue) {
  prevState.mode = nextMode;
  prevState.value = nextValue;
  return (0, _extends2["default"])({}, prevState);
};

var DF_INPUT_KEY = 'dfKey',
    DF_STEP = 0.1;
var InputFloat = (0, _uiApi.forwardRef)(function (props, ref) {
  var id = props.id,
      inputStyle = props.inputStyle,
      initialValue = props.initialValue,
      _props$inputKey = props.inputKey,
      inputKey = _props$inputKey === void 0 ? DF_INPUT_KEY : _props$inputKey,
      _props$step = props.step,
      step = _props$step === void 0 ? DF_STEP : _props$step,
      _props$onChangeMode = props.onChangeMode,
      onChangeMode = _props$onChangeMode === void 0 ? FN_NOOP : _props$onChangeMode,
      _props$onKeyDownEnter = props.onKeyDownEnter,
      onKeyDownEnter = _props$onKeyDownEnter === void 0 ? FN_NOOP : _props$onKeyDownEnter,
      _refInput = (0, _uiApi.useRef)(),
      _useState = (0, _uiApi.useState)(function () {
    return _crInitialState(props);
  }),
      state = _useState[0],
      setState = _useState[1],
      mode = state.mode,
      value = state.value,
      initedValue = state.initedValue,
      _callOnChangeMode = function _callOnChangeMode(nextMode) {
    if (mode !== nextMode) {
      onChangeMode(inputKey, nextMode);
    }
  },
      _increaseOnStep = function _increaseOnStep() {
    var nextValue = new _big["default"](value).plus(step).toString(),
        nextMode = _calcMode(initedValue, nextValue);

    _callOnChangeMode(nextMode);

    setState(function (prevState) {
      return _crNextState(prevState, nextMode, nextValue);
    });
  },
      _decreaseOnStep = function _decreaseOnStep() {
    var nextValue = new _big["default"](value).minus(step).toString(),
        nextMode = _calcMode(initedValue, nextValue);

    _callOnChangeMode(nextMode);

    setState(function (prevState) {
      return _crNextState(prevState, nextMode, nextValue);
    });
  },
      _hInputChange = function _hInputChange(event) {
    var strValue = event.target.value,
        nextMode = _calcMode(initedValue, strValue);

    _callOnChangeMode(nextMode);

    setState(function (prevState) {
      return _crNextState(prevState, nextMode, strValue);
    });
  },
      _hInputKeyDown = function _hInputKeyDown(event) {
    switch (event.keyCode) {
      // enter
      case 13:
        {
          onKeyDownEnter();
          break;
        }
      // esc

      // esc
      case 27:
        {
          var _nextMode = value !== initedValue || "" + initedValue === "0" ? 2 : 1;

          _callOnChangeMode(_nextMode);

          setState(function (prevState) {
            return _crNextState(prevState, _nextMode, initedValue);
          });
          break;
        }
      //up

      //up
      case 38:
        {
          event.preventDefault();

          _increaseOnStep();

          break;
        }
      //down

      //down
      case 40:
        {
          event.preventDefault();

          _decreaseOnStep();

          break;
        }

      default:
        return;
    }
  };
  /*eslint-disable react-hooks/exhaustive-deps */


  (0, _uiApi.useEffect)(function () {
    setState(_crInitialState(props));
  }, [initialValue]); // props

  /*eslint-enable react-hooks/exhaustive-deps */

  (0, _uiApi.useImperativeHandle)(ref, function () {
    return {
      getValue: function getValue() {
        return parseFloat(value);
      },
      setMode: function setMode(mode) {
        setState(function (prevState) {
          prevState.mode = mode;

          if (mode === 2) {
            prevState.initedValue = value;
          }

          return (0, _extends2["default"])({}, prevState);
        });
      }
    };
  });
  var _hrStyle = _hmModeStyle[mode];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S_ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      style: S_BT_PLUS,
      onClick: _increaseOnStep
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: S_DIV_INPUT,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        ref: _refInput,
        id: id,
        type: "text",
        style: (0, _extends2["default"])({}, S_INPUT, inputStyle),
        value: value,
        onChange: _hInputChange,
        onKeyDown: _hInputKeyDown
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
        style: (0, _extends2["default"])({}, S_HR, _hrStyle)
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      style: S_BT_MINUS,
      onClick: _decreaseOnStep
    })]
  });
});
/*
 InputFloat.propTypes = {
   inputKey: PropTypes.string,
   inputStyle: PropTypes.object,
   value: PropTypes.oneOfType([
     PropTypes.string,
     PropTypes.number
   ]),
   step: PropTypes.number,
   onChangeMode: PropTypes.func,
   onKeyDownEnter: PropTypes.func
 }
 */

var _default = InputFloat;
exports["default"] = _default;
//# sourceMappingURL=InputFloat.js.map