
import React from 'react';

import MenuPart from './MenuPart';

const Menu = React.createClass({

 _renderMenuParts(toogleStyle, menuModel, topicId){
    return menuModel.map((menuPart, index) => {
      return (
         <MenuPart
            key={index}
            toogleStyle={toogleStyle}
            dataModel={menuPart}
            topicId={topicId}
          />
      );
    })
  },

  render(){
    const { rootStyle, toogleStyle, menuModel, topicId } = this.props

    return (
      <div style={rootStyle}>
        { this._renderMenuParts(toogleStyle, menuModel, topicId)}
      </div>
    );
  }
});

export default Menu
