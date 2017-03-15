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

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RouterLink = require('./links/RouterLink');

var _RouterLink2 = _interopRequireDefault(_RouterLink);

var _initGL = require('./gl-decorators/initGL');

var _initGL2 = _interopRequireDefault(_initGL);

var _createShaders = require('./gl-decorators/createShaders');

var _createShaders2 = _interopRequireDefault(_createShaders);

var _createPerspective = require('./gl-decorators/createPerspective');

var _createPerspective2 = _interopRequireDefault(_createPerspective);

var _setPointSize = require('./gl-decorators/setPointSize');

var _setPointSize2 = _interopRequireDefault(_setPointSize);

var _configMatrix = require('./gl-decorators/configMatrix');

var _configMatrix2 = _interopRequireDefault(_configMatrix);

var _draw = require('./gl-decorators/draw');

var _draw2 = _interopRequireDefault(_draw);

var _startAnimation = require('./gl-decorators/startAnimation');

var _startAnimation2 = _interopRequireDefault(_startAnimation);

var _Button = require('../zhn-atoms/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WIDTH = 500,
    HEIGHT = 500,
    STYLE = {
  ROOT: {
    position: 'relative',
    float: 'left'
  },
  BT_RUN: {
    position: 'absolute',
    top: '8px',
    right: '8px'
  }
};

var WebGLTopic = (0, _initGL2.default)(_class = (0, _createShaders2.default)(_class = (0, _createPerspective2.default)(_class = (0, _setPointSize2.default)(_class = (0, _configMatrix2.default)(_class = (0, _draw2.default)(_class = (0, _startAnimation2.default)(_class = function (_Component) {
  (0, _inherits3.default)(WebGLTopic, _Component);

  function WebGLTopic(props) {
    (0, _classCallCheck3.default)(this, WebGLTopic);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WebGLTopic.__proto__ || Object.getPrototypeOf(WebGLTopic)).call(this));

    _this._handleClickCanvas = function () {
      _this.isAnimate = !_this.isAnimate;
      _this.forceUpdate();
    };

    _this._renderTopicLink = function (valuesForInit) {
      if (!valuesForInit) {
        return undefined;
      } else {
        var _valuesForInit$topicL = valuesForInit.topicLink,
            topicLink = _valuesForInit$topicL === undefined ? {} : _valuesForInit$topicL,
            type = topicLink.type,
            Comp = _RouterLink2.default[type];

        if (typeof Comp === 'undefined') {
          return undefined;
        } else return _react2.default.createElement(Comp, topicLink);
      }
    };

    _this.isAnimate = true;
    _this.isStopDraw = false;
    return _this;
  }

  (0, _createClass3.default)(WebGLTopic, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var startAnimation = this.props.startAnimation;

      if (typeof startAnimation === "function") {
        startAnimation(this);
      } else {
        this.startAnimation(this);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.isStopDraw = true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var valuesForInit = this.props.valuesForInit;

      return _react2.default.createElement(
        'div',
        { style: STYLE.ROOT },
        _react2.default.createElement(
          'canvas',
          {
            ref: function ref(el) {
              return _this2.canvas = el;
            },
            width: WIDTH,
            height: HEIGHT,
            style: { borderRadius: '2px' },
            onClick: this._handleClickCanvas
          },
          'Your browser doesn\'t appear to support the',
          _react2.default.createElement(
            'code',
            null,
            '<canvas>'
          ),
          ' element.'
        ),
        this.isAnimate === false && _react2.default.createElement(_Button2.default, {
          caption: 'Run Animation',
          style: STYLE.BT_RUN,
          onClick: this._handleClickCanvas
        }),
        this._renderTopicLink(valuesForInit)
      );
    }
  }]);
  return WebGLTopic;
}(_react.Component)) || _class) || _class) || _class) || _class) || _class) || _class) || _class;

process.env.NODE_ENV !== "production" ? WebGLTopic.propTypes = {
  valuesForInit: _react.PropTypes.object
} : void 0;
exports.default = WebGLTopic;
//# sourceMappingURL=WebGLTopic.js.map