import { Component } from 'react';
import Big from 'big.js'

import { isFunction, isFloat } from '../../utils/is'

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
, S_ARROW_PLUS = {
  transform: 'rotateX(180deg)',
  margin: '0 6px',
  top: -16
}
, S_ARROW_MINUS = {
  top: -12,
  marginRight: 6
};

const _hmModeStyle = {
  0 : S_NOT_VALID,
  1 : S_VALID_CHANGED,
  2 : S_VALID_NOT_CHANGED
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
         style={S_ROOT}
         onClick={this._handleClickRoot}
      >
        <button
           style={{...S_ARROW, ...S_ARROW_PLUS}}
           onClick={this._increaseOnStep}
        />
        <div style={S_DIV_INPUT}>
          <input
            ref={this._refInput}
            id={id}
            type="text"
            style={{...S_INPUT, ...inputStyle}}
            value={value}
            onChange={this._handleInputChange}
            onKeyDown={this._handleInputKeyDown}
          />
          <hr style={{...S_HR, ..._hrStyle}} />
        </div>
        <button
           style={{...S_ARROW, ...S_ARROW_MINUS}}
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
