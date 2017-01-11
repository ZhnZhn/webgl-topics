import React from 'react';

const STYLE = {
  LINK : {
    display: 'table-cell'
  },
  PRO : {
    marginLeft : '4px',
    padding: '3px 7px',
    display: 'inline-block',
    borderRadius: '3px',
    color: '#ffffff',
    textDecoration: 'none',
    background: '#ef494f',
    fontWeight : '700'
  }
}

const EggHeadLink = ({ style, title, href, isPro }) => {
  const _proEl = (isPro)
          ? (<span style={STYLE.PRO}>P</span>)
          : undefined;
  return (
    <a
       className="native-link"
       style={Object.assign({}, STYLE.LINK, style)}
       href={href}
    >
      <span>{title}</span>
      {_proEl}
    </a>
  );
}

export default EggHeadLink
