import React from 'react'

const Label = ({ style, title, id }) => (
  <label
     className="not-selected"
     style={style}
     htmlFor={id}
  >
    {title}
  </label>
)

/*
Label.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  id: PropTypes.string
}
*/

export default Label
