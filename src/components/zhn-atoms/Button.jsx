import React, { PropTypes } from 'react'

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

Button.propTypes = {
  caption: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
}
Button.defaultProps = {
  onClick: () => {}
}

export default Button
