
import test from 'ava';

import { isFunction } from '../../../js/utils/is';

test('should return true', t => {
   const obj = {
     fn1 : () => {},
     fn2 : function(){},
     fn3 : new Function()
   }

   t.true(isFunction(() => {}))

   t.true(isFunction(obj.fn1))
   t.true(isFunction(obj.fn2))
   t.true(isFunction(obj.fn3))
})

test('should return false', t => {
   const obj = {
     str : "str",
     n : 10,
     bool1 : true,
     bool2 : false,
     r : /abc/,
   }

   t.false(isFunction(null))
   t.false(isFunction(undefined))
   t.false(isFunction(obj))
   t.false(isFunction(obj.str))
   t.false(isFunction(obj.n))
   t.false(isFunction(obj.bool1))
   t.false(isFunction(obj.bool2))
   t.false(isFunction(obj.r))
})
