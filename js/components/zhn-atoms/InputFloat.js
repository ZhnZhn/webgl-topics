'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _big = require('big.js');

var _big2 = _interopRequireDefault(_big);

var _is = require('../../utils/is');

var _InputFloat = require('./InputFloat.Style');

var _InputFloat2 = _interopRequireDefault(_InputFloat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _hmModeStyle = {
  0: _InputFloat2.default.NOT_VALID,
  1: _InputFloat2.default.VALID_CHANGED,
  2: _InputFloat2.default.VALID_NOT_CHANGED
};

var InputFloat = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(InputFloat, _Component);

  function InputFloat(props) {
    (0, _classCallCheck3.default)(this, InputFloat);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InputFloat.__proto__ || Object.getPrototypeOf(InputFloat)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = _this._getInitedState(props);
    return _this;
  }

  (0, _createClass3.default)(InputFloat, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps !== this.props) {
        this.setState(this._getInitedState(nextProps));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          inputStyle = _props.inputStyle,
          id = _props.id,
          _state = this.state,
          value = _state.value,
          mode = _state.mode,
          _hrStyle = _hmModeStyle[mode];


      return _react2.default.createElement(
        'div',
        {
          style: _InputFloat2.default.ROOT,
          onClick: this._handleClickRoot
        },
        _react2.default.createElement('span', {
          style: Object.assign({}, _InputFloat2.default.ARROW, _InputFloat2.default.ARROW_PLUS),
          onClick: this._increaseOnStep
        }),
        _react2.default.createElement(
          'div',
          { style: _InputFloat2.default.DIV_INPUT },
          _react2.default.createElement('input', {
            ref: function ref(input) {
              return _this2.input = input;
            },
            id: id,
            type: 'text',
            style: Object.assign({}, _InputFloat2.default.INPUT, inputStyle),
            value: value,
            onChange: this._handleInputChange,
            onKeyDown: this._handleInputKeyDown
          }),
          _react2.default.createElement('hr', { style: Object.assign({}, _InputFloat2.default.HR, _hrStyle) })
        ),
        _react2.default.createElement('span', {
          style: Object.assign({}, _InputFloat2.default.ARROW, _InputFloat2.default.ARROW_MINUS),
          onClick: this._decreaseOnStep
        })
      );
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return parseFloat(this.state.value);
    }
  }, {
    key: 'setMode',
    value: function setMode(mode) {
      if (mode === 2) {
        var value = this.state.value;

        this.setState({ mode: mode, initedValue: value });
      } else {
        this.setState({ mode: mode });
      }
    }
  }]);
  return InputFloat;
}(_react.Component), _class.defaultProps = {
  inputKey: 'dfKey',
  value: '0',
  step: 0.1,
  onChangeMode: function onChangeMode() {},
  onKeyDownEnter: function onKeyDownEnter() {}
}, _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this._getInitedState = function (props) {
    var value = props.value,
        step = props.step,
        onChangeMode = props.onChangeMode,
        onKeyDownEnter = props.onKeyDownEnter;


    _this3.isOnChangeModeFn = (0, _is.isFunction)(onChangeMode);
    _this3.isOnKeyDownEnterFn = (0, _is.isFunction)(onKeyDownEnter);

    return {
      mode: _this3._onTest(value) ? 2 : 0,
      value: value,
      initedValue: value,
      step: step
    };
  };

  this._calcMode = function (value) {
    if (!_this3._onTest(value)) {
      return 0;
    }
    if (_this3._isChanged(value)) {
      return 1;
    }
    return 2;
  };

  this._onTest = function (strOrNumber) {
    return (0, _is.isFloat)(strOrNumber);
  };

  this._isChanged = function (value) {
    return _this3.state.initedValue !== parseFloat(value);
  };

  this._increaseOnStep = function () {
    var _state2 = _this3.state,
        value = _state2.value,
        step = _state2.step,
        valueNext = new _big2.default(value).plus(step).toString(),
        nextMode = _this3._calcMode(valueNext);

    _this3._callOnChangeMode(nextMode);
    _this3.setState({
      mode: nextMode,
      value: valueNext
    });
  };

  this._decreaseOnStep = function () {
    var _state3 = _this3.state,
        value = _state3.value,
        step = _state3.step,
        valueNext = new _big2.default(value).minus(step).toString(),
        nextMode = _this3._calcMode(valueNext);

    _this3._callOnChangeMode(nextMode);
    _this3.setState({
      mode: nextMode,
      value: valueNext
    });
  };

  this._handleClickRoot = function () {
    _this3.input.focus();
  };

  this._handleInputChange = function (event) {
    var strValue = event.target.value;
    _this3._updateValue(strValue);
  };

  this._handleInputKeyDown = function (event) {
    switch (event.keyCode) {
      // enter
      case 13:
        {
          if (_this3.isOnKeyDownEnterFn) {
            _this3.props.onKeyDownEnter();
          }
          break;
        }
      // esc
      case 27:
        {
          var _state4 = _this3.state,
              value = _state4.value,
              initedValue = _state4.initedValue;

          if (value !== initedValue || "" + initedValue === "0") {
            _this3._callOnChangeMode(2);
            _this3.setState({ mode: 2, value: initedValue });
          } else {
            _this3._callOnChangeMode(1);
            _this3.setState({ mode: 1, value: 0 });
          }
          break;
        }
      //up
      case 38:
        {
          event.preventDefault();
          _this3._increaseOnStep();
          break;
        }
      //down
      case 40:
        {
          event.preventDefault();
          _this3._decreaseOnStep();
          break;
        }
      default:
        return undefined;
    }
  };

  this._callOnChangeMode = function (nextMode) {
    var mode = _this3.state.mode;

    if (_this3.isOnChangeModeFn && mode !== nextMode) {
      var _props2 = _this3.props,
          inputKey = _props2.inputKey,
          onChangeMode = _props2.onChangeMode;

      onChangeMode(inputKey, nextMode);
    }
  };

  this._updateValue = function (strValue) {
    var nextMode = _this3._calcMode(strValue);
    _this3._callOnChangeMode(nextMode);
    _this3.setState({
      mode: nextMode,
      value: strValue
    });
  };
}, _temp);
process.env.NODE_ENV !== "production" ? InputFloat.propTypes = {
  inputKey: _react.PropTypes.string,
  inputStyle: _react.PropTypes.object,
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  step: _react.PropTypes.number,
  onChangeMode: _react.PropTypes.func,
  onKeyDownEnter: _react.PropTypes.func
} : void 0;
exports.default = InputFloat;
//# sourceMappingURL=InputFloat.js.map