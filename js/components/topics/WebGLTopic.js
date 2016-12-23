'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

//import addGLMethods from './gl-decorators/addGLMethods';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WIDTH = 500,
    HEIGHT = 500,
    STYLE = {
  ROOT: {
    position: 'relative',
    float: 'left'
  },
  BT_RUN: {
    position: 'absolute',
    top: '4px',
    'right': '8px'
  }
};

//@addGLMethods

var WebGLTopic = (0, _initGL2.default)(_class = (0, _createShaders2.default)(_class = (0, _createPerspective2.default)(_class = (0, _setPointSize2.default)(_class = (0, _configMatrix2.default)(_class = (0, _draw2.default)(_class = (0, _startAnimation2.default)(_class = function (_Component) {
  _inherits(WebGLTopic, _Component);

  function WebGLTopic(props) {
    _classCallCheck(this, WebGLTopic);

    var _this = _possibleConstructorReturn(this, (WebGLTopic.__proto__ || Object.getPrototypeOf(WebGLTopic)).call(this));

    _this._handleClickCanvas = function () {
      _this.isAnimate = !_this.isAnimate;
      _this.forceUpdate();
    };

    _this.isAnimate = true;
    _this.isStopDraw = false;
    return _this;
  }

  _createClass(WebGLTopic, [{
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
      this.props.clearBuffers(this);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { style: STYLE.ROOT },
        _react2.default.createElement('canvas', {
          ref: function ref(el) {
            return _this2.canvas = el;
          },
          width: WIDTH,
          height: HEIGHT,
          onClick: this._handleClickCanvas
        }),
        this.isAnimate === false && _react2.default.createElement(_Button2.default, {
          caption: 'Run Animation',
          style: STYLE.BT_RUN,
          onClick: this._handleClickCanvas
        })
      );
    }
  }]);

  return WebGLTopic;
}(_react.Component)) || _class) || _class) || _class) || _class) || _class) || _class) || _class;

exports.default = WebGLTopic;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\topics\WebGLTopic.js.map