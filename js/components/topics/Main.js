'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _factoryTopic2 = require('./factoryTopic');

var _factoryTopic3 = _interopRequireDefault(_factoryTopic2);

var _PanelConfigGL = require('../panel-config-gl/PanelConfigGL');

var _PanelConfigGL2 = _interopRequireDefault(_PanelConfigGL);

var _dfValues = require('./gl-props/dfValues');

var _dfValues2 = _interopRequireDefault(_dfValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopicWrapper = function (_Component) {
  (0, _inherits3.default)(TopicWrapper, _Component);

  function TopicWrapper(props) {
    (0, _classCallCheck3.default)(this, TopicWrapper);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TopicWrapper.__proto__ || Object.getPrototypeOf(TopicWrapper)).call(this));

    _this._onStore = _this._onStore.bind(_this);
    _this.getComponentTopic = _this.getComponentTopic.bind(_this);
    _this.state = {
      topidId: undefined
    };
    return _this;
  }

  (0, _createClass3.default)(TopicWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var store = this.props.store;

      this.unsubscribe = store.listen(this._onStore);
    }
  }, {
    key: '_onStore',
    value: function _onStore(actionType, state) {
      if (actionType === _RouterTopicActions.RouterTopicActionTypes.VIEW_TOPIC) {
        this.setState({ topicId: state.topicId });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'getComponentTopic',
    value: function getComponentTopic() {
      return this.componentTopic;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var topicId = this.state.topicId,
          _factoryTopic = (0, _factoryTopic3.default)(topicId),
          Comp = _factoryTopic.Comp,
          compProps = _factoryTopic.props,
          _compProps$valuesForI = compProps.valuesForInit,
          valuesForInit = _compProps$valuesForI === undefined ? {} : _compProps$valuesForI,
          _valuesForInit = Object.assign({}, _dfValues2.default, valuesForInit);


      return _react2.default.createElement(
        'div',
        { className: 'container', role: 'document' },
        _react2.default.createElement(
          'main',
          { className: 'container__content', tabIndex: '1', role: 'main' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(Comp, (0, _extends3.default)({
              ref: function ref(comp) {
                return _this2.componentTopic = comp;
              }
            }, compProps)),
            _react2.default.createElement(_PanelConfigGL2.default, {
              valuesForInit: _valuesForInit,
              onGetComp: this.getComponentTopic
            })
          )
        )
      );
    }
  }]);
  return TopicWrapper;
}(_react.Component);

process.env.NODE_ENV !== "production" ? TopicWrapper.propTypes = {
  store: _react.PropTypes.shape({
    listen: _react.PropTypes.func
  })
} : void 0;
exports.default = TopicWrapper;
//# sourceMappingURL=Main.js.map