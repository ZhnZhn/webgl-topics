import crCn from '../zhn-utils/crCn';

const CL_BT_CIRCLE_2 = 'zhn-bt-circle2';

const ButtonCircle2 = ({
  className,
  style,
  caption='',
  onClick,
  ...rest
}) => (
  <button
     {...rest}
     type="button"
     className={crCn(CL_BT_CIRCLE_2, className)}
     style={style}
     onClick={onClick}
  >
    <div>
      {caption}
    </div>
  </button>
);

export default ButtonCircle2
