'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RouterTopicActions = require('../../flux/actions/RouterTopicActions');

var _Menu = require('../zhn-moleculs/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _menuModel = require('./menuModel');

var _menuModel2 = _interopRequireDefault(_menuModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopicMenu = function (_Component) {
  _inherits(TopicMenu, _Component);

  function TopicMenu(props) {
    _classCallCheck(this, TopicMenu);

    var _this = _possibleConstructorReturn(this, (TopicMenu.__proto__ || Object.getPrototypeOf(TopicMenu)).call(this, props));

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

  _createClass(TopicMenu, [{
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

TopicMenu.propTypes = {
  store: _react.PropTypes.object.isRequired
};

exports.default = TopicMenu;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\topic-menu\TopicMenu.js.map