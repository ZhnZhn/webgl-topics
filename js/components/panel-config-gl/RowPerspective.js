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

var RowPerspective = (0, _setModeToAll2.default)(_class = (0, _onChangeMode2.default)(_class = (0, _calcInputMode2.default)(_class = function (_Component) {
  (0, _inherits3.default)(RowPerspective, _Component);

  function RowPerspective(props) {
    (0, _classCallCheck3.default)(this, RowPerspective);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RowPerspective.__proto__ || Object.getPrototypeOf(RowPerspective)).call(this));

    _this._handleSetPerspective = function () {
      var comp = _this.props.onGetComp(),
          near = _this.near,
          far = _this.far;


      comp.perspectiveNear = near.getValue();
      comp.perspectiveFar = far.getValue();
      comp.createPerspective(comp);

      _this._setModeToAll(2);
    };

    _this.mode = {
      near: 2,
      far: 2,
      bt: 2
    };
    return _this;
  }

  (0, _createClass3.default)(RowPerspective, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          perspectiveNear = _props.perspectiveNear,
          perspectiveFar = _props.perspectiveFar,
          onChangeMode = this._onChangeMode.bind(this);

      return _react2.default.createElement(
        'div',
        { style: _Row2.default.ROW },
        _react2.default.createElement(_Label2.default, {
          style: _Row2.default.CAPTION,
          title: 'perspective:'
        }),
        _react2.default.createElement(_Label2.default, {
          style: _Row2.default.LABEL,
          title: 'near:'
        }),
        _react2.default.createElement(_InputFloat2.default, {
          ref: function ref(comp) {
            return _this2.near = comp;
          },
          inputKey: 'near',
          inputStyle: _Row2.default.INPUT_FLOAT_2,
          value: perspectiveNear,
          onChangeMode: onChangeMode,
          onKeyDownEnter: this._handleSetPerspective
        }),
        _react2.default.createElement(_Label2.default, {
          style: _Row2.default.LABEL,
          title: 'far:'
        }),
        _react2.default.createElement(_InputFloat2.default, {
          ref: function ref(comp) {
            return _this2.far = comp;
          },
          inputKey: 'far',
          value: perspectiveFar,
          inputStyle: _Row2.default.INPUT_FLOAT_2,
          onChangeMode: onChangeMode,
          onKeyDownEnter: this._handleSetPerspective
        }),
        _react2.default.createElement(_ButtonSet2.default, {
          ref: function ref(bt) {
            return _this2.bt = bt;
          },
          onClick: this._handleSetPerspective
        })
      );
    }
  }]);
  return RowPerspective;
}(_react.Component)) || _class) || _class) || _class;

process.env.NODE_ENV !== "production" ? RowPerspective.propTypes = {
  perspectiveNear: _react.PropTypes.number.isRequire,
  perspectiveFar: _react.PropTypes.number.isRequired,
  onGetComp: _react.PropTypes.func.isRequired
} : void 0;
exports.default = RowPerspective;
//# sourceMappingURL=RowPerspective.js.map