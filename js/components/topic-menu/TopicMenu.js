'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RouterTopicActions = require('../../flux/actions/RouterTopicActions');

var _Menu = require('../zhn-moleculs/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _menuModel = require('./menuModel');

var _menuModel2 = _interopRequireDefault(_menuModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopicMenu = function (_Component) {
  (0, _inherits3.default)(TopicMenu, _Component);

  function TopicMenu(props) {
    (0, _classCallCheck3.default)(this, TopicMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TopicMenu.__proto__ || Object.getPrototypeOf(TopicMenu)).call(this, props));

    _this._onStore = function (actionType, state) {
      if (actionType === _RouterTopicActions.RouterTopicActionTypes.VIEW_TOPIC) {
        _this.setState({ topicId: state.topicId });
      }
    };

    var store = props.store;

    _this.state = {
      topicId: store.state.topicId
    };
    return _this;
  }

  (0, _createClass3.default)(TopicMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var store = this.props.store;

      this.unsubscribe = store.listen(this._onStore);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var topicId = this.state.topicId;

      return _react2.default.createElement(
        'section',
        { className: 'sidebar', tabindex: '-1' },
        _react2.default.createElement(
          'div',
          { className: 'sidebar__menu', role: 'navigation' },
          _react2.default.createElement(_Menu2.default, {
            toogleStyle: { paddingLeft: '6px' },
            menuModel: _menuModel2.default,
            topicId: topicId
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'sidebar__footer' },
          _react2.default.createElement(
            'button',
            { className: 'sidebar__footer__link', type: 'button' },
            'Footer Button'
          )
        )
      );
    }
  }]);
  return TopicMenu;
}(_react.Component);

process.env.NODE_ENV !== "production" ? TopicMenu.propTypes = {
  store: _react.PropTypes.object.isRequired
} : void 0;

exports.default = TopicMenu;
//# sourceMappingURL=TopicMenu.js.map