"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _RouterTopicActions = require("../../flux/actions/RouterTopicActions");

var _factoryTopic2 = _interopRequireDefault(require("./factoryTopic"));

var _PanelConfigGL = _interopRequireDefault(require("../panel-config-gl/PanelConfigGL"));

var _dfValues = _interopRequireDefault(require("./gl-props/dfValues"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_CONTAINER = 'container',
    CL_CONTENT = CL_CONTAINER + "__content";

var TopicWrapper = function TopicWrapper(_ref) {
  var store = _ref.store;

  var _useState = (0, _uiApi.useState)(),
      topicId = _useState[0],
      setTopicId = _useState[1],
      refComp = (0, _uiApi.useRef)(null),
      getComponentTopic = (0, _uiApi.useCallback)(function () {
    return refComp.current;
  }, []);

  (0, _useListen["default"])(store, function (actionType, state) {
    if (actionType === _RouterTopicActions.RouterTopicActionTypes.VIEW_TOPIC) {
      setTopicId(state.topicId);
    }
  });

  var _factoryTopic = (0, _factoryTopic2["default"])(topicId),
      Comp = _factoryTopic.Comp,
      compProps = _factoryTopic.props,
      valuesForInit = compProps.valuesForInit,
      _valuesForInit = (0, _extends2["default"])({}, _dfValues["default"], valuesForInit);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: CL_CONTAINER,
    role: "document",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: CL_CONTENT,
      role: "main",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Comp, (0, _extends2["default"])({
          ref: refComp
        }, compProps)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PanelConfigGL["default"], {
          valuesForInit: _valuesForInit,
          onGetComp: getComponentTopic
        })]
      })
    })
  });
};
/*
TopicWrapper. propTypes = {
  store: PropTypes.shape({
    listen: PropTypes.func
  })
}
*/


var _default = TopicWrapper;
exports["default"] = _default;
//# sourceMappingURL=Main.js.map