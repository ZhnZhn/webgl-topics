
import Actions from '../../flux/actions/RouterTopicActions'

const menuModel = [
  {
    caption : 'WebGL',
    items : [
      {
        id : 'RANDOM_TRIANGLES',
        title: "Random Triangles" ,
        onClick : () => Actions.viewTopic('RANDOM_TRIANGLES')
      },{
        id : 'CORONA',
        title: "Corona" ,
        onClick : () => Actions.viewTopic('CORONA')
      },{
        id : 'PLANE',
        title: "Plane",
        onClick : () => Actions.viewTopic('PLANE')
      },{
        id : 'CUBE',
        title: "Cube",
        onClick : () => Actions.viewTopic('CUBE')
      },{
        id : 'TEXTURE_IMAGE',
        title: "TextureImage",
        onClick : () => Actions.viewTopic('TEXTURE_IMAGE')
      },{
        id : 'CUBE_WITH_LIGHT',
        title: "CubeWithLight",
        onClick : () => Actions.viewTopic('CUBE_WITH_LIGHT')
      },{
        id : 'CUBE_TRANSPARENT',
        title: "CubeTransparent",
        onClick : () => Actions.viewTopic('CUBE_TRANSPARENT')
      }
    ]
  }
];

export default menuModel
