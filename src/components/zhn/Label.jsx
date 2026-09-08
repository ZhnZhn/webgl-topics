const CL_NOT_SELECTED = "not-selected";

const Label = (props) => (
  <label
     className={CL_NOT_SELECTED}
     style={props.style}
     htmlFor={props.id}
  >
    {props.title}
  </label>
);

export default Label
