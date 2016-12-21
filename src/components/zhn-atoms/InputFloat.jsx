import React, { Component, PropTypes } from 'react';

const STYLE = {
  ROOT : {
    position : 'relative',
    display : 'inline-block',
    backgroundColor: 'rgb(225, 225, 203)',
    marginLeft : '5px',
    marginRight : '5px'
  },
  INPUT : {
    background: 'transparent none repeat scroll 0 0',
    border: 'medium none',
    outline: 'medium none',
    height: '26px',
    paddingLeft: '5px',
    color: 'green',
    width: '40px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor : '#E1E1CB',
    marginLeft : '5px',
    marginRight : '5px',
    display : 'inline'
  },
  HR : {
    borderWidth: 'medium medium 1px',
    borderStyle: 'none none solid',
    borderColor: 'red',
    borderImage: 'none',
    margin: 0,
    marginLeft: '10px',
    marginBottom: '5px',
    width: '75%'
  }
}

class InputFloat extends Component {

  constructor(props){
    super(props);

    const { value } = props
    this.state = {
      isValid : this._onTest(value),
      value : value
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps !== this.props){
      this.setState({
        isValid : this._onTest(nextProps.value),
        value : nextProps.value
      });
    }
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

  _handleInputChange = (event) => {
    const strValue = event.target.value
    this.setState({
      isValid : this._onTest(strValue),
      value : strValue
    })
  }

  render(){
    const { inputStyle } = this.props
        , { value, isValid } = this.state
        , _hrStyle = isValid
             ? {borderColor: '#1B75BB'}
             : {borderColor: '#F44336'};
    return (
      <div style={STYLE.ROOT}>
        <input
          type="text"
          style={Object.assign({}, STYLE.INPUT, inputStyle)}
          value={value}
          onChange={this._handleInputChange}
        />
        <hr style={Object.assign({}, STYLE.HR, _hrStyle)}></hr>
      </div>
    );
  }

  getValue(){
    return parseFloat(this.state.value);
  }

  setValue(value){
    this.setState({ value })
  }
}

InputFloat.defaultProps = {
  value : ''
}
InputFloat.propTypes = {
  value : PropTypes.string,
  inputStyle : PropTypes.object
}

export default InputFloat
