import React, { Component, PropTypes } from 'react';

import STYLE from './InputFloat.Style';

const _hmModeStyle = {
  0 : STYLE.NOT_VALID,
  1 : STYLE.VALID_CHANGED,
  2 : STYLE.VALID_NOT_CHANGED
}

class InputFloat extends Component {

  constructor(props){
    super(props);

    const { value } = props
    this.state = {
      mode : (this._onTest(value)) ? 2 : 0,
      value : value,
      initedValue : value
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps !== this.props){
      const { value } = nextProps
      this.setState({
        mode : (this._onTest(value)) ? 2 : 0,
        value : value,
        initedValue : value
      });
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

  _onTest = (str) => {
    const trimmed = (""+str).trim()
        , result = parseFloat(trimmed)
    if (isNaN(result)){
      return false;
    }
    if ((""+result).length !== trimmed.length){
      return false;
    }

    return true;
  }

  _isChanged = (value) => {
     return this.state.initedValue !== parseFloat(value);
  }

  _handleInputChange = (event) => {
    const strValue = event.target.value
    this._updateValue(strValue)
  }

  _handleInputKeyDown = (event) => {
    switch(event.keyCode){
       case 27 :
          this._callOnChangeMode(2);
          this.setState({
             mode : 2,
             value : this.state.initedValue
          })
       break;
       default : return undefined;
    }
  }

  _callOnChangeMode = (nextMode) => {
    if (typeof this.props.onChangeMode === "function"){
      const { mode } = this.state
      if ( mode !== nextMode) {
        const { inputKey, onChangeMode } = this.props
        onChangeMode(inputKey, nextMode);
      }
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

  render(){
    const { inputStyle } = this.props
        , { value, mode } = this.state
        , _hrStyle = _hmModeStyle[mode]

    return (
      <div style={STYLE.ROOT}>
        <input
          type="text"
          style={Object.assign({}, STYLE.INPUT, inputStyle)}
          value={value}
          onChange={this._handleInputChange}
          onKeyDown={this._handleInputKeyDown}
        />
        <hr style={Object.assign({}, STYLE.HR, _hrStyle)}></hr>
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

  /*
  setValue(value){
    this.setState({ value })
  }
  */
}

InputFloat.defaultProps = {
  value : ''
}

InputFloat.propTypes = {
  inputKey : PropTypes.string.isRequired,
  value : PropTypes.string,
  inputStyle : PropTypes.object,
  onChangeMode : PropTypes.func
}

export default InputFloat
