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

var _class, _class2, _temp;

var RowPerspective = (0, _setModeToAll["default"])(_class = (0, _onChangeMode["default"])(_class = (0, _calcInputMode["default"])(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(RowPerspective, _Component);

  function RowPerspective(props) {
    var _this;

    _this = _Component.call(this) || this;

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

    _this.mode = {
      near: 2,
      far: 2,
      bt: 2
    };
    return _this;
  }

  var _proto = RowPerspective.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        perspectiveNear = _this$props.perspectiveNear,
        perspectiveFar = _this$props.perspectiveFar,
        onChangeMode = this._onChangeMode.bind(this);

    return _react["default"].createElement("div", {
      style: _Row["default"].ROW
    }, _react["default"].createElement(_Label["default"], {
      style: _Row["default"].CAPTION,
      title: "perspective:"
    }), _react["default"].createElement(_Label["default"], {
      style: _Row["default"].LABEL,
      title: "near:"
    }), _react["default"].createElement(_InputFloat["default"], {
      ref: function ref(comp) {
        return _this2.near = comp;
      },
      inputKey: "near",
      inputStyle: _Row["default"].INPUT_FLOAT_2,
      value: perspectiveNear,
      onChangeMode: onChangeMode,
      onKeyDownEnter: this._handleSetPerspective
    }), _react["default"].createElement(_Label["default"], {
      style: _Row["default"].LABEL,
      title: "far:"
    }), _react["default"].createElement(_InputFloat["default"], {
      ref: function ref(comp) {
        return _this2.far = comp;
      },
      inputKey: "far",
      value: perspectiveFar,
      inputStyle: _Row["default"].INPUT_FLOAT_2,
      onChangeMode: onChangeMode,
      onKeyDownEnter: this._handleSetPerspective
    }), _react["default"].createElement(_ButtonSet["default"], {
      ref: function ref(bt) {
        return _this2.bt = bt;
      },
      onClick: this._handleSetPerspective
    }));
  };

  return RowPerspective;
}(_react.Component), _class2.propTypes = {
  perspectiveNear: _react.PropTypes.number.isRequire,
  perspectiveFar: _react.PropTypes.number.isRequired,
  onGetComp: _react.PropTypes.func.isRequired
}, _temp)) || _class) || _class) || _class;

var _default = RowPerspective;
exports["default"] = _default;
//# sourceMappingURL=RowPerspective.js.map