
import React from 'react';

import MenuPart from './MenuPart';

const Menu = React.createClass({

  _renderMenuParts(menuModel){
    return menuModel.map((menuPart, index) => {
      return (
         <MenuPart dataModel={menuPart} key={index} />
      );
    })
  },

  render(){
    const { menuModel, rootStyle } = this.props

    return (
      <div style={rootStyle}>
        { this._renderMenuParts(menuModel)}
      </div>
    );
  }
});

export default Menu
