import useKeyEnter from '../hooks/useKeyEnter';
import OpenClose from '../zhn-atoms/OpenClose';

const CL_ROW_TOPIC = 'row__topic'
, S_ROOT = {
  backgroundColor: '#24282a'
}
, S_ITEM = {
  color: 'gray'
}
, S_ITEM_CURRENT = {
  borderRight: '8px solid #1b75bb'
};

const MenuItem = ({
  style,
  title,
  onClick
}) => {
  const _hKeyDown = useKeyEnter(onClick);
  return (
    <div
        role="menuitem"
        tabIndex="0"
        className={CL_ROW_TOPIC}
        style={{...S_ITEM, ...style}}
        onClick={onClick}
        onKeyDown={_hKeyDown}
     >
       {title}
    </div>
  );
}

const MenuPart = ({
  dataModel,
  topicId,
  toogleStyle
}) => {
  const {
    caption,
    items
  } = dataModel || {};
  return (
    <OpenClose
       caption={caption}
       style={S_ROOT}
       toogleStyle={toogleStyle}
    >
      {items.map(({id, title, onClick}) => (
          <MenuItem
           key={id}
           style={id === topicId ? S_ITEM_CURRENT : void 0}
           title={title}
           onClick={onClick}
          />
      ))}
    </OpenClose>
  );
}

export default MenuPart
