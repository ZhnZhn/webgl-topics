
import test from 'ava';

import { isFloat } from '../../../js/utils/is';

test('should return true for str contains float', t => {
  t.true(isFloat("0"))
  t.true(isFloat("10"))
  t.true(isFloat("1.0"))
  t.true(isFloat("1.000"))
  t.true(isFloat("-1.000"))
  t.true(isFloat("1.0001"))
})

test('should return true for number', t => {
  t.true(isFloat(0))
  t.true(isFloat(10))
  t.true(isFloat(1.000))
  t.true(isFloat(1.0001))
})

test('should return true for negative number', t => {
  t.true(isFloat(-10))
  t.true(isFloat(-1.000))
  t.true(isFloat(-1.0001))
})

test('should return false for str not all contains float', t => {
  t.false(isFloat('abc'));
  t.false(isFloat('10a'))
  t.false(isFloat('1.0a'))
  t.false(isFloat('10.a'))
  t.false(isFloat('--10'))
})

test('should return false for ""', t => {
  t.false(isFloat(""))
})


test('should return false for null', t => {
  t.false(isFloat(null))
})

test('should return false for unefined', t => {
  t.false(isFloat())
  t.false(isFloat(undefined))
})
