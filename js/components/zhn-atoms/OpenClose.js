"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var styles = {
  rootDiv: {
    lineHeight: 1.5,
    backgroundColor: '#4D4D4D'
  },
  labelCaption: {
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

var OpenClose = _react["default"].createClass({
  displayName: "OpenClose",
  getInitialState: function getInitialState() {
    var isOpen = this.props.isClose ? false : true;
    return {
      isOpen: isOpen,
      pathOpen: "M 2,14 L 14,14 14,2 2,14",
      fillOpen: "yellow",
      pathClose: "M 2,2 L 14,8 2,14 2,2",
      fillClose: "#33373A"
    };
  },
  _handlerClickOpenClose: function _handlerClickOpenClose() {
    this.state.isOpen = !this.state.isOpen;
    this.setState(this.state);
  },
  render: function render() {
    var _this$props = this.props,
        style = _this$props.style,
        toogleStyle = _this$props.toogleStyle;
    var pathV, fillV, displayDivStyle, classShow;

    if (this.state.isOpen) {
      pathV = this.state.pathOpen;
      fillV = this.state.fillOpen;
      displayDivStyle = 'block';
      classShow = 'show-popup';
    } else {
      pathV = this.state.pathClose;
      fillV = this.state.fillClose;
      displayDivStyle = 'none';
      classShow = null;
    }

    return _react["default"].createElement("div", {
      style: Object.assign({}, styles.rootDiv, style)
    }, _react["default"].createElement("div", {
      className: "not-selected",
      style: toogleStyle,
      onClick: this._handlerClickOpenClose
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
      style: styles.labelCaption
    }, this.props.caption)), _react["default"].createElement("div", {
      className: classShow,
      style: {
        display: displayDivStyle
      }
    }, this.props.children));
  }
});

var _default = OpenClose;
exports["default"] = _default;
//# sourceMappingURL=OpenClose.js.map