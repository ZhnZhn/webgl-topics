'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _is = require('../../../js/utils/is');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ava2.default)('should return true for str contains float', function (t) {
  t.true((0, _is.isFloat)("0"));
  t.true((0, _is.isFloat)("10"));
  t.true((0, _is.isFloat)("1.0"));
  t.true((0, _is.isFloat)("1.000"));
  t.true((0, _is.isFloat)("-1.000"));
  t.true((0, _is.isFloat)("1.0001"));
});

(0, _ava2.default)('should return true for number', function (t) {
  t.true((0, _is.isFloat)(0));
  t.true((0, _is.isFloat)(10));
  t.true((0, _is.isFloat)(1.000));
  t.true((0, _is.isFloat)(1.0001));
});

(0, _ava2.default)('should return true for negative number', function (t) {
  t.true((0, _is.isFloat)(-10));
  t.true((0, _is.isFloat)(-1.000));
  t.true((0, _is.isFloat)(-1.0001));
});

(0, _ava2.default)('should return false for str not all contains float', function (t) {
  t.false((0, _is.isFloat)('abc'));
  t.false((0, _is.isFloat)('10a'));
  t.false((0, _is.isFloat)('1.0a'));
  t.false((0, _is.isFloat)('10.a'));
  t.false((0, _is.isFloat)('--10'));
});

(0, _ava2.default)('should return false for ""', function (t) {
  t.false((0, _is.isFloat)(""));
});

(0, _ava2.default)('should return false for null', function (t) {
  t.false((0, _is.isFloat)(null));
});

(0, _ava2.default)('should return false for unefined', function (t) {
  t.false((0, _is.isFloat)());
  t.false((0, _is.isFloat)(undefined));
});
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\utils\__tests__\isFloat.test.js.map