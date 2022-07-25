"use strict";

exports.__esModule = true;
exports.isNumber = exports.getDataIndex = void 0;

var isNumber = function isNumber(n) {
  return typeof n === 'number' && n - n === 0;
};

exports.isNumber = isNumber;

var getDataIndex = function getDataIndex(element) {
  var dataset = element.dataset,
      _ref = dataset || {},
      index = _ref.index;

  return Number(index);
};

exports.getDataIndex = getDataIndex;
//# sourceMappingURL=helperFns.js.map