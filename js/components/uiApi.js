"use strict";

exports.__esModule = true;
exports.useState = exports.useRef = exports.useReducer = exports.useMemo = exports.useImperativeHandle = exports.useEffect = exports.useCallback = exports.render = exports.getRefValue = void 0;
var _compat = require("preact/compat");
exports.render = _compat.render;
exports.useRef = _compat.useRef;
exports.useState = _compat.useState;
exports.useReducer = _compat.useReducer;
exports.useMemo = _compat.useMemo;
exports.useCallback = _compat.useCallback;
exports.useEffect = _compat.useEffect;
exports.useImperativeHandle = _compat.useImperativeHandle;
const getRefValue = ref => (ref || {}).current;
exports.getRefValue = getRefValue;
//# sourceMappingURL=uiApi.js.map