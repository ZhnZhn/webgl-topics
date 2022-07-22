"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _uiApi = require("../uiApi");

var _setModeToAll = _interopRequireDefault(require("./decorators/setModeToAll"));

var _onChangeMode = _interopRequireDefault(require("./decorators/onChangeMode"));

var _calcInputMode = _interopRequireDefault(require("./decorators/calcInputMode"));

var _Label = _interopRequireDefault(require("../zhn-atoms/Label"));

var _InputFloat = _interopRequireDefault(require("../zhn-atoms/InputFloat"));

var _ButtonSet = _interopRequireDefault(require("../zhn-atoms/ButtonSet"));

var _Row = require("./Row.Style");

var _jsxRuntime = require("react/jsx-runtime");

var _class;

var RowTranslate = (0, _setModeToAll["default"])(_class = (0, _onChangeMode["default"])(_class = (0, _calcInputMode["default"])(_class = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(RowTranslate, _Component);

  /*
  static propTypes = {
    zMatrixTranslate : PropTypes.number.isRequired,
    onGetComp : PropTypes.func.isRequired
  }
  */
  function RowTranslate(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleSetTranslate = function () {
      var comp = _this.props.onGetComp();

      comp.zMatrixTranslate = _this.translateZ.getValue();
      comp.configMatrix(comp);

      _this._setModeToAll(2);
    };

    _this._refTranslateZ = function (comp) {
      return _this.translateZ = comp;
    };

    _this._refBt = function (bt) {
      return _this.bt = bt;
    };

    _this.mode = {
      translateZ: 2,
      bt: 2
    };
    _this._onChangeMode = _this._onChangeMode.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  var _proto = RowTranslate.prototype;

  _proto.render = function render() {
    var zMatrixTranslate = this.props.zMatrixTranslate;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: _Row.ROW,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Label["default"], {
        style: _Row.CAPTION,
        title: "translate:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Label["default"], {
        style: _Row.LABEL,
        title: "Z:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputFloat["default"], {
        ref: this._refTranslateZ,
        inputKey: "translateZ",
        inputStyle: _Row.INPUT_FLOAT_2,
        value: zMatrixTranslate,
        onChangeMode: this._onChangeMode,
        onKeyDownEnter: this._handleSetTranslate
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonSet["default"], {
        ref: this._refBt,
        onClick: this._handleSetTranslate
      })]
    });
  };

  return RowTranslate;
}(_uiApi.Component)) || _class) || _class) || _class;

var _default = RowTranslate;
exports["default"] = _default;
//# sourceMappingURL=RowTranslate.js.map