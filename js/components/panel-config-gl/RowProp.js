'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RowProp = (0, _setModeToAll2.default)(_class = (0, _onChangeMode2.default)(_class = (0, _calcInputMode2.default)(_class = function (_Component) {
  _inherits(RowProp, _Component);

  function RowProp(props) {
    _classCallCheck(this, RowProp);

    var _this = _possibleConstructorReturn(this, (RowProp.__proto__ || Object.getPrototypeOf(RowProp)).call(this, props));

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

  _createClass(RowProp, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          labelBy = _props.labelBy,
          value = _props.value,
          styleLabel = _props.styleLabel;

      return _react2.default.createElement(
        'div',
        { style: _Row2.default.ROW },
        _react2.default.createElement(_Label2.default, {
          style: Object.assign({}, _Row2.default.LABEL_ROW, styleLabel),
          title: labelBy
        }),
        _react2.default.createElement(_InputFloat2.default, {
          ref: function ref(comp) {
            return _this2.inputFloat = comp;
          },
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

RowProp.propTypes = {
  labelBy: _react.PropTypes.string.isRequired,
  value: _react.PropTypes.number.isRequired,
  propKey: _react.PropTypes.string.isRequired,
  styleLabel: _react.PropTypes.object,
  onGetComp: _react.PropTypes.func.isRequired,
  fnAfterSet: _react.PropTypes.func
};

exports.default = RowProp;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\panel-config-gl\RowProp.js.map