"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _RouterTopicActions = require("../../flux/actions/RouterTopicActions");

var _Menu = _interopRequireDefault(require("../zhn-moleculs/Menu"));

var _menuModel = _interopRequireDefault(require("./menuModel"));

var TopicMenu = /*#__PURE__*/function (_Component) {
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
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
      className: "sidebar",
      tabIndex: "-1",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "sidebar__menu",
        role: "navigation",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Menu["default"], {
          toogleStyle: {
            paddingLeft: '6px'
          },
          menuModel: _menuModel["default"],
          topicId: topicId
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "sidebar__footer",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "sidebar__footer__link",
          children: "Footer Button"
        })
      })]
    });
  };

  return TopicMenu;
}(_react.Component);
/*
TopicMenu.propTypes = {
  store : PropTypes.object.isRequired
}
*/


var _default = TopicMenu;
exports["default"] = _default;
//# sourceMappingURL=TopicMenu.js.map