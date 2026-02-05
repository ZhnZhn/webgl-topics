import useToggle from '../hooks/useToggle';
import useKeyEnter from '../hooks/useKeyEnter';

const CL_OPEN_CLOSE = "zhn-oc not-selected"
, CL_SHOW_POPUP = 'show-popup'
, DF_CAPTION_COLOR = '#af94dc'
, S_ROOT_DIV = {
  lineHeight: 1.5,
  backgroundColor: '#4d4d4d'
}
, S_CAPTION = {
  color: DF_CAPTION_COLOR,
  paddingLeft: 4,
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
, FILL_OPEN = DF_CAPTION_COLOR
, PATH_CLOSE = 'M 2,2 L 14,8 2,14 2,2'
, FILL_CLOSE = '#33373A';

const OpenClose = (props) => {
  const [
    isOpen,
    toggleIsOpen
  ] = useToggle(!props.isClose)
  , _hKeyDown = useKeyEnter(toggleIsOpen)
  , [
    pathV,
    fillV,
    divStyle,
    classShow
  ] = isOpen
   ? [PATH_OPEN, FILL_OPEN, S_BLOCK, CL_SHOW_POPUP]
   : [PATH_CLOSE, FILL_CLOSE, S_NONE];

  return (
    <div style={{...S_ROOT_DIV, ...props.style}}>
      <div
         role="button"
         tabIndex="0"
         className={CL_OPEN_CLOSE}
         style={props.toogleStyle}
         onClick={toggleIsOpen}
         onKeyDown={_hKeyDown}
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
              strokeWidth="1"
              stroke={DF_CAPTION_COLOR}
           />
           </svg>
       </div>
       <span style={S_CAPTION} >
          {props.caption}
       </span>
    </div>
    <div
      aria-expanded={isOpen}
      className={classShow}
      style={{...props.childrenStyle, ...divStyle}}
    >
      {props.children}
    </div>
   </div>
  );
}

export default OpenClose
