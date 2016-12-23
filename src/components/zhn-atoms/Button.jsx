import React from 'react';

import STYLE from './Button.Style'

const Button = ({ caption, style, onClick }) => (
  <span
    style={Object.assign({}, STYLE.BT, style)}
    tabIndex="0"
    onClick={onClick}
  >
   {caption}
  </span>
)

export default Button
