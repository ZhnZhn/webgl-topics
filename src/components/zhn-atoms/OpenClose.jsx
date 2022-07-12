import useToggle from '../hooks/useToggle';

const CL_NOT_SELECTED = "not-selected"
, CL_SHOW_POPUP = 'show-popup'
, S_ROOT_DIV = {
  lineHeight: 1.5,
  backgroundColor: '#4d4d4d'
}
, S_CAPTION = {
  paddingLeft: 4,
  verticalAlign: 'top',
  color: 'rgba(164, 135, 212, 1)',
  fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer'
}
, S_DIV_SVG = {
  display: 'inline-block',
  width: 16,
  height: 16,
}
, S_SVG = { display: 'inline-block' }
, S_BLOCK = { display: 'block' }
, S_NONE = { display: 'none' };


const PATH_OPEN = 'M 2,14 L 14,14 14,2 2,14'
, FILL_OPEN = 'yellow'
, PATH_CLOSE = 'M 2,2 L 14,8 2,14 2,2'
, FILL_CLOSE = '#33373A'

const OpenClose = ({
  isClose,
  style,
  toogleStyle,
  caption,
  children
}) => {
  const [
    isOpen,
    toggleIsOpen
  ] = useToggle(!isClose)
  , [
    pathV,
    fillV,
    divStyle,
    classShow
  ] = isOpen
   ? [PATH_OPEN, FILL_OPEN, S_BLOCK, CL_SHOW_POPUP]
   : [PATH_CLOSE, FILL_CLOSE, S_NONE]

  return (
    <div style={{...S_ROOT_DIV, ...style}}>
      <div
         className={CL_NOT_SELECTED}
         style={toogleStyle}
         onClick={toggleIsOpen}
      >
        <div style={S_DIV_SVG}>
           <svg
              viewBox="0 0 16 16"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              style={S_SVG}
            >
           <path
              d={pathV}
              fill={fillV}
              strokeWidth="1" stroke="yellow"
           />
           </svg>
       </div>
       <span style={S_CAPTION} >
          {caption}
       </span>
    </div>
    <div
      className={classShow}
      style={divStyle}
    >
      {children}
    </div>
   </div>
  );
}

export default OpenClose
