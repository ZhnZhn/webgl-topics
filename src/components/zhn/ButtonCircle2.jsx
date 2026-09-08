import { crCn } from '../styleFn';

const CL_BT_CIRCLE_2 = 'zhn-bt-circle2';

const ButtonCircle2 = ({
  className,
  style,
  caption,
  onClick,
  ...restProps
}) => caption ? (
  <button
     {...restProps}
     type="button"
     className={crCn(CL_BT_CIRCLE_2, className)}
     style={style}
     onClick={onClick}
  >
    {caption}
  </button>
) : null;

export default ButtonCircle2
