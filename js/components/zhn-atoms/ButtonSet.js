"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _ButtonSet = _interopRequireDefault(require("./ButtonSet.Style"));

var _jsxRuntime = require("react/jsx-runtime");

var _hmModeStyle = {
  0: (0, _extends2["default"])({}, _ButtonSet["default"].BT, _ButtonSet["default"].NOT_VALID),
  1: (0, _extends2["default"])({}, _ButtonSet["default"].BT, _ButtonSet["default"].VALID_CHANGED),
  2: (0, _extends2["default"])({}, _ButtonSet["default"].BT, _ButtonSet["default"].VALID_NOT_CHANGED)
};

var ButtonSet = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ButtonSet, _Component);

  /*
  static propTypes = {
    mode: PropTypes.number,
    onClick: PropTypes.func
  }
  */
  function ButtonSet(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.setMode = function (mode) {
      _this.setState({
        mode: mode
      });
    };

    _this.state = {
      mode: props.mode
    };
    return _this;
  }

  var _proto = ButtonSet.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        onClick = _this$props.onClick,
        mode = this.state.mode,
        _style = _hmModeStyle[mode],
        _onClick = mode === 1 ? onClick : void 0;

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      className: "bt",
      style: (0, _extends2["default"])({}, style, _style),
      onClick: _onClick,
      children: "Set"
    });
  };

  return ButtonSet;
}(_react.Component);

ButtonSet.defaultProps = {
  mode: 2,
  onClick: function onClick() {}
};
var _default = ButtonSet;
exports["default"] = _default;
//# sourceMappingURL=ButtonSet.js.map