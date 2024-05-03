import Decimal from '../../math/decimal-light/decimalLight';
import {
  useRef,
  useState,
  useEffect,
  useImperativeHandle
} from '../uiApi';

import {
  isFloat
} from '../../utils/is';

const S_ROOT = {
  position: 'relative',
  display: 'inline-block',
  backgroundColor: 'rgb(225, 225, 203)',
  margin: '0 5px',
  boxShadow: '0 2px 2px 0 rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)'
}
, S_DIV_INPUT = { display: 'inline-block' }
, S_INPUT = {
  display : 'inline',
  color: 'green',
  width: 40,
  height: 26,
  marginRight: 5,
  fontSize: '16px',
  fontWeight: 'bold',
  backgroundColor : '#e1e1cb',
  background: 'transparent none repeat scroll 0 0',
  border: 'medium none',
  outline: 'medium none',
}
, S_HR = {
  width: '100%',
  margin: '0 0 5px 0',
  borderWidth: 'medium medium 2px',
  borderStyle: 'none none solid',
  borderColor: 'red',
  borderImage: 'none',
}
, S_VALID_CHANGED = { borderColor: '#673ab7' }
, S_VALID_NOT_CHANGED = { borderColor: '#9e9e9e' }
, S_NOT_VALID = { borderColor: '#f44336' }
, S_ARROW = {
  display: 'inline-block',
  position: 'relative',
  borderColor: 'rgb(103, 58, 183) transparent transparent',
  borderStyle: 'solid',
  borderWidth: '12px 6px 4px',
  cursor: 'pointer'
}
, S_BT_PLUS = {
  ...S_ARROW,
  transform: 'rotateX(180deg)',
  margin: '0 6px',
  top: -16
}
, S_BT_MINUS = {
  ...S_ARROW,
  top: -12,
  marginRight: 6
};

const FN_NOOP = () => {};

const _hmModeStyle = {
  0: S_NOT_VALID,
  1: S_VALID_CHANGED,
  2: S_VALID_NOT_CHANGED
};

const _calcMode = (
  initialValue,
  value
) => !isFloat(value)
   ? 0
     // isChanged
   : initialValue !== parseFloat(value)
        ? 1
        : 2;

const _crInitialState = ({
  initialValue='0'
}) => ({
  mode: isFloat(initialValue) ? 2 : 0,
  value: initialValue,
  initedValue: initialValue
})

const _crNextState = (
  prevState,
  nextMode,
  nextValue
) => {
  prevState.mode = nextMode
  prevState.value = nextValue
  return {...prevState};
};

const DF_INPUT_KEY = 'dfKey'
, DF_STEP = 0.1

const InputFloat = (
  props
) => {
  const {
    refEl,
    id,
    inputStyle,
    initialValue,
    inputKey=DF_INPUT_KEY,
    step=DF_STEP,
    onChangeMode=FN_NOOP,
    onKeyDownEnter=FN_NOOP
  } = props
  , _refInput = useRef()
  , [
    state,
    setState
  ] = useState(() => _crInitialState(props))
  , {
    mode,
    value,
    initedValue
  } = state
  , _callOnChangeMode = (nextMode) => {
    if (mode !== nextMode){
      onChangeMode(inputKey, nextMode);
    }
  }
  , _increaseOnStep = () => {
    const nextValue = (new Decimal(value)).add(step).toString()
    , nextMode = _calcMode(initedValue, nextValue)
    _callOnChangeMode(nextMode);
    setState(prevState => _crNextState(
      prevState,
      nextMode,
      nextValue
    ))
  }
  , _decreaseOnStep = () => {
    const nextValue = (new Decimal(value)).sub(step).toString()
    , nextMode = _calcMode(initedValue, nextValue)
    _callOnChangeMode(nextMode);
    setState(prevState => _crNextState(
      prevState,
      nextMode,
      nextValue
    ))
  }
  , _hInputChange = (event) => {
    const strValue = event.target.value
    , nextMode = _calcMode(initedValue, strValue)
    _callOnChangeMode(nextMode);
    setState(prevState => _crNextState(
      prevState,
      nextMode,
      strValue
    ))
  }
  , _hInputKeyDown = (event) => {
    switch(event.keyCode){
      // enter
       case 13: {
          onKeyDownEnter();
       break; }
      // esc
       case 27: {
          const _nextMode = value !== initedValue || ""+initedValue === "0"
            ? 2
            : 1
          _callOnChangeMode(_nextMode);
          setState(prevState => _crNextState(
            prevState,
            _nextMode,
            initedValue
          ))
       break; }
       //up
       case 38: {
         event.preventDefault();
         _increaseOnStep();
       break; }
       //down
       case 40: {
        event.preventDefault();
        _decreaseOnStep();
       break; }
       default: return;
    }
  };


  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    setState(_crInitialState(props))
  }, [initialValue])
  // props
  /*eslint-enable react-hooks/exhaustive-deps */


  useImperativeHandle(refEl, () => ({
    getValue: () => parseFloat(value),
    setMode: (mode) => {
      setState(prevState => {
        prevState.mode = mode
        if (mode === 2) {
         prevState.initedValue = value
        }
        return {...prevState};
      })
    }
  }))

  const _hrStyle = _hmModeStyle[mode];

  return (
    <div style={S_ROOT}>
      <button
         style={S_BT_PLUS}
         onClick={_increaseOnStep}
      />
      <div style={S_DIV_INPUT}>
        <input
          ref={_refInput}
          id={id}
          type="text"
          style={{...S_INPUT, ...inputStyle}}
          value={value}
          onChange={_hInputChange}
          onKeyDown={_hInputKeyDown}
        />
        <hr style={{...S_HR, ..._hrStyle}} />
      </div>
      <button
         style={S_BT_MINUS}
         onClick={_decreaseOnStep}
      />
    </div>
  );
}

/*
 InputFloat.propTypes = {
   inputKey: PropTypes.string,
   inputStyle: PropTypes.object,
   value: PropTypes.oneOfType([
     PropTypes.string,
     PropTypes.number
   ]),
   step: PropTypes.number,
   onChangeMode: PropTypes.func,
   onKeyDownEnter: PropTypes.func
 }
 */

export default InputFloat
