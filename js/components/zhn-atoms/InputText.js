"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

var S_INPUT_TEXT = {
  display: 'inline',
  color: 'green',
  width: 40,
  height: 26,
  paddingLeft: 5,
  margin: '0 5px',
  fontSize: '16px',
  fontWeight: 'bold',
  backgroundColor: '#e1e1cb',
  background: 'transparent none repeat scroll 0 0',
  border: 'medium none',
  outline: 'medium none'
};

var InputText = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(InputText, _Component);

  function InputText(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleInputChange = function (event) {
      _this.setState({
        value: event.target.value
      });
    };

    _this.state = {
      value: props.initValue || ''
    };
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

  _proto.render = function render() {
    var style = this.props.style,
        value = this.state.value;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      type: "text",
      style: (0, _extends2["default"])({}, S_INPUT_TEXT, style),
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


var _default = InputText;
exports["default"] = _default;
//# sourceMappingURL=InputText.js.map