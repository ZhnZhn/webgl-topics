"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));

var _RowProp = _interopRequireDefault(require("./RowProp"));

var _Panel = require("./Panel.Style");

var _jsxRuntime = require("react/jsx-runtime");

var PanelTranslate = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(PanelTranslate, _Component);

  function PanelTranslate() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._fnAfterSet = function (comp) {
      comp.configMatrix(comp);
    };

    return _this;
  }

  var _proto = PanelTranslate.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        zMatrixTranslate = _this$props.zMatrixTranslate,
        onGetComp = _this$props.onGetComp;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_OpenClose["default"], {
      caption: "Translate",
      style: _Panel.OPEN_CLOSE,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowProp["default"], {
        labelBy: "Z:",
        inputId: "tZ",
        value: zMatrixTranslate,
        propKey: "zMatrixTranslate",
        onGetComp: onGetComp,
        fnAfterSet: this._fnAfterSet
      })
    });
  };

  return PanelTranslate;
}(_react.Component);

var _default = PanelTranslate;
exports["default"] = _default;
//# sourceMappingURL=PanelTranslate.js.map