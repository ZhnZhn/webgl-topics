import { Component } from '../uiApi';

const S_INPUT_TEXT = {
  display : 'inline',
  color: 'green',
  width: 40,
  height: 26,
  paddingLeft: 5,
  margin: '0 5px',
  fontSize: '16px',
  fontWeight: 'bold',
  backgroundColor : '#e1e1cb',
  background: 'transparent none repeat scroll 0 0',
  border: 'medium none',
  outline: 'medium none',
};

class InputText extends Component {

  constructor(props){
    super(props);

    this.state = {
      value: props.initValue || ''
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps !== this.props){
      this.setState({ value : nextProps.initValue });
    }
  }

  _handleInputChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render(){
    const { style } = this.props
    , { value } = this.state;
    return (
      <input
        type="text"
        style={{...S_INPUT_TEXT, ...style}}
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

/*
InputText.propTypes = {
  initValue : PropTypes.string,
  style : PropTypes.object
}
*/

export default InputText
