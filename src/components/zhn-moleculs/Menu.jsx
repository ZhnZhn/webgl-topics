
import MenuPart from './MenuPart';

const _renderMenuParts = (toogleStyle, menuModel, topicId) => {
   return menuModel.map((menuPart, index) => (
      <MenuPart
         key={index}
         toogleStyle={toogleStyle}
         dataModel={menuPart}
         topicId={topicId}
       />
   ));
 }

const Menu = ({
  rootStyle, toogleStyle,
  menuModel,
  topicId
}) => {
  return (
    <div style={rootStyle}>
      {_renderMenuParts(toogleStyle, menuModel, topicId)}
    </div>
  );
}

export default Menu
