"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _RouterTopicActions = require("../../flux/actions/RouterTopicActions");

var _factoryTopic2 = _interopRequireDefault(require("./factoryTopic"));

var _PanelConfigGL = _interopRequireDefault(require("../panel-config-gl/PanelConfigGL"));

var _dfValues = _interopRequireDefault(require("./gl-props/dfValues"));

var TopicWrapper =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(TopicWrapper, _Component);

  function TopicWrapper(props) {
    var _this;

    _this = _Component.call(this) || this;
    _this._onStore = _this._onStore.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getComponentTopic = _this.getComponentTopic.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = {
      topidId: undefined
    };
    return _this;
  }

  var _proto = TopicWrapper.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var store = this.props.store;
    this.unsubscribe = store.listen(this._onStore);
  };

  _proto._onStore = function _onStore(actionType, state) {
    if (actionType === _RouterTopicActions.RouterTopicActionTypes.VIEW_TOPIC) {
      this.setState({
        topicId: state.topicId
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.getComponentTopic = function getComponentTopic() {
    return this.componentTopic;
  };

  _proto.render = function render() {
    var _this2 = this;

    var topicId = this.state.topicId,
        _factoryTopic = (0, _factoryTopic2["default"])(topicId),
        Comp = _factoryTopic.Comp,
        compProps = _factoryTopic.props,
        _compProps$valuesForI = compProps.valuesForInit,
        valuesForInit = _compProps$valuesForI === void 0 ? {} : _compProps$valuesForI,
        _valuesForInit = Object.assign({}, _dfValues["default"], valuesForInit);

    return _react["default"].createElement("div", {
      className: "container",
      role: "document"
    }, _react["default"].createElement("main", {
      className: "container__content",
      tabIndex: "1",
      role: "main"
    }, _react["default"].createElement("div", {
      className: "row"
    }, _react["default"].createElement(Comp, (0, _extends2["default"])({
      ref: function ref(comp) {
        return _this2.componentTopic = comp;
      }
    }, compProps)), _react["default"].createElement(_PanelConfigGL["default"], {
      valuesForInit: _valuesForInit,
      onGetComp: this.getComponentTopic
    }))));
  };

  return TopicWrapper;
}(_react.Component);

TopicWrapper.propTypes = {
  store: _react.PropTypes.shape({
    listen: _react.PropTypes.func
  })
};
var _default = TopicWrapper;
exports["default"] = _default;
//# sourceMappingURL=Main.js.map