import {
  CL_OPTIONS_ROW
} from './CL';

/*eslint-disable jsx-a11y/click-events-have-key-events*/
const OptionStack = ({
  options,
  indexActiveOption,
  propCaption,
  ItemOptionComp,
  onClick
}) => options
  .map((item, index)=>(<div
      role="option"
      aria-selected={indexActiveOption === index}
      tabIndex="0"
      key={index}
      className={CL_OPTIONS_ROW}
      data-index={index}
      onClick={(event) => onClick(item, event)}
    >
      <ItemOptionComp
         item={item}
         propCaption={propCaption}
      />
    </div>
  ));
/*eslint-enable jsx-a11y/click-events-have-key-events*/

export default OptionStack
