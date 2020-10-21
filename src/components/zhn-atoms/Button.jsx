import STYLE from './Button.Style'

const Button = ({
  caption,
  style,
  onClick=() => {}
}) => (
  <button
    className="bt"
    style={{ ...STYLE.BT, ...style }}
    onClick={onClick}
  >
   {caption}
  </button>
)

/*
Button.propTypes = {
  caption: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
}
*/


export default Button
