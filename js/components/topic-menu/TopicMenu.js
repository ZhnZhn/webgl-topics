"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _RouterTopicActions = require("../../flux/actions/RouterTopicActions");

var _Menu = _interopRequireDefault(require("../zhn-moleculs/Menu"));

var _menuModel = _interopRequireDefault(require("./menuModel"));

var TopicMenu =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(TopicMenu, _Component);

  function TopicMenu(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._onStore = function (actionType, state) {
      if (actionType === _RouterTopicActions.RouterTopicActionTypes.VIEW_TOPIC) {
        _this.setState({
          topicId: state.topicId
        });
      }
    };

    var store = props.store;
    _this.state = {
      topicId: store.state.topicId
    };
    return _this;
  }

  var _proto = TopicMenu.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var store = this.props.store;
    this.unsubscribe = store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var topicId = this.state.topicId;
    return _react["default"].createElement("section", {
      className: "sidebar",
      tabindex: "-1"
    }, _react["default"].createElement("div", {
      className: "sidebar__menu",
      role: "navigation"
    }, _react["default"].createElement(_Menu["default"], {
      toogleStyle: {
        paddingLeft: '6px'
      },
      menuModel: _menuModel["default"],
      topicId: topicId
    })), _react["default"].createElement("div", {
      className: "sidebar__footer"
    }, _react["default"].createElement("button", {
      className: "sidebar__footer__link",
      type: "button"
    }, "Footer Button")));
  };

  return TopicMenu;
}(_react.Component);

TopicMenu.propTypes = {
  store: _react.PropTypes.object.isRequired
};
var _default = TopicMenu;
exports["default"] = _default;
//# sourceMappingURL=TopicMenu.js.map