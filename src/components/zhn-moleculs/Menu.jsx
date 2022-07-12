import MenuPart from './MenuPart';

const Menu = ({
  style,
  toogleStyle,
  menuModel,
  topicId
}) => (
  <div style={style}>
    {menuModel.map(menuPart => (
        <MenuPart
          key={topicId}
          toogleStyle={toogleStyle}
          dataModel={menuPart}
          topicId={topicId}
        />
    ))}
  </div>
);


export default Menu
