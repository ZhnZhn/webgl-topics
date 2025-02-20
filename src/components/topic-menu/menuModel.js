import {
  ID_RANDOM_TRIANGLES,
  ID_CROWN,
  ID_PLANE,
  ID_CUBE,
  ID_CUBE_WITH_LIGHT,
  ID_CUBE_TRANSPARENT
} from '../topics/ID';
import { setTopicId } from '../../flux/useWebGLStore';

const _crItem = (
  id,
  title
) => ({
  id,
  title,
  onClick: () => setTopicId(id)
})

const ITEM_CONFIG = [
  [
    ID_PLANE,
    'Plane'
  ],[
    ID_RANDOM_TRIANGLES,
    'Random Triangles'
  ],[
    ID_CROWN,
    'Crown Sample'
  ],[
    ID_CUBE,
    'Cube',
  ],[
    ID_CUBE_WITH_LIGHT,
    'Cube With Light'
  ],[
    ID_CUBE_TRANSPARENT,
    'Cube Transparent'
  ]
];

const menuModel = [{
  caption: 'WebGL with gl-matrix',
  items: ITEM_CONFIG.map(config => _crItem(config[0], config[1]))
}];

export default menuModel
