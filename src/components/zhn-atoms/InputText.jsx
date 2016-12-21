import React, { Component, PropTypes } from 'react';

const STYLE = {
  INPUT_TEXT : {
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
  }
}

class InputText extends Component {

  constructor(props){
    super();

    this.state = {
      value : props.initValue
      //value : ''
    }

    this._handleInputChange = this._handleInputChange.bind(this)
  }

  componentWillReceiveProps(nextProps){
    if (nextProps !== this.props){
      this.setState({ value : nextProps.initValue });
    }
  }

  _handleInputChange(event){
    this.setState({ value : event.target.value })
  }

  render(){
    const {style} = this.props
        , {value} = this.state;
    return (
      <input
        type="text"
        style={Object.assign({}, STYLE.INPUT_TEXT, style)}
        value={value}
        onChange={this._handleInputChange}
      />
    );
  }

  getValue(){
    return this.state.value;
  }

  setValue(value){
    this.setState({value})
  }
}

InputText.defaultProps = {
  initValue : ''
}
InputText.propTypes = {
  initValue : PropTypes.string,
  style : PropTypes.object
}

export default InputText
