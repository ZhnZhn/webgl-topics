"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _setModeToAll = _interopRequireDefault(require("./decorators/setModeToAll"));

var _onChangeMode = _interopRequireDefault(require("./decorators/onChangeMode"));

var _calcInputMode = _interopRequireDefault(require("./decorators/calcInputMode"));

var _Label = _interopRequireDefault(require("../zhn-atoms/Label"));

var _InputFloat = _interopRequireDefault(require("../zhn-atoms/InputFloat"));

var _ButtonSet = _interopRequireDefault(require("../zhn-atoms/ButtonSet"));

var _Row = _interopRequireDefault(require("./Row.Style"));

var _class, _temp;

var RowPerspective = (0, _setModeToAll["default"])(_class = (0, _onChangeMode["default"])(_class = (0, _calcInputMode["default"])(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(RowPerspective, _Component);

  /*
  static propTypes = {
    perspectiveNear : PropTypes.number.isRequire,
    perspectiveFar : PropTypes.number.isRequired,
    onGetComp : PropTypes.func.isRequired
  }
  */
  function RowPerspective(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleSetPerspective = function () {
      var comp = _this.props.onGetComp(),
          _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          near = _assertThisInitialize.near,
          far = _assertThisInitialize.far;

      comp.perspectiveNear = near.getValue();
      comp.perspectiveFar = far.getValue();
      comp.createPerspective(comp);

      _this._setModeToAll(2);
    };

    _this._refNear = function (comp) {
      return _this.near = comp;
    };

    _this._refFar = function (comp) {
      return _this.far = comp;
    };

    _this._refBt = function (bt) {
      return _this.bt = bt;
    };

    _this.mode = {
      near: 2,
      far: 2,
      bt: 2
    };
    _this._onChangeMode = _this._onChangeMode.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  var _proto = RowPerspective.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        perspectiveNear = _this$props.perspectiveNear,
        perspectiveFar = _this$props.perspectiveFar;
    return _react["default"].createElement("div", {
      style: _Row["default"].ROW
    }, _react["default"].createElement(_Label["default"], {
      style: _Row["default"].CAPTION,
      title: "perspective:"
    }), _react["default"].createElement(_Label["default"], {
      style: _Row["default"].LABEL,
      title: "near:"
    }), _react["default"].createElement(_InputFloat["default"], {
      ref: this._refNear,
      inputKey: "near",
      inputStyle: _Row["default"].INPUT_FLOAT_2,
      value: perspectiveNear,
      onChangeMode: this._onChangeMode,
      onKeyDownEnter: this._handleSetPerspective
    }), _react["default"].createElement(_Label["default"], {
      style: _Row["default"].LABEL,
      title: "far:"
    }), _react["default"].createElement(_InputFloat["default"], {
      ref: this._refFar,
      inputKey: "far",
      value: perspectiveFar,
      inputStyle: _Row["default"].INPUT_FLOAT_2,
      onChangeMode: _onChangeMode["default"],
      onKeyDownEnter: this._handleSetPerspective
    }), _react["default"].createElement(_ButtonSet["default"], {
      ref: this._refBt,
      onClick: this._handleSetPerspective
    }));
  };

  return RowPerspective;
}(_react.Component), _temp)) || _class) || _class) || _class;

var _default = RowPerspective;
exports["default"] = _default;
//# sourceMappingURL=RowPerspective.js.map