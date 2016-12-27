'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var STYLE = {
  rootDiv: {
    position: 'relative',
    display: 'inline-block',
    backgroundColor: '#E1E1CB',
    width: '170px'
  },
  inputText: {
    background: 'transparent none repeat scroll 0 0',
    border: 'medium none',
    outline: 'medium none',
    height: '30px',
    paddingLeft: '10px',
    color: 'green',
    width: '140px',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  rootOptionDiv: {
    position: 'absolute',
    left: 0,
    backgroundColor: '#E1E1CB',
    color: 'green',
    width: '170px',
    //height: '160px',
    zIndex: '10',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px'
  },
  optionDiv: {
    //height: '160px',
    minHeight: '160px',
    maxHeight: '200px',
    overflow: 'auto'
  },
  spinnerCell: {
    position: 'relative',
    left: '8px',
    top: '4px',
    display: 'inline-block',
    width: '16px',
    height: '16px'
  },
  spinnerFailedCell: {
    position: 'relative',
    left: '8px',
    top: '4px',
    display: 'inline-block',
    width: '16px',
    height: '16px',
    borderColor: '#F44336',
    cursor: 'pointer'
  },
  arrowCell: {
    cursor: 'pointer',
    //display: table-cell
    position: 'relative',
    textAlign: 'center',
    verticalAlign: 'middle',
    //width: '25px',
    width: '35px',
    paddingRight: '5px',
    marginLeft: '10px'

  },
  arrow: {
    borderColor: '#999 transparent transparent',
    borderStyle: 'solid',
    borderWidth: '5px 5px 2.5px',
    //borderWidth: '10px 10px 5px',
    display: 'inline-block',
    height: '0px',
    width: '0px'
  },
  inputHr: {
    borderWidth: 'medium medium 2px',
    borderStyle: 'none none solid',
    borderColor: '#1B75BB',
    borderImage: 'none',
    margin: 0,
    marginLeft: '10px',
    marginBottom: '5px',
    width: '150px'

  },
  itemDiv: {
    cursor: 'pointer',
    paddingTop: '4px',
    paddingLeft: '5px',
    paddingBottom: '4px'
    //lineHeight: '14px'
  },
  itemOdd: {
    backgroundColor: '#C3C3AC'
  },
  itemEven: {
    backgroundColor: '#D5D5BC'
  },
  optionsFooter: {
    backgroundColor: 'silver',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px'
  },
  fileredSpan: {
    display: 'inline-block',
    color: 'gray',
    fontWeight: 'bold',
    //height: '20px',
    paddingLeft: '10px',
    paddingTop: '4px',
    paddingBottom: '4px'
  }
};

exports.default = STYLE;
//# sourceMappingURL=D:\_Dev\_React\_WebGL_Topic\js\components\zhn-atoms\InputSelect.Style.js.map