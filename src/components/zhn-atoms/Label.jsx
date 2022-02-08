const CL_NOT_SELECTED = "not-selected";

const Label = ({
  id,
  style,
  title
}) => (
  <label
     className={CL_NOT_SELECTED}
     style={style}
     htmlFor={id}
  >
    {title}
  </label>
);

export default Label
