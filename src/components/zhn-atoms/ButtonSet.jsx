import React, { Component } from 'react';

import STYLE from './ButtonSet.Style';

const _hmModeStyle = {
  0 : { ...STYLE.BT, ...STYLE.NOT_VALID },
  1 : { ...STYLE.BT, ...STYLE.VALID_CHANGED },
  2 : { ...STYLE.BT, ...STYLE.VALID_NOT_CHANGED },
}

class ButtonSet extends Component{
  /*
  static propTypes = {
    mode: PropTypes.number,
    onClick: PropTypes.func
  }
  */
  static defaultProps = {
    mode: 2,
    onClick: () => {}
  }

  constructor(props){
    super(props);
    this.state = {
      mode : props.mode
    }
  }

  render(){
    const { style, onClick } = this.props
        , { mode } = this.state
        , _style = _hmModeStyle[mode]
        , _onClick = (mode === 1)
             ? onClick
             : void 0;
    return (
      <button
        className="bt"
        style={{ ...style, ..._style}}
        onClick={_onClick}
      >
       Set
      </button>
    );
  }

  setMode = (mode) => {
    this.setState({ mode })
  }
}

export default ButtonSet
