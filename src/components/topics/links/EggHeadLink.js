const CL_NATIVE_LINK = 'native-link'
, S_LINK = { display: 'table-cell' };

const EggHeadLink = ({
  style,
  title,
  href
}) => (
  <a
     className={CL_NATIVE_LINK}
     style={{...S_LINK, ...style}}
     href={href}
  >
    {title}
  </a>
);

export default EggHeadLink
