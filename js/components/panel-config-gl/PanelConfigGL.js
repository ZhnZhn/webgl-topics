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

var _PanelDrawMode = require('./PanelDrawMode');

var _PanelDrawMode2 = _interopRequireDefault(_PanelDrawMode);

var _PanelPerspective = require('./PanelPerspective');

var _PanelPerspective2 = _interopRequireDefault(_PanelPerspective);

var _PanelTranslate = require('./PanelTranslate');

var _PanelTranslate2 = _interopRequireDefault(_PanelTranslate);

var _PanelRotate = require('./PanelRotate');

var _PanelRotate2 = _interopRequireDefault(_PanelRotate);

var _Panel = require('./Panel.Style');

var _Panel2 = _interopRequireDefault(_Panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PanelConfigGL = function (_Component) {
  (0, _inherits3.default)(PanelConfigGL, _Component);

  function PanelConfigGL() {
    (0, _classCallCheck3.default)(this, PanelConfigGL);
    return (0, _possibleConstructorReturn3.default)(this, (PanelConfigGL.__proto__ || Object.getPrototypeOf(PanelConfigGL)).apply(this, arguments));
  }

  (0, _createClass3.default)(PanelConfigGL, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onGetComp = _props.onGetComp,
          valuesForInit = _props.valuesForInit,
          perspectiveNear = valuesForInit.perspectiveNear,
          perspectiveFar = valuesForInit.perspectiveFar,
          zMatrixTranslate = valuesForInit.zMatrixTranslate,
          rX = valuesForInit.rX,
          rY = valuesForInit.rY,
          rZ = valuesForInit.rZ;

      return _react2.default.createElement(
        'div',
        { style: _Panel2.default.ROOT },
        _react2.default.createElement(
          'span',
          { style: _Panel2.default.ROOT_CAPTION },
          'Config WebGL Topic'
        ),
        _react2.default.createElement(_PanelDrawMode2.default, { onGetComp: onGetComp }),
        _react2.default.createElement(_PanelPerspective2.default, { perspectiveNear: perspectiveNear, perspectiveFar: perspectiveFar, onGetComp: onGetComp }),
        _react2.default.createElement(_PanelTranslate2.default, { zMatrixTranslate: zMatrixTranslate, onGetComp: onGetComp }),
        _react2.default.createElement(_PanelRotate2.default, { rX: rX, rY: rY, rZ: rZ, onGetComp: onGetComp })
      );
    }
  }]);
  return PanelConfigGL;
}(_react.Component);

process.env.NODE_ENV !== "production" ? PanelConfigGL.propTypes = {
  valuesForInit: _react.PropTypes.shape({
    perspectiveNear: _react.PropTypes.number,
    perspectiveFar: _react.PropTypes.number,
    zMatrixTranslate: _react.PropTypes.number,
    rX: _react.PropTypes.number,
    rY: _react.PropTypes.number,
    rZ: _react.PropTypes.number
  }).isRequired,
  onGetComp: _react.PropTypes.func.isRequired
} : void 0;
exports.default = PanelConfigGL;
//# sourceMappingURL=PanelConfigGL.js.map