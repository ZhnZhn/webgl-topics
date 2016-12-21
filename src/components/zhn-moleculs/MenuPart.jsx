import React from 'react';

import OpenClose from '../zhn-atoms/OpenClose';

const STYLE = {
  ROOT : {
    lineHeight: 2,
    paddingLeft: '8px',
    backgroundColor: '#24282A'
  }
}

const _renderMenuItems = function(items){
  return items.map((item, index) => {

    const {title, onClick} = item
        , className = (index % 2)
             ? 'row__topic__even not-selected'
             : 'row__topic__odd not-selected'
    return (
       <div
           key={index}
           className={className}
           style={ {color: 'gray' }}
           onClick={onClick}
        >
          {title}
       </div>
    )
  })
}

const MenuPart = (props) => {
  const { dataModel } = props
      , { caption, items} = dataModel;
  return (
    <OpenClose caption={caption} style={STYLE.ROOT}>
        {_renderMenuItems(items)}
    </OpenClose>
  )
}

export default MenuPart
