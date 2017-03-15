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

var RowProp = (0, _setModeToAll2.default)(_class = (0, _onChangeMode2.default)(_class = (0, _calcInputMode2.default)(_class = function (_Component) {
  (0, _inherits3.default)(RowProp, _Component);

  function RowProp(props) {
    (0, _classCallCheck3.default)(this, RowProp);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RowProp.__proto__ || Object.getPrototypeOf(RowProp)).call(this, props));

    _this._handleSetValue = function () {
      var _this$props = _this.props,
          onGetComp = _this$props.onGetComp,
          propKey = _this$props.propKey,
          fnAfterSet = _this$props.fnAfterSet,
          comp = onGetComp();

      comp[propKey] = _this.inputFloat.getValue();

      if (typeof fnAfterSet === 'function') {
        fnAfterSet(comp);
      }
      _this._setModeToAll(2);
    };

    _this.mode = {
      inputFloat: 2,
      bt: 2
    };
    return _this;
  }

  (0, _createClass3.default)(RowProp, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          labelBy = _props.labelBy,
          inputId = _props.inputId,
          value = _props.value,
          styleLabel = _props.styleLabel;

      return _react2.default.createElement(
        'div',
        { style: _Row2.default.ROW },
        _react2.default.createElement(_Label2.default, {
          style: Object.assign({}, _Row2.default.LABEL_ROW, styleLabel),
          title: labelBy,
          id: inputId
        }),
        _react2.default.createElement(_InputFloat2.default, {
          ref: function ref(comp) {
            return _this2.inputFloat = comp;
          },
          id: inputId,
          inputKey: 'inputFloat',
          inputStyle: _Row2.default.INPUT_FLOAT_3,
          value: value,
          step: 0.001,
          onChangeMode: this._onChangeMode.bind(this),
          onKeyDownEnter: this._handleSetValue
        }),
        _react2.default.createElement(_ButtonSet2.default, {
          ref: function ref(bt) {
            return _this2.bt = bt;
          },
          onClick: this._handleSetValue
        })
      );
    }
  }]);
  return RowProp;
}(_react.Component)) || _class) || _class) || _class;

process.env.NODE_ENV !== "production" ? RowProp.propTypes = {
  labelBy: _react.PropTypes.string.isRequired,
  value: _react.PropTypes.number.isRequired,
  propKey: _react.PropTypes.string.isRequired,
  styleLabel: _react.PropTypes.object,
  onGetComp: _react.PropTypes.func.isRequired,
  fnAfterSet: _react.PropTypes.func
} : void 0;
exports.default = RowProp;
//# sourceMappingURL=RowProp.js.map