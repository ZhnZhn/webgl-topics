import { Component } from 'react';

const CL_NOT_SELECTED = "not-selected"
, CL_SHOW_POPUP = 'show-popup'
, S_ROOT_DIV = {
  lineHeight: 1.5,
  backgroundColor: '#4d4d4d'
}
, S_CAPTION = {
  paddingLeft: 4,
  verticalAlign: 'top',
  color: 'rgba(164, 135, 212, 1)',
  fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer'
}
, S_DIV_SVG = {
  display: 'inline-block',
  width: 16,
  height: 16,
}
, S_SVG = { display: 'inline-block' }
, S_BLOCK = { display: 'block' }
, S_NONE = { display: 'none' };



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
      style,
      toogleStyle,
      caption,
      children
    } = this.props
    , {
      isOpen,
      pathOpen,
      fillOpen,
      pathClose,
      fillClose
    } = this.state;
    let pathV, fillV, divStyle, classShow;
    if (isOpen){
      pathV = pathOpen;
      fillV = fillOpen;
      divStyle = S_BLOCK;
      classShow = CL_SHOW_POPUP;

    } else {
      pathV = pathClose;
      fillV = fillClose;
      divStyle = S_NONE;
      classShow = null;
    }

    return (
      <div style={{...S_ROOT_DIV, ...style}}>
        <div className={CL_NOT_SELECTED}
             style={toogleStyle}
             onClick={this._hClickOpenClose}
        >
          <div style={S_DIV_SVG}>
             <svg
                viewBox="0 0 16 16"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                style={S_SVG}
              >
             <path
                d={pathV}
                fill={fillV}
                strokeWidth="1" stroke="yellow"
             />
             </svg>
         </div>
         <span style={S_CAPTION} >
            {caption}
         </span>
      </div>
      <div
        className={classShow}
        style={divStyle}
      >
        {children}
      </div>
     </div>
    );
  }
}

export default OpenClose
