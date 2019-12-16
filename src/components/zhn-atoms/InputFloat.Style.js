
const STYLE = {
  ROOT : {
    position : 'relative',
    display : 'inline-block',
    backgroundColor: 'rgb(225, 225, 203)',
    marginLeft : '5px',
    marginRight : '5px',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)'
  },
  DIV_INPUT : {
     display: 'inline-block'
  },
  INPUT : {
    display : 'inline',
    background: 'transparent none repeat scroll 0 0',
    border: 'medium none',
    outline: 'medium none',
    height: '26px',
    color: 'green',
    width: '40px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor : '#E1E1CB',
    marginRight : '5px'
  },
  HR : {
    borderWidth: 'medium medium 2px',
    borderStyle: 'none none solid',
    borderColor: 'red',
    borderImage: 'none',
    margin: 0,
    //marginLeft: '5px',
    marginBottom: '5px',
    width: '100%'
    //width: '75%'
  },
  VALID_CHANGED : {
    borderColor: '#673ab7'
  },
  VALID_NOT_CHANGED : {
    borderColor: '#9e9e9e'
  },
  NOT_VALID : {
    borderColor: '#F44336'
  },

  ARROW : {
    display: 'inline-block',
    position: 'relative',
    //borderColor: 'rgb(153, 153, 153) transparent transparent',
    //borderColor: 'rgb(1, 1, 1) transparent transparent',
    borderColor: 'rgb(103, 58, 183) transparent transparent',
    borderStyle: 'solid',
    borderWidth: '12px 6px 4px',
    cursor : 'pointer'
  },
  ARROW_PLUS : {
    transform: 'rotateX(180deg)',
    marginLeft: '6px',
    marginRight: '6px',
    top: '-16px'
  },
  ARROW_MINUS : {
    top: '-12px',
    marginRight: '6px'
  }
}

export default STYLE
