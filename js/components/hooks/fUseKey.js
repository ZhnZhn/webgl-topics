"use strict";

exports.__esModule = true;
exports.useKeyEnter = void 0;
var _uiApi = require("../uiApi");
/*eslint-disable react-hooks/exhaustive-deps */
const fUseKey = isKey => (fn, deps) => (0, _uiApi.useCallback)(event => {
  if (isKey(event)) {
    event.preventDefault();
    event.stopPropagation();
    fn(event);
  }
}, deps || []);
/*eslint-enable react-hooks/exhaustive-deps */

const isKeyEnter = ({
  keyCode
}) => keyCode === 13 || keyCode === 32;
const useKeyEnter = exports.useKeyEnter = fUseKey(isKeyEnter);
//# sourceMappingURL=fUseKey.js.map