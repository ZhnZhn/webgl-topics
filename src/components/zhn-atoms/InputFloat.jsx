import React, { Component } from 'react';
import Big from 'big.js'

import { isFunction, isFloat } from '../../utils/is'
import STYLE from './InputFloat.Style';

const _hmModeStyle = {
  0 : STYLE.NOT_VALID,
  1 : STYLE.VALID_CHANGED,
  2 : STYLE.VALID_NOT_CHANGED
}

class InputFloat extends Component {
  /*
   static propTypes = {
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
   static defaultProps = {
     inputKey: 'dfKey',
     value: '0',
     step: 0.1,
     onChangeMode: () => {},
     onKeyDownEnter: () => {}
   }



  _getInitedState = (props) => {
     const { value, step, onChangeMode, onKeyDownEnter } = props

     this.isOnChangeModeFn = isFunction(onChangeMode);
     this.isOnKeyDownEnterFn = isFunction(onKeyDownEnter);

     return {
       mode : (this._onTest(value)) ? 2 : 0,
       value : value,
       initedValue : value,
       step : step
     };
  }

  constructor(props){
    super(props);

    this.state = this._getInitedState(props);
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    if (nextProps !== this.props){
      this.setState(this._getInitedState(nextProps))
    }
  }

  _calcMode = (value) => {
    if (!this._onTest(value)){
      return 0;
    }
    if (this._isChanged(value)){
      return 1;
    }
    return 2;
  }

  _onTest = (strOrNumber) => {
     return isFloat(strOrNumber);
  }

  _isChanged = (value) => {
     return this.state.initedValue !== parseFloat(value);
  }

  _increaseOnStep = () => {
    const { value, step } = this.state
          , valueNext = (new Big(value)).plus(step).toString()
          , nextMode = this._calcMode(valueNext)
     this._callOnChangeMode(nextMode);
     this.setState({
        mode : nextMode,
        value : valueNext
     })
  }

  _decreaseOnStep = () => {
    const { value, step } = this.state
          , valueNext = (new Big(value)).minus(step).toString()
          , nextMode = this._calcMode(valueNext)
     this._callOnChangeMode(nextMode);
     this.setState({
        mode : nextMode,
        value : valueNext
     })
  }

  _handleClickRoot = () => {
    this.input.focus();
  }

  _handleInputChange = (event) => {
    const strValue = event.target.value
    this._updateValue(strValue)
  }

  _handleInputKeyDown = (event) => {
    switch(event.keyCode){
      // enter
       case 13 : {
         if (this.isOnKeyDownEnterFn){
           this.props.onKeyDownEnter();
         }
       break;}
      // esc
       case 27 :{
          const { value, initedValue } = this.state
          if ( value !== initedValue || ""+initedValue === "0") {
            this._callOnChangeMode(2);
            this.setState({ mode : 2, value : initedValue })
          } else {
            this._callOnChangeMode(1);
            this.setState({ mode : 1, value : 0 })
          }
       break;}
       //up
       case 38 : {
         event.preventDefault();
         this._increaseOnStep();
       break;}
       //down
       case 40 : {
        event.preventDefault();
        this._decreaseOnStep();
       break;}
       default : return undefined;
    }
  }

  _callOnChangeMode = (nextMode) => {
    const { mode } = this.state
    if (this.isOnChangeModeFn && mode !== nextMode){
      const { inputKey, onChangeMode } = this.props
      onChangeMode(inputKey, nextMode);
    }
  }

  _updateValue = (strValue) => {
    const nextMode = this._calcMode(strValue)
    this._callOnChangeMode(nextMode);
    this.setState({
      mode : nextMode,
      value : strValue
    })
  }

  _refInput = input => this.input = input

  render(){
    const { inputStyle, id } = this.props
        , { value, mode } = this.state
        , _hrStyle = _hmModeStyle[mode]

    return (
      <div
         style={STYLE.ROOT}
         onClick={this._handleClickRoot}
      >
        <button
           style={{ ...STYLE.ARROW, ...STYLE.ARROW_PLUS}}
           onClick={this._increaseOnStep}
        />
        <div style={STYLE.DIV_INPUT}>
          <input
            ref={this._refInput}
            id={id}
            type="text"
            style={{ ...STYLE.INPUT, ...inputStyle}}
            value={value}
            onChange={this._handleInputChange}
            onKeyDown={this._handleInputKeyDown}
          />
          <hr style={{...STYLE.HR, ..._hrStyle}} />
        </div>
        <button
           style={{ ...STYLE.ARROW, ...STYLE.ARROW_MINUS}}
           onClick={this._decreaseOnStep}
        />
      </div>
    );
  }

  getValue(){
    return parseFloat(this.state.value);
  }

  setMode(mode){
    if ( mode === 2){
      const { value } = this.state
      this.setState({ mode, initedValue : value })
    } else {
      this.setState({ mode })
    }
  }

}

export default InputFloat
