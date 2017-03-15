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

var RowTranslate = (0, _setModeToAll2.default)(_class = (0, _onChangeMode2.default)(_class = (0, _calcInputMode2.default)(_class = function (_Component) {
  (0, _inherits3.default)(RowTranslate, _Component);

  function RowTranslate(props) {
    (0, _classCallCheck3.default)(this, RowTranslate);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RowTranslate.__proto__ || Object.getPrototypeOf(RowTranslate)).call(this));

    _this._handleSetTranslate = function () {
      var comp = _this.props.onGetComp();
      comp.zMatrixTranslate = _this.translateZ.getValue();
      comp.configMatrix(comp);

      _this._setModeToAll(2);
    };

    _this.mode = {
      translateZ: 2,
      bt: 2
    };
    return _this;
  }

  (0, _createClass3.default)(RowTranslate, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var zMatrixTranslate = this.props.zMatrixTranslate;


      return _react2.default.createElement(
        'div',
        { style: _Row2.default.ROW },
        _react2.default.createElement(_Label2.default, {
          style: _Row2.default.CAPTION,
          title: 'translate:'
        }),
        _react2.default.createElement(_Label2.default, {
          style: _Row2.default.LABEL,
          title: 'Z:'
        }),
        _react2.default.createElement(_InputFloat2.default, {
          ref: function ref(comp) {
            return _this2.translateZ = comp;
          },
          inputKey: 'translateZ',
          inputStyle: _Row2.default.INPUT_FLOAT_2,
          value: zMatrixTranslate,
          onChangeMode: this._onChangeMode.bind(this),
          onKeyDownEnter: this._handleSetTranslate
        }),
        _react2.default.createElement(_ButtonSet2.default, {
          ref: function ref(bt) {
            return _this2.bt = bt;
          },
          onClick: this._handleSetTranslate
        })
      );
    }
  }]);
  return RowTranslate;
}(_react.Component)) || _class) || _class) || _class;

process.env.NODE_ENV !== "production" ? RowTranslate.propTypes = {
  zMatrixTranslate: _react.PropTypes.number.isRequired,
  onGetComp: _react.PropTypes.func.isRequired
} : void 0;
exports.default = RowTranslate;
//# sourceMappingURL=RowTranslate.js.map