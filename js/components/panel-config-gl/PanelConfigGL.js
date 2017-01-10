'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RowDrawMode = require('./RowDrawMode');

var _RowDrawMode2 = _interopRequireDefault(_RowDrawMode);

var _PanelPerspective = require('./PanelPerspective');

var _PanelPerspective2 = _interopRequireDefault(_PanelPerspective);

var _PanelTranslate = require('./PanelTranslate');

var _PanelTranslate2 = _interopRequireDefault(_PanelTranslate);

var _PanelRotate = require('./PanelRotate');

var _PanelRotate2 = _interopRequireDefault(_PanelRotate);

var _Panel = require('./Panel.STYLE');

var _Panel2 = _interopRequireDefault(_Panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PanelConfigGL = function (_Component) {
  _inherits(PanelConfigGL, _Component);

  function PanelConfigGL(props) {
    _classCallCheck(this, PanelConfigGL);

    return _possibleConstructorReturn(this, (PanelConfigGL.__proto__ || Object.getPrototypeOf(PanelConfigGL)).call(this, props));
  }

  _createClass(PanelConfigGL, [{
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
        _react2.default.createElement(_RowDrawMode2.default, { onGetComp: onGetComp }),
        _react2.default.createElement(_PanelPerspective2.default, { perspectiveNear: perspectiveNear, perspectiveFar: perspectiveFar, onGetComp: onGetComp }),
        _react2.default.createElement(_PanelTranslate2.default, { zMatrixTranslate: zMatrixTranslate, onGetComp: onGetComp }),
        _react2.default.createElement(_PanelRotate2.default, { rX: rX, rY: rY, rZ: rZ, onGetComp: onGetComp })
      );
    }
  }]);

  return PanelConfigGL;
}(_react.Component);

PanelConfigGL.propTypes = {
  valuesForInit: _react.PropTypes.object.isRequired,
  onGetComp: _react.PropTypes.func.isRequired
};

exports.default = PanelConfigGL;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\panel-config-gl\PanelConfigGL.js.map