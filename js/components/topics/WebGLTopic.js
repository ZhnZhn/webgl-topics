"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _RouterLink = _interopRequireDefault(require("./links/RouterLink"));

var _initGL = _interopRequireDefault(require("./gl-decorators/initGL"));

var _createShaders = _interopRequireDefault(require("./gl-decorators/createShaders"));

var _createPerspective = _interopRequireDefault(require("./gl-decorators/createPerspective"));

var _setPointSize = _interopRequireDefault(require("./gl-decorators/setPointSize"));

var _configMatrix = _interopRequireDefault(require("./gl-decorators/configMatrix"));

var _draw = _interopRequireDefault(require("./gl-decorators/draw"));

var _startAnimation = _interopRequireDefault(require("./gl-decorators/startAnimation"));

var _Button = _interopRequireDefault(require("../zhn-atoms/Button"));

var _class, _temp;

var WIDTH = 500,
    HEIGHT = 500,
    STYLE = {
  ROOT: {
    position: 'relative',
    "float": 'left'
  },
  BT_RUN: {
    position: 'absolute',
    top: '8px',
    right: '8px'
  }
};

var WebGLTopic = (0, _initGL["default"])(_class = (0, _createShaders["default"])(_class = (0, _createPerspective["default"])(_class = (0, _setPointSize["default"])(_class = (0, _configMatrix["default"])(_class = (0, _draw["default"])(_class = (0, _startAnimation["default"])(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(WebGLTopic, _Component);

  function WebGLTopic() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.isAnimate = true;
    _this.isStopDraw = false;

    _this._handleClickCanvas = function () {
      _this.isAnimate = !_this.isAnimate;

      _this.forceUpdate();
    };

    _this._renderTopicLink = function (valuesForInit) {
      if (!valuesForInit) {
        return undefined;
      } else {
        var _valuesForInit$topicL = valuesForInit.topicLink,
            topicLink = _valuesForInit$topicL === void 0 ? {} : _valuesForInit$topicL,
            type = topicLink.type,
            Comp = _RouterLink["default"][type];

        if (typeof Comp === 'undefined') {
          return undefined;
        } else return _react["default"].createElement(Comp, topicLink);
      }
    };

    return _this;
  }

  var _proto = WebGLTopic.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var startAnimation = this.props.startAnimation;

    if (typeof startAnimation === "function") {
      startAnimation(this);
    } else {
      this.startAnimation(this);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.isStopDraw = true;
  };

  _proto.render = function render() {
    var _this2 = this;

    var valuesForInit = this.props.valuesForInit;
    return _react["default"].createElement("div", {
      style: STYLE.ROOT
    }, _react["default"].createElement("canvas", {
      ref: function ref(el) {
        return _this2.canvas = el;
      },
      width: WIDTH,
      height: HEIGHT,
      style: {
        borderRadius: '2px'
      },
      onClick: this._handleClickCanvas
    }, "Your browser doesn't appear to support the", _react["default"].createElement("code", null, "<canvas>"), " element."), this.isAnimate === false && _react["default"].createElement(_Button["default"], {
      caption: "Run Animation",
      style: STYLE.BT_RUN,
      onClick: this._handleClickCanvas
    }), this._renderTopicLink(valuesForInit));
  };

  return WebGLTopic;
}(_react.Component), _temp)) || _class) || _class) || _class) || _class) || _class) || _class) || _class;

var _default = WebGLTopic;
exports["default"] = _default;
//# sourceMappingURL=WebGLTopic.js.map