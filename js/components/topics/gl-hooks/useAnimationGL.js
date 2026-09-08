"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../../utils/isTypeFn");
var _uiApi = require("../../uiApi");
var _initGl = _interopRequireDefault(require("./initGl"));
var _createShaders = _interopRequireDefault(require("./createShaders"));
var _createPerspective = _interopRequireDefault(require("./createPerspective"));
var _setPointSize = _interopRequireDefault(require("./setPointSize"));
var _configMatrix = _interopRequireDefault(require("./configMatrix"));
var _draw = _interopRequireDefault(require("./draw"));
const _assign = Object.assign;
const useAnimationGL = (refCanvas, refConfig, props) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    const canvas = (0, _uiApi.getRefValue)(refCanvas),
      config = (0, _uiApi.getRefValue)(refConfig),
      {
        valuesForInit,
        createVertices,
        createIndices,
        loadTexture
      } = props;
    _assign(config, {
      ...valuesForInit,
      canvas,
      props,
      configMatrix: _configMatrix.default,
      draw: props.draw || _draw.default
    });
    (0, _initGl.default)(config);
    (0, _createShaders.default)(config);
    createVertices(config);
    if (!config.isWithoutPerspective) {
      config.createPerspective = _createPerspective.default;
      (0, _createPerspective.default)(config);
    }
    if (!config.isWithoutPointSize) {
      (0, _setPointSize.default)(config);
    }
    (0, _configMatrix.default)(config);
    if ((0, _isTypeFn.isFn)(createIndices)) {
      createIndices(config);
    }
    if ((0, _isTypeFn.isFn)(loadTexture)) {
      loadTexture(config);
    }
    if ((0, _isTypeFn.isFn)(config.draw)) {
      config.draw(config);
    }
    return () => {
      config.isStopDraw = true;
    };
  }, []);
  //refCanvas, refConfig, props
  /*eslint-enable react-hooks/exhaustive-deps */
};
var _default = exports.default = useAnimationGL;
//# sourceMappingURL=useAnimationGL.js.map