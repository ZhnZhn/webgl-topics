'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputFloat = require('../zhn-atoms/InputFloat');

var _InputFloat2 = _interopRequireDefault(_InputFloat);

var _ButtonSet = require('../zhn-atoms/ButtonSet');

var _ButtonSet2 = _interopRequireDefault(_ButtonSet);

var _Row = require('./Row.Style');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RowRotate = function (_Component) {
  _inherits(RowRotate, _Component);

  function RowRotate(props) {
    _classCallCheck(this, RowRotate);

    var _this = _possibleConstructorReturn(this, (RowRotate.__proto__ || Object.getPrototypeOf(RowRotate)).call(this, props));

    _this._handleSetRotation = function () {
      var comp = _this.props.onGetComp();
      comp.rX = _this.rotateX.getValue();
      comp.rY = _this.rotateY.getValue();
      comp.rZ = _this.rotateZ.getValue();
    };

    return _this;
  }

  _createClass(RowRotate, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          rX = _props.rX,
          rY = _props.rY,
          rZ = _props.rZ;

      return _react2.default.createElement(
        'div',
        { style: _Row2.default.ROW },
        _react2.default.createElement(
          'span',
          { style: _Row2.default.CAPTION },
          'rotate:'
        ),
        _react2.default.createElement(
          'span',
          { style: _Row2.default.LABEL },
          'X:'
        ),
        _react2.default.createElement(_InputFloat2.default, {
          ref: function ref(comp) {
            return _this2.rotateX = comp;
          },
          value: rX,
          inputStyle: _Row2.default.INPUT_FLOAT_3
        }),
        _react2.default.createElement(
          'span',
          { style: _Row2.default.LABEL },
          'Y:'
        ),
        _react2.default.createElement(_InputFloat2.default, {
          ref: function ref(comp) {
            return _this2.rotateY = comp;
          },
          value: rY,
          inputStyle: _Row2.default.INPUT_FLOAT_3
        }),
        _react2.default.createElement(
          'span',
          { style: _Row2.default.LABEL },
          'Z:'
        ),
        _react2.default.createElement(_InputFloat2.default, {
          ref: function ref(comp) {
            return _this2.rotateZ = comp;
          },
          value: rZ,
          inputStyle: _Row2.default.INPUT_FLOAT_3
        }),
        _react2.default.createElement(_ButtonSet2.default, { onClick: this._handleSetRotation })
      );
    }
  }]);

  return RowRotate;
}(_react.Component);

RowRotate.propTypes = {
  rX: _react.PropTypes.number.isRequired,
  rY: _react.PropTypes.number.isRequired,
  rZ: _react.PropTypes.number.isRequired,
  onGetComp: _react.PropTypes.func.isRequired
};

exports.default = RowRotate;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\panel-config-gl\RowRotate.js.map