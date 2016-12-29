'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _enzyme = require('enzyme');

var _InputFloat = require('../../../../js/components/zhn-atoms/InputFloat');

var _InputFloat2 = _interopRequireDefault(_InputFloat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnGetWrapper = function _fnGetWrapper(props) {
  return (0, _enzyme.shallow)(_react2.default.createElement(_InputFloat2.default, _extends({ inputKey: 'input' }, props)));
};

(0, _ava2.default)('render root div, with childrens : input type text, hr ', function (t) {
  var wrapper = _fnGetWrapper();

  t.true(wrapper.is('div'));

  var input = wrapper.find('input');
  t.is(input.length, 1);
  t.is(input.prop("type"), "text");

  var hr = wrapper.find('hr');
  t.is(hr.length, 1);
});

(0, _ava2.default)('should has state value="0", initedValue="0", step=0.1 by default ', function (t) {
  var wrapper = _fnGetWrapper(),
      dfValue = "0",
      dfStep = 0.1;

  t.is(wrapper.state("value"), dfValue);
  t.is(wrapper.state("initedValue"), dfValue);
  t.is(wrapper.state("step"), dfStep);

  var instance = wrapper.instance();
  t.false(instance.isOnChangeModeFn);
  t.false(instance.isOnKeyDownEnterFn);
});

(0, _ava2.default)('should cache boolean flag for onChangeMode, onKeyDownEnter props', function (t) {
  var onChangeMode = function onChangeMode() {},
      onKeyDownEnter = function onKeyDownEnter() {},
      wrapper = _fnGetWrapper({ onChangeMode: onChangeMode, onKeyDownEnter: onKeyDownEnter }),
      instance = wrapper.instance();
  t.true(instance.isOnChangeModeFn);
  t.true(instance.isOnKeyDownEnterFn);
});

(0, _ava2.default)('should has setMode, getValue instance fns', function (t) {
  var wrapper = _fnGetWrapper(),
      instance = wrapper.instance();
  t.is(_typeof(instance.setMode), "function");
  t.is(_typeof(instance.getValue), "function");
});

(0, _ava2.default)('should on input event change set state value equal input value', function (t) {
  var value = "1",
      wrapper = _fnGetWrapper(),
      input = wrapper.find("input");

  input.simulate('change', { target: { value: value } });
  t.is(wrapper.state("value"), value);
  t.is(wrapper.instance().getValue(), parseFloat(value));
});

(0, _ava2.default)('should for setMode 0, 1 and 2 set state mode and value', function (t) {
  var value = "100",
      wrapper = _fnGetWrapper({ value: value }),
      input = wrapper.find("input"),
      instance = wrapper.instance();

  instance.setMode(0);
  t.is(wrapper.state("mode"), 0);

  instance.setMode(1);
  t.is(wrapper.state("mode"), 1);

  var valueNext = "123";
  input.simulate('change', { target: { value: valueNext } });
  instance.setMode(2);
  t.is(wrapper.state("mode"), 2);
  t.is(wrapper.state("initedValue"), valueNext);
});

var zhnSpy = {
  createValueSpy: function createValueSpy() {
    var calledCounter = 0;
    var calledWithValue = undefined;
    var fn = function fn(value) {
      calledCounter += 1;
      calledWithValue = value;
    };

    fn.isCalledOnce = function () {
      return calledCounter === 1;
    };
    fn.isCalledWithValue = function (value) {
      return calledWithValue === value;
    };

    return fn;
  }
};

(0, _ava2.default)('should on keyDown Enter (13) call props onKeyDownEnter', function (t) {
  var onKeyDownEnterSpy = zhnSpy.createValueSpy(),
      wrapper = _fnGetWrapper({ onKeyDownEnter: onKeyDownEnterSpy }),
      input = wrapper.find("input"),
      instance = wrapper.instance();

  t.true(instance.isOnKeyDownEnterFn);
  input.simulate("keydown", { keyCode: 13 });
  t.true(onKeyDownEnterSpy.isCalledOnce());
});

(0, _ava2.default)('should on keyDown Esc (27) set state value equal initedValue, change state mode', function (t) {
  var value = "100",
      wrapper = _fnGetWrapper({ value: value }),
      input = wrapper.find("input"),
      valueNext = "123";

  input.simulate('change', { target: { value: valueNext } });
  t.is(wrapper.state("value"), valueNext);
  t.is(wrapper.state("mode"), 1);
  input.simulate("keydown", { keyCode: 27 });
  t.is(wrapper.state("value"), value);
  t.is(wrapper.state("mode"), 2);
});

(0, _ava2.default)('should on keyDown Up (38) preventDefault, increase state value on prop step, change state mode', function (t) {
  var value = "0.2",
      step = 0.1,
      wrapper = _fnGetWrapper({ value: value, step: step }),
      input = wrapper.find("input"),
      preventDefaultSpy = zhnSpy.createValueSpy();

  input.simulate("keydown", { keyCode: 38, preventDefault: preventDefaultSpy });
  t.true(preventDefaultSpy.isCalledOnce());
  t.is(wrapper.state("value"), "0.3");
  t.is(wrapper.state("mode"), 1);
});

(0, _ava2.default)('should on keyDown Down (40) preventDefault, decrease state value on prop step, change state mode', function (t) {
  var value = "0.4",
      step = 0.1,
      wrapper = _fnGetWrapper({ value: value, step: step }),
      input = wrapper.find("input"),
      preventDefaultSpy = zhnSpy.createValueSpy();

  input.simulate("keydown", { keyCode: 40, preventDefault: preventDefaultSpy });
  t.true(preventDefaultSpy.isCalledOnce());
  t.is(wrapper.state("value"), "0.3");
  t.is(wrapper.state("mode"), 1);
});
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\zhn-atoms\__tests__\InputFloat.test.js.map