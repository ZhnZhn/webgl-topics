"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _big = _interopRequireDefault(require("big.js"));

var _is = require("../../utils/is");

var _InputFloat = _interopRequireDefault(require("./InputFloat.Style"));

var _hmModeStyle = {
  0: _InputFloat["default"].NOT_VALID,
  1: _InputFloat["default"].VALID_CHANGED,
  2: _InputFloat["default"].VALID_NOT_CHANGED
};

var InputFloat =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(InputFloat, _Component);

  function InputFloat(_props) {
    var _this;

    _this = _Component.call(this, _props) || this;

    _this._getInitedState = function (props) {
      var value = props.value,
          step = props.step,
          onChangeMode = props.onChangeMode,
          onKeyDownEnter = props.onKeyDownEnter;
      _this.isOnChangeModeFn = (0, _is.isFunction)(onChangeMode);
      _this.isOnKeyDownEnterFn = (0, _is.isFunction)(onKeyDownEnter);
      return {
        mode: _this._onTest(value) ? 2 : 0,
        value: value,
        initedValue: value,
        step: step
      };
    };

    _this._calcMode = function (value) {
      if (!_this._onTest(value)) {
        return 0;
      }

      if (_this._isChanged(value)) {
        return 1;
      }

      return 2;
    };

    _this._onTest = function (strOrNumber) {
      return (0, _is.isFloat)(strOrNumber);
    };

    _this._isChanged = function (value) {
      return _this.state.initedValue !== parseFloat(value);
    };

    _this._increaseOnStep = function () {
      var _this$state = _this.state,
          value = _this$state.value,
          step = _this$state.step,
          valueNext = new _big["default"](value).plus(step).toString(),
          nextMode = _this._calcMode(valueNext);

      _this._callOnChangeMode(nextMode);

      _this.setState({
        mode: nextMode,
        value: valueNext
      });
    };

    _this._decreaseOnStep = function () {
      var _this$state2 = _this.state,
          value = _this$state2.value,
          step = _this$state2.step,
          valueNext = new _big["default"](value).minus(step).toString(),
          nextMode = _this._calcMode(valueNext);

      _this._callOnChangeMode(nextMode);

      _this.setState({
        mode: nextMode,
        value: valueNext
      });
    };

    _this._handleClickRoot = function () {
      _this.input.focus();
    };

    _this._handleInputChange = function (event) {
      var strValue = event.target.value;

      _this._updateValue(strValue);
    };

    _this._handleInputKeyDown = function (event) {
      switch (event.keyCode) {
        // enter
        case 13:
          {
            if (_this.isOnKeyDownEnterFn) {
              _this.props.onKeyDownEnter();
            }

            break;
          }
        // esc

        case 27:
          {
            var _this$state3 = _this.state,
                value = _this$state3.value,
                initedValue = _this$state3.initedValue;

            if (value !== initedValue || "" + initedValue === "0") {
              _this._callOnChangeMode(2);

              _this.setState({
                mode: 2,
                value: initedValue
              });
            } else {
              _this._callOnChangeMode(1);

              _this.setState({
                mode: 1,
                value: 0
              });
            }

            break;
          }
        //up

        case 38:
          {
            event.preventDefault();

            _this._increaseOnStep();

            break;
          }
        //down

        case 40:
          {
            event.preventDefault();

            _this._decreaseOnStep();

            break;
          }

        default:
          return undefined;
      }
    };

    _this._callOnChangeMode = function (nextMode) {
      var mode = _this.state.mode;

      if (_this.isOnChangeModeFn && mode !== nextMode) {
        var _this$props = _this.props,
            inputKey = _this$props.inputKey,
            onChangeMode = _this$props.onChangeMode;
        onChangeMode(inputKey, nextMode);
      }
    };

    _this._updateValue = function (strValue) {
      var nextMode = _this._calcMode(strValue);

      _this._callOnChangeMode(nextMode);

      _this.setState({
        mode: nextMode,
        value: strValue
      });
    };

    _this.state = _this._getInitedState(_props);
    return _this;
  }

  var _proto = InputFloat.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState(this._getInitedState(nextProps));
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        inputStyle = _this$props2.inputStyle,
        id = _this$props2.id,
        _this$state4 = this.state,
        value = _this$state4.value,
        mode = _this$state4.mode,
        _hrStyle = _hmModeStyle[mode];
    return _react["default"].createElement("div", {
      style: _InputFloat["default"].ROOT,
      onClick: this._handleClickRoot
    }, _react["default"].createElement("span", {
      style: Object.assign({}, _InputFloat["default"].ARROW, _InputFloat["default"].ARROW_PLUS),
      onClick: this._increaseOnStep
    }), _react["default"].createElement("div", {
      style: _InputFloat["default"].DIV_INPUT
    }, _react["default"].createElement("input", {
      ref: function ref(input) {
        return _this2.input = input;
      },
      id: id,
      type: "text",
      style: Object.assign({}, _InputFloat["default"].INPUT, inputStyle),
      value: value,
      onChange: this._handleInputChange,
      onKeyDown: this._handleInputKeyDown
    }), _react["default"].createElement("hr", {
      style: Object.assign({}, _InputFloat["default"].HR, _hrStyle)
    })), _react["default"].createElement("span", {
      style: Object.assign({}, _InputFloat["default"].ARROW, _InputFloat["default"].ARROW_MINUS),
      onClick: this._decreaseOnStep
    }));
  };

  _proto.getValue = function getValue() {
    return parseFloat(this.state.value);
  };

  _proto.setMode = function setMode(mode) {
    if (mode === 2) {
      var value = this.state.value;
      this.setState({
        mode: mode,
        initedValue: value
      });
    } else {
      this.setState({
        mode: mode
      });
    }
  };

  return InputFloat;
}(_react.Component);

InputFloat.propTypes = {
  inputKey: _react.PropTypes.string,
  inputStyle: _react.PropTypes.object,
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  step: _react.PropTypes.number,
  onChangeMode: _react.PropTypes.func,
  onKeyDownEnter: _react.PropTypes.func
};
InputFloat.defaultProps = {
  inputKey: 'dfKey',
  value: '0',
  step: 0.1,
  onChangeMode: function onChangeMode() {},
  onKeyDownEnter: function onKeyDownEnter() {}
};
var _default = InputFloat;
exports["default"] = _default;
//# sourceMappingURL=InputFloat.js.map