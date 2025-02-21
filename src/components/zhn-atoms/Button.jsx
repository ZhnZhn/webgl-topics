
const CL_BT = "bt"
, S_BT = {
  position: 'relative',
  color: '#673ab7',
  padding: '6px 8px',
  marginLeft: 16,
  fontSize: '16px',
  fontWeight: 'bold',
  border: '2px solid #673ab7',
  borderRadius: 8
};

const Button = ({
  caption,
  style,
  onClick
}) => (
  <button
    type="button"
    className={CL_BT}
    style={{...S_BT, ...style}}
    onClick={onClick}
  >
   {caption}
  </button>
);

export default Button
