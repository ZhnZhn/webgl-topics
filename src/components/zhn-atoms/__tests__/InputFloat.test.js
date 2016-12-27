import React from 'react';

import test from 'ava';
import { shallow } from 'enzyme';

import InputFloat from '../../../../js/components/zhn-atoms/InputFloat';

const _fnGetWrapper = (props) => {
  return shallow(<InputFloat inputKey="input" {...props} />);
}

test('render root div, with childrens : input type text, hr ', t => {
   const wrapper = _fnGetWrapper()

   t.true(wrapper.is('div'))

   const input = wrapper.find('input')
   t.is(input.length, 1);
   t.is(input.prop("type"), "text");

   const hr = wrapper.find('hr')
   t.is(hr.length, 1)
})

test('should has state value="0", initedValue="0", step=0.1 by default ', t => {
  const wrapper = _fnGetWrapper()
  , dfValue = "0"
  , dfStep = 0.1

  t.is(wrapper.state("value"), dfValue)
  t.is(wrapper.state("initedValue"), dfValue)
  t.is(wrapper.state("step"), dfStep)

  const instance = wrapper.instance()
  t.is(instance.isOnChangeModeFn, undefined)
  t.is(instance.isOnKeyDownEnterFn, undefined)
})

test('should cache boolean flag for onChangeMode, onKeyDownEnter props', t => {
 const  onChangeMode = () => {}
      , onKeyDownEnter = () => {}
      , wrapper = _fnGetWrapper({ onChangeMode, onKeyDownEnter })
      , instance = wrapper.instance()
  t.true(instance.isOnChangeModeFn)
  t.true(instance.isOnKeyDownEnterFn)
})

test('should has setMode, getValue instance fns', t => {
  const wrapper = _fnGetWrapper()
      , instance = wrapper.instance()
  t.is(typeof instance.setMode, "function")
  t.is(typeof instance.getValue, "function")
})

test('should on input event change set state value equal input value', t => {
   const value = "1"
        , wrapper = _fnGetWrapper()
        , input = wrapper.find("input")

   input.simulate('change', { target : { value : value }})
   t.is(wrapper.state("value"), value)
   t.is(wrapper.instance().getValue(), parseFloat(value))
})


test('should for setMode 0, 1 and 2 set state mode and value', t => {
  const value = "100"
      , wrapper = _fnGetWrapper({ value })
      , input = wrapper.find("input")
      , instance = wrapper.instance()

  instance.setMode(0);
  t.is(wrapper.state("mode"), 0)

  instance.setMode(1);
  t.is(wrapper.state("mode"), 1)

  const valueNext = "123"
  input.simulate('change', { target : { value : valueNext }})
  instance.setMode(2);
  t.is(wrapper.state("mode"), 2)
  t.is(wrapper.state("initedValue"), valueNext)
})

const zhnSpy = {

  createValueSpy(){
     let calledCounter = 0;
     let calledWithValue = undefined;
     const fn = function(value){
        calledCounter += 1;
        calledWithValue = value;
     }

     fn.isCalledOnce = function(){
       return calledCounter === 1;
     }
     fn.isCalledWithValue = function(value){
       return calledWithValue === value;
     }

     return fn;
  }

}

test('should on keyDown Enter (13) call props onKeyDownEnter', t => {
  const onKeyDownEnterSpy = zhnSpy.createValueSpy()
      , wrapper = _fnGetWrapper({ onKeyDownEnter: onKeyDownEnterSpy })
      , input = wrapper.find("input")
      , instance = wrapper.instance()

  t.true(instance.isOnKeyDownEnterFn)
  input.simulate("keydown", { keyCode : 13 })
  t.true(onKeyDownEnterSpy.isCalledOnce())
})

test('should on keyDown Esc (27) set state value equal initedValue, change state mode', t => {
  const value = "100"
      , wrapper = _fnGetWrapper({ value })
      , input = wrapper.find("input")
      , valueNext = "123"

  input.simulate('change', { target : { value : valueNext }})
  t.is(wrapper.state("value"), valueNext)
  t.is(wrapper.state("mode"), 1 )
  input.simulate("keydown", { keyCode: 27 })
  t.is(wrapper.state("value"), value )
  t.is(wrapper.state("mode"), 2 )
})


test('should on keyDown Up (38) preventDefault, increase state value on prop step, change state mode', t => {
  const value = "0.2"
      , step = 0.1
      , wrapper = _fnGetWrapper({ value, step })
      , input = wrapper.find("input")
      , preventDefaultSpy = zhnSpy.createValueSpy()

  input.simulate("keydown", { keyCode: 38, preventDefault : preventDefaultSpy })
  t.true(preventDefaultSpy.isCalledOnce())
  t.is(wrapper.state("value"), "0.3" )
  t.is(wrapper.state("mode"), 1 )
})

test('should on keyDown Down (40) preventDefault, decrease state value on prop step, change state mode', t => {
  const value = "0.4"
      , step = 0.1
      , wrapper = _fnGetWrapper({ value, step })
      , input = wrapper.find("input")
      , preventDefaultSpy = zhnSpy.createValueSpy()

  input.simulate("keydown", { keyCode: 40, preventDefault : preventDefaultSpy })
  t.true(preventDefaultSpy.isCalledOnce())
  t.is(wrapper.state("value"), "0.3" )
  t.is(wrapper.state("mode"), 1 )
})
