'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _is = require('../../../js/utils/is');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ava2.default)('should return true', function (t) {
   var obj = {
      fn1: function fn1() {},
      fn2: function fn2() {},
      fn3: new Function()
   };

   t.true((0, _is.isFunction)(function () {}));

   t.true((0, _is.isFunction)(obj.fn1));
   t.true((0, _is.isFunction)(obj.fn2));
   t.true((0, _is.isFunction)(obj.fn3));
});

(0, _ava2.default)('should return false', function (t) {
   var obj = {
      str: "str",
      n: 10,
      bool1: true,
      bool2: false,
      r: /abc/
   };

   t.false((0, _is.isFunction)(null));
   t.false((0, _is.isFunction)(undefined));
   t.false((0, _is.isFunction)(obj));
   t.false((0, _is.isFunction)(obj.str));
   t.false((0, _is.isFunction)(obj.n));
   t.false((0, _is.isFunction)(obj.bool1));
   t.false((0, _is.isFunction)(obj.bool2));
   t.false((0, _is.isFunction)(obj.r));
});
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\utils\__tests__\isFunction.test.js.map