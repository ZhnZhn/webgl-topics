import React from 'react';

const Label = ({style, title }) => (
  <span
     className="not-selected"
     style={style}
  >
    {title}
  </span>
);

export default Label
