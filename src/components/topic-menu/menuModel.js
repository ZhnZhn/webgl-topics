
import Actions from '../../flux/actions/RouterTopicActions'

const menuModel = [
  {
    caption : 'WebGL',
    items : [
      { title: "Random Triangles" , onClick : () => Actions.viewTopic('RANDOM_TRIANGLES') },
      { title: "Corona" , onClick : () => Actions.viewTopic('CORONA') },
      { title: "Plane", onClick :  () => Actions.viewTopic('PLANE') },
      { title: "Cube", onClick :  () => Actions.viewTopic('CUBE') },
      { title: "TextureImage", onClick :  () => Actions.viewTopic('TEXTURE_IMAGE') },
      { title: "CubeWithLight", onClick :  () => Actions.viewTopic('CUBE_WITH_LIGHT') },
      { title: "CubeTransparent", onClick :  () => Actions.viewTopic('CUBE_TRANSPARENT') }
    ]
  }
];

export default menuModel
