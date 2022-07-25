"use strict";

exports.__esModule = true;
exports.useState = exports.useRef = exports.useReducer = exports.useMemo = exports.useImperativeHandle = exports.useEffect = exports.useCallback = exports.render = exports.getRefValue = exports.forwardRef = void 0;

var _reactDom = require("react-dom");

exports.render = _reactDom.render;

var _react = require("react");

exports.forwardRef = _react.forwardRef;
exports.useRef = _react.useRef;
exports.useState = _react.useState;
exports.useReducer = _react.useReducer;
exports.useMemo = _react.useMemo;
exports.useCallback = _react.useCallback;
exports.useEffect = _react.useEffect;
exports.useImperativeHandle = _react.useImperativeHandle;

var getRefValue = function getRefValue(ref) {
  return (ref || {}).current;
};

exports.getRefValue = getRefValue;
//# sourceMappingURL=uiApi.js.map