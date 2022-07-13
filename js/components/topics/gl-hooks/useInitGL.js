"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../../uiApi");

var useInitGL = function useInitGL(refCanvas, refConfig) {
  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(function () {
    var canvas = (0, _uiApi.getRefValue)(refCanvas),
        width = canvas.width,
        height = canvas.height,
        gl = refConfig.current.gl = canvas.getContext("webgl");
    gl.enable(gl.DEPTH_TEST);
    gl.viewport(0, 0, width, height);
    gl.clearColor(0.5, 0.5, 0.5, 1);
  }, []); //refCanvas, refConfig

  /*eslint-enable react-hooks/exhaustive-deps */
};

var _default = useInitGL;
exports["default"] = _default;
//# sourceMappingURL=useInitGL.js.map