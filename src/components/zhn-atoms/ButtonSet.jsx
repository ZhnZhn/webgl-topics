import React from 'react';

const STYLE = {
  BT_SET : {
    color: 'burlywood',
    fontSize: '16px',
    fontWeight: 'bold',
    border: '2px solid burlywood',
    borderRadius: '8px',
    padding: '4px 6px',
    marginLeft: '16px',
    cursor: 'pointer'
  }
}

const ButtonSet = ({ onClick }) => (
  <span
     style={STYLE.BT_SET}
     onClick={onClick}
  >
    Set
  </span>
)

export default ButtonSet
