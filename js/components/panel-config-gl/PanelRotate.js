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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OpenClose = require('../zhn-atoms/OpenClose');

var _OpenClose2 = _interopRequireDefault(_OpenClose);

var _RowProp = require('./RowProp');

var _RowProp2 = _interopRequireDefault(_RowProp);

var _Panel = require('./Panel.Style');

var _Panel2 = _interopRequireDefault(_Panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PanelRotate = function (_Component) {
  (0, _inherits3.default)(PanelRotate, _Component);

  function PanelRotate(props) {
    (0, _classCallCheck3.default)(this, PanelRotate);
    return (0, _possibleConstructorReturn3.default)(this, (PanelRotate.__proto__ || Object.getPrototypeOf(PanelRotate)).call(this, props));
  }

  (0, _createClass3.default)(PanelRotate, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          rX = _props.rX,
          rY = _props.rY,
          rZ = _props.rZ,
          onGetComp = _props.onGetComp;

      return _react2.default.createElement(
        _OpenClose2.default,
        {
          isClose: true,
          caption: 'Rotate',
          style: _Panel2.default.OPEN_CLOSE
        },
        _react2.default.createElement(_RowProp2.default, {
          labelBy: 'X:',
          inputId: 'rX',
          value: rX,
          propKey: 'rX',
          onGetComp: onGetComp
        }),
        _react2.default.createElement(_RowProp2.default, {
          labelBy: 'Y:',
          inputId: 'rY',
          value: rY,
          propKey: 'rY',
          onGetComp: onGetComp
        }),
        _react2.default.createElement(_RowProp2.default, {
          labelBy: 'Z:',
          inputId: 'rZ',
          value: rZ,
          propKey: 'rZ',
          onGetComp: onGetComp
        })
      );
    }
  }]);
  return PanelRotate;
}(_react.Component);

process.env.NODE_ENV !== "production" ? PanelRotate.propTypes = {
  rX: _react.PropTypes.number.isRequired,
  rY: _react.PropTypes.number.isRequired,
  rZ: _react.PropTypes.number.isRequired,
  onGetComp: _react.PropTypes.func.isRequired
} : void 0;
exports.default = PanelRotate;
//# sourceMappingURL=PanelRotate.js.map