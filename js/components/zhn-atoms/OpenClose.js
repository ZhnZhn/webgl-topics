"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

var CL_NOT_SELECTED = "not-selected",
    CL_SHOW_POPUP = 'show-popup',
    S_ROOT_DIV = {
  lineHeight: 1.5,
  backgroundColor: '#4d4d4d'
},
    S_CAPTION = {
  paddingLeft: 4,
  verticalAlign: 'top',
  color: 'rgba(164, 135, 212, 1)',
  fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer'
},
    S_DIV_SVG = {
  display: 'inline-block',
  width: 16,
  height: 16
},
    S_SVG = {
  display: 'inline-block'
},
    S_BLOCK = {
  display: 'block'
},
    S_NONE = {
  display: 'none'
};

var OpenClose = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(OpenClose, _Component);

  function OpenClose(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._hClickOpenClose = function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    };

    _this.state = {
      isOpen: props.isClose ? false : true,
      pathOpen: "M 2,14 L 14,14 14,2 2,14",
      fillOpen: "yellow",
      pathClose: "M 2,2 L 14,8 2,14 2,2",
      fillClose: "#33373A"
    };
    return _this;
  }

  var _proto = OpenClose.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        toogleStyle = _this$props.toogleStyle,
        caption = _this$props.caption,
        children = _this$props.children,
        _this$state = this.state,
        isOpen = _this$state.isOpen,
        pathOpen = _this$state.pathOpen,
        fillOpen = _this$state.fillOpen,
        pathClose = _this$state.pathClose,
        fillClose = _this$state.fillClose;
    var pathV, fillV, divStyle, classShow;

    if (isOpen) {
      pathV = pathOpen;
      fillV = fillOpen;
      divStyle = S_BLOCK;
      classShow = CL_SHOW_POPUP;
    } else {
      pathV = pathClose;
      fillV = fillClose;
      divStyle = S_NONE;
      classShow = null;
    }

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: (0, _extends2["default"])({}, S_ROOT_DIV, style),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: CL_NOT_SELECTED,
        style: toogleStyle,
        onClick: this._hClickOpenClose,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: S_DIV_SVG,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
            viewBox: "0 0 16 16",
            width: "100%",
            height: "100%",
            preserveAspectRatio: "none",
            xmlns: "http://www.w3.org/2000/svg",
            style: S_SVG,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
              d: pathV,
              fill: fillV,
              strokeWidth: "1",
              stroke: "yellow"
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: S_CAPTION,
          children: caption
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: classShow,
        style: divStyle,
        children: children
      })]
    });
  };

  return OpenClose;
}(_react.Component);

var _default = OpenClose;
exports["default"] = _default;
//# sourceMappingURL=OpenClose.js.map