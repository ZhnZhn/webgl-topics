import { Component } from 'react'


const S = {
  ROOT_DIV: {
    lineHeight: 1.5,
    backgroundColor: '#4D4D4D'
  },
  CAPTION: {
    paddingLeft: 4,
    verticalAlign: 'top',
    color: 'rgba(164, 135, 212, 1)',
    fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer'
  },
  itemRow : {
    backgroundColor: '#404040'
  }
};

class OpenClose extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.isClose ? false : true,
      pathOpen: "M 2,14 L 14,14 14,2 2,14",
      fillOpen: "yellow",
      pathClose: "M 2,2 L 14,8 2,14 2,2",
      fillClose: "#33373A"
    }
  }

  _hClickOpenClose = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render(){
    const {
      style, toogleStyle,
      caption,
      children
    } = this.props
    , {
      isOpen,
      pathOpen, fillOpen,
      pathClose, fillClose
    } = this.state;
    let pathV, fillV, displayDivStyle, classShow;
    if (isOpen){
      pathV = pathOpen;
      fillV = fillOpen;
      displayDivStyle = 'block';
      classShow = 'show-popup';

    } else {
      pathV = pathClose;
      fillV = fillClose;
      displayDivStyle = 'none';
      classShow = null;
    }

    return (
      <div style={{ ...S.ROOT_DIV, ...style }}>
        <div className="not-selected"
             style={toogleStyle}
             onClick={this._hClickOpenClose}
        >
          <div style={{width: '16px', height: '16px', display: 'inline-block'}}>
             <svg
                viewBox="0 0 16 16" width="100%" height="100%"
                preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
                style={{display: 'inline-block'}}
              >
             <path
                d={pathV}
                fill={fillV}
                strokeWidth="1" stroke="yellow"
             />
             </svg>
         </div>
         <span style={S.CAPTION} >
            {caption}
         </span>
      </div>
      <div className={classShow} style={{display: displayDivStyle}}>
        {children}
      </div>
     </div>
    )
  }
}

export default OpenClose
