"use strict";

exports.__esModule = true;
exports.useState = exports.useRef = exports.useMemo = exports.useImperativeHandle = exports.useEffect = exports.useCallback = exports.getRefValue = exports.forwardRef = exports.Component = void 0;

var _react = require("react");

exports.Component = _react.Component;
exports.forwardRef = _react.forwardRef;
exports.useRef = _react.useRef;
exports.useState = _react.useState;
exports.useMemo = _react.useMemo;
exports.useCallback = _react.useCallback;
exports.useEffect = _react.useEffect;
exports.useImperativeHandle = _react.useImperativeHandle;

var getRefValue = function getRefValue(ref) {
  return (ref || {}).current;
};

exports.getRefValue = getRefValue;
//# sourceMappingURL=uiApi.js.map