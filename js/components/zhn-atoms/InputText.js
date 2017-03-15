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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  INPUT_TEXT: {
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
  }
};

var InputText = function (_Component) {
  (0, _inherits3.default)(InputText, _Component);

  function InputText(props) {
    (0, _classCallCheck3.default)(this, InputText);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InputText.__proto__ || Object.getPrototypeOf(InputText)).call(this));

    _this.state = {
      value: props.initValue
      //value : ''
    };

    _this._handleInputChange = _this._handleInputChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(InputText, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps !== this.props) {
        this.setState({ value: nextProps.initValue });
      }
    }
  }, {
    key: '_handleInputChange',
    value: function _handleInputChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var style = this.props.style,
          value = this.state.value;

      return _react2.default.createElement('input', {
        type: 'text',
        style: Object.assign({}, STYLE.INPUT_TEXT, style),
        value: value,
        onChange: this._handleInputChange
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.setState({ value: value });
    }
  }]);
  return InputText;
}(_react.Component);

InputText.defaultProps = {
  initValue: ''
};
process.env.NODE_ENV !== "production" ? InputText.propTypes = {
  initValue: _react.PropTypes.string,
  style: _react.PropTypes.object
} : void 0;

exports.default = InputText;
//# sourceMappingURL=InputText.js.map