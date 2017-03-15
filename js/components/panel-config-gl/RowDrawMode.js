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

var _InputSelect = require('../zhn-atoms/InputSelect');

var _InputSelect2 = _interopRequireDefault(_InputSelect);

var _ButtonSet = require('../zhn-atoms/ButtonSet');

var _ButtonSet2 = _interopRequireDefault(_ButtonSet);

var _Row = require('./Row.Style');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _drawModeOptions = [{ caption: "TRIANGLES", value: "TRIANGLES" }, { caption: "TRIANGLE_STRIP", value: "TRIANGLE_STRIP" }, { caption: "TRIANGLE_FAN", value: "TRIANGLE_FAN" }, { caption: "LINES", value: "LINES" }, { caption: "LINE_STRIP", value: "LINE_STRIP" }, { caption: "LINE_LOOP", value: "LINE_LOOP" }, { caption: "POINTS", value: "POINTS" }];

var RowDrawMode = function (_Component) {
  (0, _inherits3.default)(RowDrawMode, _Component);

  function RowDrawMode() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RowDrawMode);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RowDrawMode.__proto__ || Object.getPrototypeOf(RowDrawMode)).call.apply(_ref, [this].concat(args))), _this), _this._handleSelectDrawMode = function (item) {
      _this.drawMode = item;
    }, _this._handleSetDrawMode = function () {
      var _this2 = _this,
          drawMode = _this2.drawMode;

      if (drawMode) {
        var comp = _this.props.onGetComp();
        comp.drawMode = drawMode.value;
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RowDrawMode, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: _Row2.default.ROW },
        _react2.default.createElement(
          'span',
          { style: Object.assign(_Row2.default.CAPTION, { color: '#a487d4' }) },
          'DrawMode:'
        ),
        _react2.default.createElement(_InputSelect2.default, {
          options: _drawModeOptions,
          onSelect: this._handleSelectDrawMode
        }),
        _react2.default.createElement(_ButtonSet2.default, {
          mode: 1,
          onClick: this._handleSetDrawMode
        })
      );
    }
  }]);
  return RowDrawMode;
}(_react.Component);

process.env.NODE_ENV !== "production" ? RowDrawMode.propTypes = {
  onGetComp: _react.PropTypes.func.isRequired
} : void 0;
exports.default = RowDrawMode;
//# sourceMappingURL=RowDrawMode.js.map