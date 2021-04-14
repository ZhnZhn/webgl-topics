"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _Comp = _interopRequireDefault(require("../Comp"));

var _Panel = _interopRequireDefault(require("./Panel.Style"));

var _jsxRuntime = require("react/jsx-runtime");

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
var S = {
  OC_DIV: {
    paddingTop: 6
  },
  BT_SET: {
    position: 'relative',
    top: -6
  }
};

var PanelDrawMode = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(PanelDrawMode, _Component);

  function PanelDrawMode() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._hSelectDrawMode = function (item) {
      _this.drawMode = item;
    };

    _this._hSetDrawMode = function () {
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
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].OpenClose, {
      caption: "DrawMode",
      style: _Panel["default"].OPEN_CLOSE,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: (0, _extends2["default"])({}, _Panel["default"].OC_DIV, S.OC_DIV),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
          width: "170",
          options: _drawModeOptions,
          styleRoot: _Panel["default"].INPUT_SELECT,
          onSelect: this._hSelectDrawMode
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ButtonSet, {
          style: S.BT_SET,
          mode: 1,
          onClick: this._hSetDrawMode
        })]
      })
    });
  };

  return PanelDrawMode;
}(_react.Component);

var _default = PanelDrawMode;
exports["default"] = _default;
//# sourceMappingURL=PanelDrawMode.js.map