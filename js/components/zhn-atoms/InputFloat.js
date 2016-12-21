'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STYLE = {
  ROOT: {
    position: 'relative',
    display: 'inline-block',
    backgroundColor: 'rgb(225, 225, 203)',
    marginLeft: '5px',
    marginRight: '5px'
  },
  INPUT: {
    background: 'transparent none repeat scroll 0 0',
    border: 'medium none',
    outline: 'medium none',
    height: '26px',
    paddingLeft: '5px',
    color: 'green',
    width: '40px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#E1E1CB',
    marginLeft: '5px',
    marginRight: '5px',
    display: 'inline'
  },
  HR: {
    borderWidth: 'medium medium 1px',
    borderStyle: 'none none solid',
    borderColor: 'red',
    borderImage: 'none',
    margin: 0,
    marginLeft: '10px',
    marginBottom: '5px',
    width: '75%'
  }
};

var InputFloat = function (_Component) {
  _inherits(InputFloat, _Component);

  function InputFloat(props) {
    _classCallCheck(this, InputFloat);

    var _this = _possibleConstructorReturn(this, (InputFloat.__proto__ || Object.getPrototypeOf(InputFloat)).call(this, props));

    _this._onTest = function (str) {
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

    _this._handleInputChange = function (event) {
      var strValue = event.target.value;
      _this.setState({
        isValid: _this._onTest(strValue),
        value: strValue
      });
    };

    var value = props.value;

    _this.state = {
      isValid: _this._onTest(value),
      value: value
    };
    return _this;
  }

  _createClass(InputFloat, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps !== this.props) {
        this.setState({
          isValid: this._onTest(nextProps.value),
          value: nextProps.value
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var inputStyle = this.props.inputStyle,
          _state = this.state,
          value = _state.value,
          isValid = _state.isValid,
          _hrStyle = isValid ? { borderColor: '#1B75BB' } : { borderColor: '#F44336' };

      return _react2.default.createElement(
        'div',
        { style: STYLE.ROOT },
        _react2.default.createElement('input', {
          type: 'text',
          style: Object.assign({}, STYLE.INPUT, inputStyle),
          value: value,
          onChange: this._handleInputChange
        }),
        _react2.default.createElement('hr', { style: Object.assign({}, STYLE.HR, _hrStyle) })
      );
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return parseFloat(this.state.value);
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.setState({ value: value });
    }
  }]);

  return InputFloat;
}(_react.Component);

InputFloat.defaultProps = {
  value: ''
};
InputFloat.propTypes = {
  value: _react.PropTypes.string,
  inputStyle: _react.PropTypes.object
};

exports.default = InputFloat;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\zhn-atoms\InputFloat.js.map