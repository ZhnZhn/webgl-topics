'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OpenClose = require('../zhn-atoms/OpenClose');

var _OpenClose2 = _interopRequireDefault(_OpenClose);

var _RowProp = require('./RowProp');

var _RowProp2 = _interopRequireDefault(_RowProp);

var _Panel = require('./Panel.Style');

var _Panel2 = _interopRequireDefault(_Panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PanelPerspective = function (_Component) {
  _inherits(PanelPerspective, _Component);

  function PanelPerspective(props) {
    _classCallCheck(this, PanelPerspective);

    var _this = _possibleConstructorReturn(this, (PanelPerspective.__proto__ || Object.getPrototypeOf(PanelPerspective)).call(this, props));

    _this._fnAfterSet = function (comp) {
      comp.createPerspective(comp);
    };

    return _this;
  }

  _createClass(PanelPerspective, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          perspectiveNear = _props.perspectiveNear,
          perspectiveFar = _props.perspectiveFar,
          onGetComp = _props.onGetComp;


      return _react2.default.createElement(
        _OpenClose2.default,
        {
          caption: 'Perspective',
          style: Object.assign({}, _Panel2.default.OPEN_CLOSE, { paddingTop: '16px' })
        },
        _react2.default.createElement(_RowProp2.default, {
          labelBy: 'Near:',
          value: perspectiveNear,
          propKey: 'perspectiveNear',
          styleLabel: _Panel2.default.LABEL_PERSPECTIVE,
          onGetComp: onGetComp,
          fnAfterSet: this._fnAfterSet
        }),
        _react2.default.createElement(_RowProp2.default, {
          labelBy: 'Far:',
          value: perspectiveFar,
          styleLabel: _Panel2.default.LABEL_PERSPECTIVE,
          propKey: 'perspectiveFar',
          onGetComp: onGetComp,
          fnAfterSet: this._fnAfterSet
        })
      );
    }
  }]);

  return PanelPerspective;
}(_react.Component);

PanelPerspective.propTypes = {
  perspectiveNear: _react.PropTypes.number.isRequired,
  perspectiveFar: _react.PropTypes.number.isRequired,
  onGetComp: _react.PropTypes.func.isRequired
};

exports.default = PanelPerspective;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\panel-config-gl\PanelPerspective.js.map