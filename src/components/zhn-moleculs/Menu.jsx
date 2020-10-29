
import MenuPart from './MenuPart';

const _renderMenuParts = (toogleStyle, menuModel, topicId) => menuModel
 .map((menuPart, index) => (
    <MenuPart
      key={index}
      toogleStyle={toogleStyle}
      dataModel={menuPart}
      topicId={topicId}
    />
 ));


const Menu = ({
  style, toogleStyle,
  menuModel,
  topicId
}) => (
  <div style={style}>
    {_renderMenuParts(toogleStyle, menuModel, topicId)}
  </div>
);


export default Menu
