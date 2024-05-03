import {
  useRef,
  useImperativeHandle,
  getRefValue
} from '../uiApi';

const S_ARROW_CELL = {
  position: 'absolute',
  top: 10,
  right: 0,
  width: 35,
  paddingRight: 5,
  textAlign: 'center',
  verticalAlign: 'middle',
  cursor: 'pointer'
}
, S_ARROW = {
  position: 'relative',
  top: 2,
  display: 'inline-block',
  height: 0,
  width: 0,
  borderColor: '#999 transparent transparent',
  borderStyle: 'solid',
  borderWidth: '10px 8px 4px'
}
, ANIMATION_CIRCLE = "circle infinite 1.25s linear"
, BORDER_COLOR = "#1b75bb transparent transparent";

const _getRefNodeStyle = ref => {
  const node = getRefValue(ref)
  return node
    ? node.style || {}
    : {}
};

const ArrowCell = ({
  refEl,
  arrowStyle,
  onClick
}) => {
  const _refArrowCell = useRef()
  , _refArrow = useRef();

  useImperativeHandle(refEl, () => ({
    startAnimation: () => {
      _getRefNodeStyle(_refArrowCell).animation = ANIMATION_CIRCLE;
      _getRefNodeStyle(_refArrow).borderColor = BORDER_COLOR;
    },
    stopAnimation: () => {
      _getRefNodeStyle(_refArrowCell).animation = "";
    }
  }))

  return (
    <button
       ref={_refArrowCell}
       style={S_ARROW_CELL}
       tabIndex="-1"
       onClick={onClick}>
      <span
         ref={_refArrow}
         style={{...S_ARROW, ...arrowStyle}}
      />
    </button>
  );
};

export default ArrowCell
