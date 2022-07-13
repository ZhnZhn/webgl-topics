"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../../uiApi");

var _is = require("../../../utils/is");

var _dfValues = _interopRequireDefault(require("../gl-props/dfValues"));

var _initGl = _interopRequireDefault(require("./initGl"));

var _createShaders = _interopRequireDefault(require("./createShaders"));

var _createPerspective = _interopRequireDefault(require("./createPerspective"));

var _setPointSize = _interopRequireDefault(require("./setPointSize"));

var _configMatrix = _interopRequireDefault(require("./configMatrix"));

var _draw = _interopRequireDefault(require("./draw"));

var _assign = Object.assign;

var useAnimationGL = function useAnimationGL(refCanvas, refConfig, props) {
  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(function () {
    var canvas = (0, _uiApi.getRefValue)(refCanvas),
        config = (0, _uiApi.getRefValue)(refConfig),
        valuesForInit = props.valuesForInit,
        createVertices = props.createVertices,
        createIndices = props.createIndices,
        loadTexture = props.loadTexture;

    _assign(config, (0, _extends2["default"])({}, _dfValues["default"], valuesForInit, {
      canvas: canvas,
      props: props,
      configMatrix: _configMatrix["default"],
      draw: props.draw || _draw["default"]
    }));

    (0, _initGl["default"])(config);
    (0, _createShaders["default"])(config);
    createVertices(config);

    if (!config.isWithoutPerspective) {
      config.createPerspective = _createPerspective["default"];
      (0, _createPerspective["default"])(config);
    }

    if (!config.isWithoutPointSize) {
      (0, _setPointSize["default"])(config);
    }

    (0, _configMatrix["default"])(config);

    if ((0, _is.isFunction)(createIndices)) {
      createIndices(config);
    }

    if ((0, _is.isFunction)(loadTexture)) {
      loadTexture(config);
    }

    if ((0, _is.isFunction)(config.draw)) {
      config.draw(config);
    }

    return function () {
      config.isStopDraw = true;
    };
  }, []); //refCanvas, refConfig, props

  /*eslint-enable react-hooks/exhaustive-deps */
};

var _default = useAnimationGL;
exports["default"] = _default;
//# sourceMappingURL=useAnimationGL.js.map