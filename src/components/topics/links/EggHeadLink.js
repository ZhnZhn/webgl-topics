const CL_NATIVE_LINK = 'native-link'
, S_LINK = { display: 'table-cell' }
, S_PRO = {
   display: 'inline-block',
   color: '#ffffff',
   marginLeft: 4,
   padding: '3px 7px',
   borderRadius: 3,
   fontWeight: '700',
   textDecoration: 'none',
   background: '#ef494f',
};

const EggHeadLink = ({
  isPro,
  style,
  title,
  href
}) => (
  <a
     className={CL_NATIVE_LINK}
     style={{...S_LINK, ...style}}
     href={href}
  >
    <span>{title}</span>
    {
      isPro
        ? <span style={S_PRO}>P</span>
        : null
    }
  </a>
);

export default EggHeadLink
