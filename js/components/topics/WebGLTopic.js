"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useRerender = _interopRequireDefault(require("../hooks/useRerender"));
var _useAnimationGL = _interopRequireDefault(require("./gl-hooks/useAnimationGL"));
var _Button = _interopRequireDefault(require("../zhn-atoms/Button"));
var _TopicLink = _interopRequireDefault(require("./TopicLink"));
var _jsxRuntime = require("preact/jsx-runtime");
const WIDTH = 500,
  HEIGHT = 500,
  S_ROOT = {
    position: 'relative',
    float: 'left'
  },
  S_CANVAS = {
    borderRadius: '2px'
  },
  S_BT_RUN = {
    position: 'absolute',
    top: 8,
    right: 8
  };
const WebGLTopic = props => {
  const {
      refEl
    } = props,
    _refCanvas = (0, _uiApi.useRef)(),
    _refConfig = (0, _uiApi.useRef)({
      isAnimate: true,
      isStopDraw: false
    }),
    rerender = (0, _useRerender.default)()
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hClickCanvas = (0, _uiApi.useCallback)(() => {
      _refConfig.current.isAnimate = !(0, _uiApi.getRefValue)(_refConfig).isAnimate;
      rerender();
    }, []);
  //rerender
  /*eslint-enable react-hooks/exhaustive-deps */

  (0, _useAnimationGL.default)(_refCanvas, _refConfig, props);
  (0, _uiApi.useImperativeHandle)(refEl, () => (0, _uiApi.getRefValue)(_refConfig));
  const {
      valuesForInit
    } = props,
    {
      isAnimate
    } = (0, _uiApi.getRefValue)(_refConfig) || {};
  return (0, _jsxRuntime.jsxs)("div", {
    style: S_ROOT,
    children: [(0, _jsxRuntime.jsxs)("canvas", {
      ref: _refCanvas,
      width: WIDTH,
      height: HEIGHT,
      style: S_CANVAS,
      onClick: _hClickCanvas,
      children: ["Your browser doesn't appear to support the", (0, _jsxRuntime.jsx)("code", {
        children: "<canvas>"
      }), " element."]
    }), !isAnimate && (0, _jsxRuntime.jsx)(_Button.default, {
      caption: "Run Animation",
      style: S_BT_RUN,
      onClick: _hClickCanvas
    }), (0, _jsxRuntime.jsx)(_TopicLink.default, {
      config: valuesForInit
    })]
  });
};
var _default = exports.default = WebGLTopic;
//# sourceMappingURL=WebGLTopic.js.map