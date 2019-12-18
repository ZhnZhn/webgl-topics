"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _Row = _interopRequireDefault(require("./Row.Style"));

var S = {
  CAPTION: {
    color: '#a487d4'
  }
};
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

var RowDrawMode =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(RowDrawMode, _Component);

  function RowDrawMode() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

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

  var _proto = RowDrawMode.prototype;

  _proto.render = function render() {
    return _react["default"].createElement("div", {
      style: _Row["default"].ROW
    }, _react["default"].createElement("span", {
      style: (0, _extends2["default"])({}, _Row["default"].CAPTION, {}, S.CAPTION)
    }, "DrawMode:"), _react["default"].createElement(_Comp["default"].InputSelect, {
      options: _drawModeOptions,
      onSelect: this._handleSelectDrawMode
    }), _react["default"].createElement(_Comp["default"].ButtonSet, {
      mode: 1,
      onClick: this._handleSetDrawMode
    }));
  };

  return RowDrawMode;
}(_react.Component);

var _default = RowDrawMode;
exports["default"] = _default;
//# sourceMappingURL=RowDrawMode.js.map