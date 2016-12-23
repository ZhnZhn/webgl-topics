'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _big = require('big.js');

var _big2 = _interopRequireDefault(_big);

var _InputFloat = require('./InputFloat.Style');

var _InputFloat2 = _interopRequireDefault(_InputFloat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _hmModeStyle = {
  0: _InputFloat2.default.NOT_VALID,
  1: _InputFloat2.default.VALID_CHANGED,
  2: _InputFloat2.default.VALID_NOT_CHANGED
};

var InputFloat = (_temp = _class = function (_Component) {
  _inherits(InputFloat, _Component);

  function InputFloat(props) {
    _classCallCheck(this, InputFloat);

    var _this = _possibleConstructorReturn(this, (InputFloat.__proto__ || Object.getPrototypeOf(InputFloat)).call(this, props));

    _initialiseProps.call(_this);

    var value = props.value,
        step = props.step,
        onChangeMode = props.onChangeMode,
        onKeyDownEnter = props.onKeyDownEnter;

    if (typeof onChangeMode === "function") {
      _this.isOnChangeModeFn = true;
    }
    if (typeof onKeyDownEnter === "function") {
      _this.isOnKeyDownEnterFn = true;
    }
    _this.state = {
      mode: _this._onTest(value) ? 2 : 0,
      value: value,
      initedValue: value,
      step: step
    };
    return _this;
  }

  _createClass(InputFloat, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps !== this.props) {
        var value = nextProps.value,
            step = nextProps.step,
            onChangeMode = nextProps.onChangeMode,
            onKeyDownEnter = nextProps.onKeyDownEnter;

        if (typeof onChangeMode === "function") {
          this.isOnChangeModeFn = true;
        }
        if (typeof onKeyDownEnter === "function") {
          this.isOnKeyDownEnterFn = true;
        }
        this.setState({
          mode: this._onTest(value) ? 2 : 0,
          value: value,
          initedValue: value,
          step: step
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var inputStyle = this.props.inputStyle,
          _state = this.state,
          value = _state.value,
          mode = _state.mode,
          _hrStyle = _hmModeStyle[mode];


      return _react2.default.createElement(
        'div',
        { style: _InputFloat2.default.ROOT },
        _react2.default.createElement('input', {
          type: 'text',
          style: Object.assign({}, _InputFloat2.default.INPUT, inputStyle),
          value: value,
          onChange: this._handleInputChange,
          onKeyDown: this._handleInputKeyDown
        }),
        _react2.default.createElement('hr', { style: Object.assign({}, _InputFloat2.default.HR, _hrStyle) })
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

    /*
    setValue(value){
      this.setState({ value })
    }
    */

  }]);

  return InputFloat;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this._calcMode = function (value) {
    if (!_this2._onTest(value)) {
      return 0;
    }
    if (_this2._isChanged(value)) {
      return 1;
    }
    return 2;
  };

  this._onTest = function (str) {
    var trimmed = ("" + str).trim(),
        result = parseFloat(trimmed);
    if (isNaN(result)) {
      return false;
    }
    if (("" + result).length !== trimmed.length) {
      return false;
    }

    return true;
  };

  this._isChanged = function (value) {
    return _this2.state.initedValue !== parseFloat(value);
  };

  this._handleInputChange = function (event) {
    var strValue = event.target.value;
    _this2._updateValue(strValue);
  };

  this._handleInputKeyDown = function (event) {
    switch (event.keyCode) {
      // enter
      case 13:
        {
          if (_this2.isOnKeyDownEnterFn) {
            _this2.props.onKeyDownEnter();
          }
          break;
        }
      // esc
      case 27:
        {
          var _state2 = _this2.state,
              value = _state2.value,
              initedValue = _state2.initedValue;

          if (value !== initedValue || "" + initedValue === "0") {
            _this2._callOnChangeMode(2);
            _this2.setState({ mode: 2, value: initedValue });
          } else {
            _this2._callOnChangeMode(1);
            _this2.setState({ mode: 1, value: 0 });
          }
          break;
        }
      //up
      case 38:
        {
          event.preventDefault();

          var _state3 = _this2.state,
              _value = _state3.value,
              step = _state3.step,
              valueNext = new _big2.default(_value).plus(step).toString(),
              nextMode = _this2._calcMode(valueNext);

          _this2._callOnChangeMode(nextMode);
          _this2.setState({
            mode: nextMode,
            value: valueNext
          });
          break;
        }
      //down
      case 40:
        {
          event.preventDefault();

          var _state4 = _this2.state,
              _value2 = _state4.value,
              _step = _state4.step,
              _valueNext = new _big2.default(_value2).minus(_step).toString(),
              _nextMode = _this2._calcMode(_valueNext);

          _this2._callOnChangeMode(_nextMode);
          _this2.setState({
            mode: _nextMode,
            value: _valueNext
          });
          break;
        }
      default:
        return undefined;
    }
  };

  this._callOnChangeMode = function (nextMode) {
    var mode = _this2.state.mode;

    if (_this2.isOnChangeModeFn && mode !== nextMode) {
      var _props = _this2.props,
          inputKey = _props.inputKey,
          onChangeMode = _props.onChangeMode;

      onChangeMode(inputKey, nextMode);
    }
  };

  this._updateValue = function (strValue) {
    var nextMode = _this2._calcMode(strValue);
    _this2._callOnChangeMode(nextMode);
    _this2.setState({
      mode: nextMode,
      value: strValue
    });
  };
}, _temp);


InputFloat.defaultProps = {
  value: '',
  step: 0.1
};

InputFloat.propTypes = {
  inputKey: _react.PropTypes.string.isRequired,
  inputStyle: _react.PropTypes.object,
  value: _react.PropTypes.string,
  step: _react.PropTypes.number,
  onChangeMode: _react.PropTypes.func,
  onKeyDownEnter: _react.PropTypes.func
};

exports.default = InputFloat;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\zhn-atoms\InputFloat.js.map