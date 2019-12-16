"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var S = {
  ROOT_DIV: {
    lineHeight: 1.5,
    backgroundColor: '#4D4D4D'
  },
  CAPTION: {
    paddingLeft: '4px',
    verticalAlign: 'top',
    color: 'rgba(164, 135, 212, 1)',
    fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer'
  },
  itemRow: {
    backgroundColor: '#404040'
  }
};

var OpenClose =
/*#__PURE__*/
function (_Component) {
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
    var pathV, fillV, displayDivStyle, classShow;

    if (isOpen) {
      pathV = pathOpen;
      fillV = fillOpen;
      displayDivStyle = 'block';
      classShow = 'show-popup';
    } else {
      pathV = pathClose;
      fillV = fillClose;
      displayDivStyle = 'none';
      classShow = null;
    }

    return _react["default"].createElement("div", {
      style: (0, _extends2["default"])({}, S.ROOT_DIV, {}, style)
    }, _react["default"].createElement("div", {
      className: "not-selected",
      style: toogleStyle,
      onClick: this._hClickOpenClose
    }, _react["default"].createElement("div", {
      style: {
        width: '16px',
        height: '16px',
        display: 'inline-block'
      }
    }, _react["default"].createElement("svg", {
      viewBox: "0 0 16 16",
      width: "100%",
      height: "100%",
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        display: 'inline-block'
      }
    }, _react["default"].createElement("path", {
      d: pathV,
      fill: fillV,
      strokeWidth: "1",
      stroke: "yellow"
    }))), _react["default"].createElement("span", {
      style: S.CAPTION
    }, caption)), _react["default"].createElement("div", {
      className: classShow,
      style: {
        display: displayDivStyle
      }
    }, children));
  };

  return OpenClose;
}(_react.Component);

var _default = OpenClose;
exports["default"] = _default;
//# sourceMappingURL=OpenClose.js.map