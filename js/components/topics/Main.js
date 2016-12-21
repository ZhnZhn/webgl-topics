'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopicWrapper = function (_Component) {
  _inherits(TopicWrapper, _Component);

  function TopicWrapper(props) {
    _classCallCheck(this, TopicWrapper);

    var _this = _possibleConstructorReturn(this, (TopicWrapper.__proto__ || Object.getPrototypeOf(TopicWrapper)).call(this));

    _this.state = {
      topidId: undefined
    };


    _this._onStore = _this._onStore.bind(_this);
    _this.getComponentTopic = _this.getComponentTopic.bind(_this);
    return _this;
  }

  _createClass(TopicWrapper, [{
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

      //console.log(topicId);


      return _react2.default.createElement(
        'div',
        { className: 'container', role: 'document' },
        _react2.default.createElement(
          'main',
          { className: 'container__content', tabIndex: '1', role: 'main' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(Comp, _extends({
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

TopicWrapper.propTypes = {
  store: _react.PropTypes.object.isRequired
};

exports.default = TopicWrapper;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\topics\Main.js.map