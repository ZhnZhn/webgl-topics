
import ID from '../topics/ID';
import Actions from '../../flux/actions/RouterTopicActions'

const menuModel = [
  {
    caption : 'WebGL with gl-matrix',
    items : [
      {
        id : ID.RANDOM_TRIANGLES,
        title: "Random Triangles" ,
        onClick : () => Actions.viewTopic(ID.RANDOM_TRIANGLES)
      },{
        id : ID.CROWN,
        title: "Crown Sample" ,
        onClick : () => Actions.viewTopic(ID.CROWN)
      },{
        id : ID.PLANE,
        title: "Plane",
        onClick : () => Actions.viewTopic(ID.PLANE)
      },{
        id : ID.CUBE,
        title: "Cube",
        onClick : () => Actions.viewTopic(ID.CUBE)
      },{
        id : ID.TEXTURE_IMAGE,
        title: "TextureImage",
        onClick : () => Actions.viewTopic(ID.TEXTURE_IMAGE)
      },{
        id : ID.CUBE_WITH_LIGHT,
        title: "CubeWithLight",
        onClick : () => Actions.viewTopic(ID.CUBE_WITH_LIGHT)
      },{
        id : ID.CUBE_TRANSPARENT,
        title: "CubeTransparent",
        onClick : () => Actions.viewTopic(ID.CUBE_TRANSPARENT)
      }
    ]
  }
];

export default menuModel
