'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonSet = require('./ButtonSet.Style');

var _ButtonSet2 = _interopRequireDefault(_ButtonSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _hmModeStyle = {
  0: Object.assign({}, _ButtonSet2.default.BT, _ButtonSet2.default.NOT_VALID),
  1: Object.assign({}, _ButtonSet2.default.BT, _ButtonSet2.default.VALID_CHANGED),
  2: Object.assign({}, _ButtonSet2.default.BT, _ButtonSet2.default.VALID_NOT_CHANGED)
};

var ButtonSet = function (_Component) {
  _inherits(ButtonSet, _Component);

  function ButtonSet(props) {
    _classCallCheck(this, ButtonSet);

    var _this = _possibleConstructorReturn(this, (ButtonSet.__proto__ || Object.getPrototypeOf(ButtonSet)).call(this, props));

    _this.setMode = function (mode) {
      _this.setState({ mode: mode });
    };

    _this.state = {
      mode: props.mode
    };
    return _this;
  }

  _createClass(ButtonSet, [{
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
}(_react.Component);

ButtonSet.defaultProps = {
  mode: 2
};

ButtonSet.propTypes = {
  mode: _react.PropTypes.number,
  onClick: _react.PropTypes.func.isRequired
};

exports.default = ButtonSet;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\zhn-atoms\ButtonSet.js.map