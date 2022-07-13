"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _initGL = _interopRequireDefault(require("./gl-decorators/initGL"));

var _createShaders = _interopRequireDefault(require("./gl-decorators/createShaders"));

var _createPerspective = _interopRequireDefault(require("./gl-decorators/createPerspective"));

var _setPointSize = _interopRequireDefault(require("./gl-decorators/setPointSize"));

var _configMatrix = _interopRequireDefault(require("./gl-decorators/configMatrix"));

var _draw = _interopRequireDefault(require("./gl-decorators/draw"));

var _startAnimation = _interopRequireDefault(require("./gl-decorators/startAnimation"));

var _Button = _interopRequireDefault(require("../zhn-atoms/Button"));

var _TopicLink = _interopRequireDefault(require("./TopicLink"));

var _jsxRuntime = require("react/jsx-runtime");

var _class;

var WIDTH = 500,
    HEIGHT = 500,
    S_ROOT = {
  position: 'relative',
  "float": 'left'
},
    S_CANVAS = {
  borderRadius: '2px'
},
    S_BT_RUN = {
  position: 'absolute',
  top: 8,
  right: 8
};

var WebGLTopic = (0, _initGL["default"])(_class = (0, _createShaders["default"])(_class = (0, _createPerspective["default"])(_class = (0, _setPointSize["default"])(_class = (0, _configMatrix["default"])(_class = (0, _draw["default"])(_class = (0, _startAnimation["default"])(_class = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(WebGLTopic, _Component);

  function WebGLTopic() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.isAnimate = true;
    _this.isStopDraw = false;

    _this._hClickCanvas = function () {
      _this.isAnimate = !_this.isAnimate;

      _this.forceUpdate();
    };

    _this._refCanvas = function (el) {
      return _this.canvas = el;
    };

    return _this;
  }

  var _proto = WebGLTopic.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.startAnimation(this);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.isStopDraw = true;
  };

  _proto.render = function render() {
    var valuesForInit = this.props.valuesForInit;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: S_ROOT,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("canvas", {
        ref: this._refCanvas,
        width: WIDTH,
        height: HEIGHT,
        style: S_CANVAS,
        onClick: this._hClickCanvas,
        children: ["Your browser doesn't appear to support the", /*#__PURE__*/(0, _jsxRuntime.jsx)("code", {
          children: "<canvas>"
        }), " element."]
      }), !this.isAnimate && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
        caption: "Run Animation",
        style: S_BT_RUN,
        onClick: this._hClickCanvas
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TopicLink["default"], {
        config: valuesForInit
      })]
    });
  };

  return WebGLTopic;
}(_react.Component)) || _class) || _class) || _class) || _class) || _class) || _class) || _class;

var _default = WebGLTopic;
exports["default"] = _default;
//# sourceMappingURL=WebGLTopic.js.map