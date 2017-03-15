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

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _setModeToAll = require('./decorators/setModeToAll');

var _setModeToAll2 = _interopRequireDefault(_setModeToAll);

var _onChangeMode = require('./decorators/onChangeMode');

var _onChangeMode2 = _interopRequireDefault(_onChangeMode);

var _calcInputMode = require('./decorators/calcInputMode');

var _calcInputMode2 = _interopRequireDefault(_calcInputMode);

var _Label = require('../zhn-atoms/Label');

var _Label2 = _interopRequireDefault(_Label);

var _InputFloat = require('../zhn-atoms/InputFloat');

var _InputFloat2 = _interopRequireDefault(_InputFloat);

var _ButtonSet = require('../zhn-atoms/ButtonSet');

var _ButtonSet2 = _interopRequireDefault(_ButtonSet);

var _Row = require('./Row.Style');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RowRotateAll = (0, _setModeToAll2.default)(_class = (0, _onChangeMode2.default)(_class = (0, _calcInputMode2.default)(_class = function (_Component) {
  (0, _inherits3.default)(RowRotateAll, _Component);

  function RowRotateAll(props) {
    (0, _classCallCheck3.default)(this, RowRotateAll);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RowRotateAll.__proto__ || Object.getPrototypeOf(RowRotateAll)).call(this));

    _this._handleSetRotation = function () {
      var comp = _this.props.onGetComp();
      comp.rX = _this.rotateX.getValue();
      comp.rY = _this.rotateY.getValue();
      comp.rZ = _this.rotateZ.getValue();

      _this._setModeToAll(2);
    };

    _this.mode = {
      rotateX: 2,
      rotateY: 2,
      rotateZ: 2,
      bt: 2
    };
    return _this;
  }

  (0, _createClass3.default)(RowRotateAll, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          rX = _props.rX,
          rY = _props.rY,
          rZ = _props.rZ,
          onChangeMode = this._onChangeMode.bind(this);

      return _react2.default.createElement(
        'div',
        { style: _Row2.default.ROW },
        _react2.default.createElement(_Label2.default, {
          style: _Row2.default.CAPTION,
          title: 'rotate:'
        }),
        _react2.default.createElement(_Label2.default, {
          style: _Row2.default.LABEL,
          title: 'X:'
        }),
        _react2.default.createElement(_InputFloat2.default, {
          ref: function ref(comp) {
            return _this2.rotateX = comp;
          },
          inputKey: 'rotateX',
          inputStyle: _Row2.default.INPUT_FLOAT_3,
          value: rX,
          step: 0.001,
          onChangeMode: onChangeMode,
          onKeyDownEnter: this._handleSetRotation
        }),
        _react2.default.createElement(_Label2.default, {
          style: _Row2.default.LABEL,
          title: 'Y:'
        }),
        _react2.default.createElement(_InputFloat2.default, {
          ref: function ref(comp) {
            return _this2.rotateY = comp;
          },
          inputKey: 'rotateY',
          inputStyle: _Row2.default.INPUT_FLOAT_3,
          value: rY,
          step: 0.001,
          onChangeMode: onChangeMode,
          onKeyDownEnter: this._handleSetRotation
        }),
        _react2.default.createElement(_Label2.default, {
          style: _Row2.default.LABEL,
          title: 'Z:'
        }),
        _react2.default.createElement(_InputFloat2.default, {
          ref: function ref(comp) {
            return _this2.rotateZ = comp;
          },
          inputKey: 'rotateZ',
          inputStyle: _Row2.default.INPUT_FLOAT_3,
          value: rZ,
          step: 0.001,
          onChangeMode: onChangeMode,
          onKeyDownEnter: this._handleSetRotation
        }),
        _react2.default.createElement(_ButtonSet2.default, {
          ref: function ref(bt) {
            return _this2.bt = bt;
          },
          onClick: this._handleSetRotation
        })
      );
    }
  }]);
  return RowRotateAll;
}(_react.Component)) || _class) || _class) || _class;

process.env.NODE_ENV !== "production" ? RowRotateAll.propTypes = {
  rX: _react.PropTypes.number.isRequired,
  rY: _react.PropTypes.number.isRequired,
  rZ: _react.PropTypes.number.isRequired,
  onGetComp: _react.PropTypes.func.isRequired
} : void 0;
exports.default = RowRotateAll;
//# sourceMappingURL=RowRotateAll.js.map