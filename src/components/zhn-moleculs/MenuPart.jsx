import useKeyEnter from '../hooks/useKeyEnter';
import OpenClose from '../zhn-atoms/OpenClose';

const CL_ROW_TOPIC = 'row__topic'
, S_ROOT = {
  backgroundColor: '#24282a'
}
, S_ITEM = {
  color: 'grey'
}
, S_ITEM_CURRENT = {
  borderRight: '8px solid #1b75bb'
};

const MenuItem = (props) => {
  const _hKeyDown = useKeyEnter(props.onClick);
  return (
    <div
        role="menuitem"
        tabIndex="0"
        className={CL_ROW_TOPIC}
        style={{...S_ITEM, ...props.style}}
        onClick={props.onClick}
        onKeyDown={_hKeyDown}
     >
       {props.title}
    </div>
  );
}

const MenuPart = (props) => {
  const {
    caption,
    items
  } = props.dataModel || {};
  return (
    <OpenClose
       caption={caption}
       style={S_ROOT}
       toogleStyle={props.toogleStyle}
    >
      {items.map(({id, title, onClick}) => (
          <MenuItem
           key={id}
           style={id === props.topicId ? S_ITEM_CURRENT : void 0}
           title={title}
           onClick={onClick}
          />
      ))}
    </OpenClose>
  );
}

export default MenuPart
