"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _setModeToAll = _interopRequireDefault(require("./decorators/setModeToAll"));

var _onChangeMode = _interopRequireDefault(require("./decorators/onChangeMode"));

var _calcInputMode = _interopRequireDefault(require("./decorators/calcInputMode"));

var _Label = _interopRequireDefault(require("../zhn-atoms/Label"));

var _InputFloat = _interopRequireDefault(require("../zhn-atoms/InputFloat"));

var _ButtonSet = _interopRequireDefault(require("../zhn-atoms/ButtonSet"));

var _Row = _interopRequireDefault(require("./Row.Style"));

var _jsxRuntime = require("react/jsx-runtime");

var _class;

var RowRotateAll = (0, _setModeToAll["default"])(_class = (0, _onChangeMode["default"])(_class = (0, _calcInputMode["default"])(_class = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(RowRotateAll, _Component);

  /*
  static propTypes = {
    rX : PropTypes.number.isRequired,
    rY : PropTypes.number.isRequired,
    rZ : PropTypes.number.isRequired,
    onGetComp : PropTypes.func.isRequired
  }
  */
  function RowRotateAll(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleSetRotation = function () {
      var comp = _this.props.onGetComp();

      comp.rX = _this.rotateX.getValue();
      comp.rY = _this.rotateY.getValue();
      comp.rZ = _this.rotateZ.getValue();

      _this._setModeToAll(2);
    };

    _this._refRotateX = function (comp) {
      return _this.rotateX = comp;
    };

    _this._refRotateY = function (comp) {
      return _this.rotateY = comp;
    };

    _this._refRotateZ = function (comp) {
      return _this.rotateZ = comp;
    };

    _this._refBt = function (comp) {
      return _this.bt = comp;
    };

    _this.mode = {
      rotateX: 2,
      rotateY: 2,
      rotateZ: 2,
      bt: 2
    };
    _this._onChangeMode = _this._onChangeMode.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  var _proto = RowRotateAll.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        rX = _this$props.rX,
        rY = _this$props.rY,
        rZ = _this$props.rZ;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: _Row["default"].ROW,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Label["default"], {
        style: _Row["default"].CAPTION,
        title: "rotate:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Label["default"], {
        style: _Row["default"].LABEL,
        title: "X:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputFloat["default"], {
        ref: this._refRotateX,
        inputKey: "rotateX",
        inputStyle: _Row["default"].INPUT_FLOAT_3,
        value: rX,
        step: 0.001,
        onChangeMode: this._onChangeMode,
        onKeyDownEnter: this._handleSetRotation
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Label["default"], {
        style: _Row["default"].LABEL,
        title: "Y:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputFloat["default"], {
        ref: this._refRotateY,
        inputKey: "rotateY",
        inputStyle: _Row["default"].INPUT_FLOAT_3,
        value: rY,
        step: 0.001,
        onChangeMode: this._onChangeMode,
        onKeyDownEnter: this._handleSetRotation
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Label["default"], {
        style: _Row["default"].LABEL,
        title: "Z:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputFloat["default"], {
        ref: this._refRotateZ,
        inputKey: "rotateZ",
        inputStyle: _Row["default"].INPUT_FLOAT_3,
        value: rZ,
        step: 0.001,
        onChangeMode: this._onChangeMode,
        onKeyDownEnter: this._handleSetRotation
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonSet["default"], {
        ref: this._refBt,
        onClick: this._handleSetRotation
      })]
    });
  };

  return RowRotateAll;
}(_react.Component)) || _class) || _class) || _class;

var _default = RowRotateAll;
exports["default"] = _default;
//# sourceMappingURL=RowRotateAll.js.map