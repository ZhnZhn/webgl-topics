import React from 'react';

import STYLE from './Button.Style'

const Button = ({ caption, style, onClick }) => (
  <button
    className="bt"
    style={Object.assign({}, STYLE.BT, style)}
    tabIndex="0"
    onClick={onClick}
  >
   {caption}
  </button>
)

export default Button
