import {
  useState,
  useImperativeHandle
} from '../uiApi';

const CL_BT = "bt"
, S_BT = {
  color: '#fefcff',
  height: 30,
  padding: '4px 6px',
  marginLeft: 16,
  fontSize: '16px',
  fontWeight: 'bold',
  backgroundColor: '#673ab7',
  border: '2px solid #673ab7',
  borderRadius: 8
}
, S_VALID_CHANGED = {
  border: '2px solid #673ab7'
}
, S_VALID_NOT_CHANGED = {
  backgroundColor: '#9e9e9e',
  border: '2px solid #9e9e9e'
}
, S_NOT_VALID = {
  color: '#f44336',
  backgroundColor: '#9e9e9e',
  border: '2px solid #9e9e9e'
};

const HM_MODE_STYLE = {
  0 : {...S_BT, ...S_NOT_VALID},
  1 : {...S_BT, ...S_VALID_CHANGED},
  2 : {...S_BT, ...S_VALID_NOT_CHANGED},
};

const ButtonSet = ({
  refEl,
  mode=2,
  style,
  onClick
}) => {
  const [btMode, setBtMode] = useState(mode);

  useImperativeHandle(refEl, () => ({
    setMode: setBtMode
  }), [])

  const _style = HM_MODE_STYLE[btMode]
  , _onClick = (btMode === 1)
      ? onClick
      : void 0;

  return (
    <button
      className={CL_BT}
      style={{...style, ..._style}}
      onClick={_onClick}
    >
     Set
    </button>
  );
};

/*
ButtonSet.propTypes = {
  mode: PropTypes.number,
  style: PropTypes.object,
  onClick: PropTypes.func
}
*/

export default ButtonSet
