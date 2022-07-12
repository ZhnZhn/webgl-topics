import OpenClose from '../zhn-atoms/OpenClose';

const S_ROOT = {
  lineHeight: 2.5,
  backgroundColor: '#24282A'
}
, S_ITEM = { color: 'gray' }
, S_ITEM_CURRENT = { borderRight: '8px solid #1b75bb' }

const _renderMenuItems = (
  items,
  topicId
) => items.map((item, index) => {
    const {id, title, onClick} = item
    , className = (index % 2)
         ? 'row__topic__even not-selected'
         : 'row__topic__odd not-selected'
    , _style = (id === topicId)
         ? S_ITEM_CURRENT
         : void 0;
    return (
       <div
           key={id}
           className={className}
           style={{...S_ITEM, ..._style}}
           onClick={onClick}
        >
          {title}
       </div>
    );
})


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
       {_renderMenuItems(items, topicId)}
    </OpenClose>
  );
}

export default MenuPart
