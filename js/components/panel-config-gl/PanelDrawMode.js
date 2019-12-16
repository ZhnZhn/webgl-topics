"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));

var _InputSelect = _interopRequireDefault(require("../zhn-atoms/InputSelect"));

var _ButtonSet = _interopRequireDefault(require("../zhn-atoms/ButtonSet"));

var _Panel = _interopRequireDefault(require("./Panel.Style"));

var _drawModeOptions = [{
  caption: "TRIANGLES",
  value: "TRIANGLES"
}, {
  caption: "TRIANGLE_STRIP",
  value: "TRIANGLE_STRIP"
}, {
  caption: "TRIANGLE_FAN",
  value: "TRIANGLE_FAN"
}, {
  caption: "LINES",
  value: "LINES"
}, {
  caption: "LINE_STRIP",
  value: "LINE_STRIP"
}, {
  caption: "LINE_LOOP",
  value: "LINE_LOOP"
}, {
  caption: "POINTS",
  value: "POINTS"
}];

var PanelDrawMode =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(PanelDrawMode, _Component);

  function PanelDrawMode(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleSelectDrawMode = function (item) {
      _this.drawMode = item;
    };

    _this._handleSetDrawMode = function () {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          drawMode = _assertThisInitialize.drawMode;

      if (drawMode) {
        var comp = _this.props.onGetComp();

        comp.drawMode = drawMode.value;
      }
    };

    return _this;
  }

  var _proto = PanelDrawMode.prototype;

  _proto.render = function render() {
    return _react["default"].createElement(_OpenClose["default"], {
      caption: "DrawMode",
      style: _Panel["default"].OPEN_CLOSE
    }, _react["default"].createElement(_InputSelect["default"], {
      options: _drawModeOptions,
      styleRoot: _Panel["default"].INPUT_SELECT,
      onSelect: this._handleSelectDrawMode
    }), _react["default"].createElement(_ButtonSet["default"], {
      mode: 1,
      onClick: this._handleSetDrawMode
    }));
  };

  return PanelDrawMode;
}(_react.Component);

PanelDrawMode.propTypes = {
  onGetComp: _react.PropTypes.func.isRequired
};
var _default = PanelDrawMode;
exports["default"] = _default;
//# sourceMappingURL=PanelDrawMode.js.map