import MenuPart from './MenuPart';

const Menu = (props) => (
  <div style={props.style}>
    {props.menuModel.map(menuPart => (
        <MenuPart
          key={props.topicId}
          toogleStyle={props.toogleStyle}
          topicId={props.topicId}
          dataModel={menuPart}
        />
    ))}
  </div>
);


export default Menu
