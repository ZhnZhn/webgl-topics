"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

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

var InputText = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(InputText, _Component);

  function InputText(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      value: props.initValue //value : ''

    };
    _this._handleInputChange = _this._handleInputChange.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  var _proto = InputText.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        value: nextProps.initValue
      });
    }
  };

  _proto._handleInputChange = function _handleInputChange(event) {
    this.setState({
      value: event.target.value
    });
  };

  _proto.render = function render() {
    var style = this.props.style,
        value = this.state.value;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      type: "text",
      style: Object.assign({}, STYLE.INPUT_TEXT, style),
      value: value,
      onChange: this._handleInputChange
    });
  };

  _proto.getValue = function getValue() {
    return this.state.value;
  };

  _proto.setValue = function setValue(value) {
    this.setState({
      value: value
    });
  };

  return InputText;
}(_react.Component);
/*
InputText.propTypes = {
  initValue : PropTypes.string,
  style : PropTypes.object
}
*/


InputText.defaultProps = {
  initValue: ''
};
var _default = InputText;
exports["default"] = _default;
//# sourceMappingURL=InputText.js.map