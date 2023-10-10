"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useWebGLStore = require("../../flux/useWebGLStore");
var _factoryTopic = _interopRequireDefault(require("./factoryTopic"));
var _PanelConfigGL = _interopRequireDefault(require("../panel-config-gl/PanelConfigGL"));
var _preact = require("preact");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_CONTAINER = 'container',
  CL_CONTENT = `${CL_CONTAINER}__content`;
const TopicWrapper = () => {
  const topicId = (0, _useWebGLStore.useTopicId)(),
    refComp = (0, _uiApi.useRef)(null),
    getComponentTopic = (0, _uiApi.useMemo)(() => () => refComp.current, []),
    {
      Comp,
      props: compProps
    } = (0, _uiApi.useMemo)(() => (0, _factoryTopic.default)(topicId), [topicId]),
    {
      valuesForInit
    } = compProps;
  return (0, _jsxRuntime.jsx)("div", {
    className: CL_CONTAINER,
    role: "document",
    children: (0, _jsxRuntime.jsx)("main", {
      className: CL_CONTENT,
      children: (0, _jsxRuntime.jsxs)("div", {
        className: "row",
        children: [(0, _preact.createElement)(Comp, {
          ...compProps,
          ref: refComp,
          key: compProps.key
        }), (0, _jsxRuntime.jsx)(_PanelConfigGL.default, {
          valuesForInit: valuesForInit,
          onGetComp: getComponentTopic
        })]
      })
    })
  });
};
var _default = exports.default = TopicWrapper;
//# sourceMappingURL=Main.js.map