import React, { Component, PropTypes } from 'react';

import STYLE from './ButtonSet.Style';

const _hmModeStyle = {
  0 : Object.assign({}, STYLE.BT, STYLE.NOT_VALID),
  1 : Object.assign({}, STYLE.BT, STYLE.VALID_CHANGED),
  2 : Object.assign({}, STYLE.BT, STYLE.VALID_NOT_CHANGED),
}

class ButtonSet extends Component{

  constructor(props){
    super(props);
    this.state = {
      mode : props.mode
    }
  }

  render(){
    const { onClick } = this.props
        , { mode } = this.state
        , _style = _hmModeStyle[mode]
        , _onClick = (mode === 1)
             ? onClick
             : undefined
    return (
      <span
        style={_style}
        tabIndex="0"
        onClick={_onClick}
      >
       Set
      </span>
    );
  }

  setMode = (mode) => {    
    this.setState({ mode })
  }
}

ButtonSet.defaultProps = {
  mode : 2
}

ButtonSet.propTypes = {
  mode : PropTypes.number,
  onClick : PropTypes.func.isRequired
}

export default ButtonSet
