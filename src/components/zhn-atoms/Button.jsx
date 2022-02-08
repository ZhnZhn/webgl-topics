import STYLE from './Button.Style';

const CL_BT = "bt";

const Button = ({
  caption,
  style,
  onClick
}) => (
  <button
    className={CL_BT}
    style={{...STYLE.BT, ...style}}
    onClick={onClick}
  >
   {caption}
  </button>
);

export default Button
