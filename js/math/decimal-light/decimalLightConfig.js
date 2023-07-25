"use strict";

exports.__esModule = true;
exports.setExternal = exports.mathPow = exports.mathMax = exports.mathFloor = exports.mathCeil = exports.isDecimal = exports.invalidArgument = exports.getExternal = exports.exponentOutOfRange = exports.decimalError = exports.MAX_E = exports.LOG_BASE = exports.BASE = void 0;
const isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
exports.isDecimal = isDecimal;
const mathMax = Math.max;
exports.mathMax = mathMax;
const mathCeil = Math.ceil;
exports.mathCeil = mathCeil;
const mathFloor = Math.floor;
exports.mathFloor = mathFloor;
const mathPow = Math.pow;
exports.mathPow = mathPow;
const LOG_BASE = 7;
exports.LOG_BASE = LOG_BASE;
const BASE = 1e7;
exports.BASE = BASE;
const _MAX_SAFE_INTEGER = 9007199254740991;
// 1286742750677284
const MAX_E = mathFloor(_MAX_SAFE_INTEGER / LOG_BASE);
exports.MAX_E = MAX_E;
const decimalError = '[DecimalError] ';
exports.decimalError = decimalError;
const invalidArgument = decimalError + 'Invalid argument: ';
exports.invalidArgument = invalidArgument;
const exponentOutOfRange = decimalError + 'Exponent out of range: ';
exports.exponentOutOfRange = exponentOutOfRange;
let _external = true;
const getExternal = () => _external;
exports.getExternal = getExternal;
const setExternal = is => {
  _external = is;
};
exports.setExternal = setExternal;
//# sourceMappingURL=decimalLightConfig.js.map