"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var useRefValue = function useRefValue(value) {
  return (0, _uiApi.getRefValue)((0, _uiApi.useRef)(value));
};

var _default = useRefValue;
exports["default"] = _default;
//# sourceMappingURL=useRefValue.js.map