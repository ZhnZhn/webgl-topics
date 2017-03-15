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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonSet = require('./ButtonSet.Style');

var _ButtonSet2 = _interopRequireDefault(_ButtonSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _hmModeStyle = {
  0: Object.assign({}, _ButtonSet2.default.BT, _ButtonSet2.default.NOT_VALID),
  1: Object.assign({}, _ButtonSet2.default.BT, _ButtonSet2.default.VALID_CHANGED),
  2: Object.assign({}, _ButtonSet2.default.BT, _ButtonSet2.default.VALID_NOT_CHANGED)
};

var ButtonSet = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ButtonSet, _Component);

  function ButtonSet(props) {
    (0, _classCallCheck3.default)(this, ButtonSet);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ButtonSet.__proto__ || Object.getPrototypeOf(ButtonSet)).call(this, props));

    _this.setMode = function (mode) {
      _this.setState({ mode: mode });
    };

    _this.state = {
      mode: props.mode
    };
    return _this;
  }

  (0, _createClass3.default)(ButtonSet, [{
    key: 'render',
    value: function render() {
      var onClick = this.props.onClick,
          mode = this.state.mode,
          _style = _hmModeStyle[mode],
          _onClick = mode === 1 ? onClick : undefined;

      return _react2.default.createElement(
        'button',
        {
          className: 'bt',
          style: _style,
          tabIndex: '0',
          onClick: _onClick
        },
        'Set'
      );
    }
  }]);
  return ButtonSet;
}(_react.Component), _class.defaultProps = {
  mode: 2,
  onClick: function onClick() {}
}, _temp);
process.env.NODE_ENV !== "production" ? ButtonSet.propTypes = {
  mode: _react.PropTypes.number,
  onClick: _react.PropTypes.func
} : void 0;
exports.default = ButtonSet;
//# sourceMappingURL=ButtonSet.js.map