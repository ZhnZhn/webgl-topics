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

var _InputSelect = require('../zhn-atoms/InputSelect');

var _InputSelect2 = _interopRequireDefault(_InputSelect);

var _ButtonSet = require('../zhn-atoms/ButtonSet');

var _ButtonSet2 = _interopRequireDefault(_ButtonSet);

var _Panel = require('./Panel.Style');

var _Panel2 = _interopRequireDefault(_Panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _drawModeOptions = [{ caption: "TRIANGLES", value: "TRIANGLES" }, { caption: "TRIANGLE_STRIP", value: "TRIANGLE_STRIP" }, { caption: "TRIANGLE_FAN", value: "TRIANGLE_FAN" }, { caption: "LINES", value: "LINES" }, { caption: "LINE_STRIP", value: "LINE_STRIP" }, { caption: "LINE_LOOP", value: "LINE_LOOP" }, { caption: "POINTS", value: "POINTS" }];

var PanelDrawMode = function (_Component) {
  (0, _inherits3.default)(PanelDrawMode, _Component);

  function PanelDrawMode(props) {
    (0, _classCallCheck3.default)(this, PanelDrawMode);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PanelDrawMode.__proto__ || Object.getPrototypeOf(PanelDrawMode)).call(this, props));

    _this._handleSelectDrawMode = function (item) {
      _this.drawMode = item;
    };

    _this._handleSetDrawMode = function () {
      var drawMode = _this.drawMode;

      if (drawMode) {
        var comp = _this.props.onGetComp();
        comp.drawMode = drawMode.value;
      }
    };

    return _this;
  }

  (0, _createClass3.default)(PanelDrawMode, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _OpenClose2.default,
        {
          caption: 'DrawMode',
          style: _Panel2.default.OPEN_CLOSE
        },
        _react2.default.createElement(_InputSelect2.default, {
          options: _drawModeOptions,
          styleRoot: _Panel2.default.INPUT_SELECT,
          onSelect: this._handleSelectDrawMode
        }),
        _react2.default.createElement(_ButtonSet2.default, {
          mode: 1,
          onClick: this._handleSetDrawMode
        })
      );
    }
  }]);
  return PanelDrawMode;
}(_react.Component);

process.env.NODE_ENV !== "production" ? PanelDrawMode.propTypes = {
  onGetComp: _react.PropTypes.func.isRequired
} : void 0;

exports.default = PanelDrawMode;
//# sourceMappingURL=PanelDrawMode.js.map