"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _ButtonSet = _interopRequireDefault(require("./ButtonSet.Style"));

var _hmModeStyle = {
  0: Object.assign({}, _ButtonSet["default"].BT, _ButtonSet["default"].NOT_VALID),
  1: Object.assign({}, _ButtonSet["default"].BT, _ButtonSet["default"].VALID_CHANGED),
  2: Object.assign({}, _ButtonSet["default"].BT, _ButtonSet["default"].VALID_NOT_CHANGED)
};

var ButtonSet =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(ButtonSet, _Component);

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
    var onClick = this.props.onClick,
        mode = this.state.mode,
        _style = _hmModeStyle[mode],
        _onClick = mode === 1 ? onClick : undefined;

    return _react["default"].createElement("button", {
      className: "bt",
      style: _style,
      tabIndex: "0",
      onClick: _onClick
    }, "Set");
  };

  return ButtonSet;
}(_react.Component);

ButtonSet.propTypes = {
  mode: _react.PropTypes.number,
  onClick: _react.PropTypes.func
};
ButtonSet.defaultProps = {
  mode: 2,
  onClick: function onClick() {}
};
var _default = ButtonSet;
exports["default"] = _default;
//# sourceMappingURL=ButtonSet.js.map