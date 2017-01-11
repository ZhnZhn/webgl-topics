
import React from 'react';

import MenuPart from './MenuPart';

const Menu = React.createClass({

 _renderMenuParts(menuModel, topicId){
    return menuModel.map((menuPart, index) => {
      return (
         <MenuPart
            key={index}
            dataModel={menuPart}
            topicId={topicId}
          />
      );
    })
  },

  render(){
    const { rootStyle, menuModel, topicId } = this.props

    return (
      <div style={rootStyle}>
        { this._renderMenuParts(menuModel, topicId)}
      </div>
    );
  }
});

export default Menu
