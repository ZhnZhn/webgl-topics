'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputSelect = require('../zhn-atoms/InputSelect');

var _InputSelect2 = _interopRequireDefault(_InputSelect);

var _ButtonSet = require('../zhn-atoms/ButtonSet');

var _ButtonSet2 = _interopRequireDefault(_ButtonSet);

var _Row = require('./Row.Style');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _drawModeOptions = [{ caption: "TRIANGLES", value: "TRIANGLES" }, { caption: "TRIANGLE_STRIP", value: "TRIANGLE_STRIP" }, { caption: "TRIANGLE_FAN", value: "TRIANGLE_FAN" }, { caption: "LINES", value: "LINES" }, { caption: "LINE_STRIP", value: "LINE_STRIP" }, { caption: "LINE_LOOP", value: "LINE_LOOP" }, { caption: "POINTS", value: "POINTS" }];

var RowDrawMode = function (_Component) {
  _inherits(RowDrawMode, _Component);

  function RowDrawMode(props) {
    _classCallCheck(this, RowDrawMode);

    var _this = _possibleConstructorReturn(this, (RowDrawMode.__proto__ || Object.getPrototypeOf(RowDrawMode)).call(this, props));

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

  _createClass(RowDrawMode, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: _Row2.default.ROW },
        _react2.default.createElement(
          'span',
          { style: _Row2.default.CAPTION },
          'drawMode:'
        ),
        _react2.default.createElement(_InputSelect2.default, {
          options: _drawModeOptions,
          onSelect: this._handleSelectDrawMode
        }),
        _react2.default.createElement(_ButtonSet2.default, { onClick: this._handleSetDrawMode })
      );
    }
  }]);

  return RowDrawMode;
}(_react.Component);

RowDrawMode.propTypes = {
  onGetComp: _react.PropTypes.func.isRequired
};

exports.default = RowDrawMode;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\panel-config-gl\RowDrawMode.js.map