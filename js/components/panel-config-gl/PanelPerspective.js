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

var PanelPerspective = function (_Component) {
  (0, _inherits3.default)(PanelPerspective, _Component);

  function PanelPerspective(props) {
    (0, _classCallCheck3.default)(this, PanelPerspective);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PanelPerspective.__proto__ || Object.getPrototypeOf(PanelPerspective)).call(this, props));

    _this._fnAfterSet = function (comp) {
      comp.createPerspective(comp);
    };

    return _this;
  }

  (0, _createClass3.default)(PanelPerspective, [{
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
          style: _Panel2.default.OPEN_CLOSE
        },
        _react2.default.createElement(_RowProp2.default, {
          labelBy: 'Near:',
          inputId: 'pNear',
          value: perspectiveNear,
          propKey: 'perspectiveNear',
          styleLabel: _Panel2.default.LABEL_PERSPECTIVE,
          onGetComp: onGetComp,
          fnAfterSet: this._fnAfterSet
        }),
        _react2.default.createElement(_RowProp2.default, {
          labelBy: 'Far:',
          inputId: 'pFar',
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

process.env.NODE_ENV !== "production" ? PanelPerspective.propTypes = {
  perspectiveNear: _react.PropTypes.number.isRequired,
  perspectiveFar: _react.PropTypes.number.isRequired,
  onGetComp: _react.PropTypes.func.isRequired
} : void 0;
exports.default = PanelPerspective;
//# sourceMappingURL=PanelPerspective.js.map