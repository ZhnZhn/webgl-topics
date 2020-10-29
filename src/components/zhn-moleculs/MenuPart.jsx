import OpenClose from '../zhn-atoms/OpenClose';

const STYLE = {
  ROOT: {
    lineHeight: 2.5,
    backgroundColor: '#24282A'
  },
  ITEM: {
    color: 'gray'
  },
  ITEM_CURRENT: {
     //borderRight: '8px solid #80c040'
     borderRight: '8px solid #1b75bb'
  }
}

const _renderMenuItems = function(items, topicId){
  return items.map((item, index) => {

    const {id, title, onClick} = item
        , className = (index % 2)
             ? 'row__topic__even not-selected'
             : 'row__topic__odd not-selected'
        , _style = (id === topicId)
             ? STYLE.ITEM_CURRENT
             : void 0;
    return (
       <div
           key={id}
           className={className}
           style={{...STYLE.ITEM, ..._style}}
           onClick={onClick}
        >
          {title}
       </div>
    )
  })
}

const MenuPart = (props) => {
  const { dataModel, topicId, toogleStyle } = props
      , { caption, items} = dataModel;
  return (
    <OpenClose
        caption={caption}
        style={STYLE.ROOT}
        toogleStyle={toogleStyle}
    >
       {_renderMenuItems(items, topicId)}
    </OpenClose>
  )
}

export default MenuPart
