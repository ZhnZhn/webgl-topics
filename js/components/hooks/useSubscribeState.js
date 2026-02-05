"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const useSubscribeState = (store, selector) => {
  const [state, setState] = (0, _uiApi.useState)();

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => store.subscribe(selector, setState), []);
  //store, selector
  /*eslint-enable react-hooks/exhaustive-deps */

  return state;
};
var _default = exports.default = useSubscribeState;
//# sourceMappingURL=useSubscribeState.js.map