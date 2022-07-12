import WebGLTopic from './WebGLTopic';

import {
  ID_RANDOM_TRIANGLES,
  ID_CROWN,
  ID_PLANE,
  ID_CUBE,
  ID_TEXTURE_IMAGE,
  ID_CUBE_WITH_LIGHT,
  ID_CUBE_TRANSPARENT
} from './ID';

import RandomTriangles from './gl-props/RandomTriangles';
import CoronaSample from './gl-props/CoronaSample';
import Plane from './gl-props/Plane';
import Cube from './gl-props/Cube';
import TextureImage from './gl-props/TextureImage';
import CubeWithLight from './gl-props/CubeWithLight';
import CubeTransparent from './gl-props/CubeTransparent';

const _rTopic = {
  DF : { props : RandomTriangles },

  [ID_RANDOM_TRIANGLES] : { props : RandomTriangles },
  [ID_CROWN] : { props : CoronaSample },
  [ID_PLANE] : { props : Plane },
  [ID_CUBE] : { props : Cube },
  [ID_TEXTURE_IMAGE] : { props: TextureImage },
  [ID_CUBE_WITH_LIGHT] : { props: CubeWithLight },
  [ID_CUBE_TRANSPARENT] : { props : CubeTransparent }
}

const factoryTopic = (
  topicId
) => {
  const config  = topicId && _rTopic[topicId]
  , props = config
      ? config.props
      : _rTopic.DF.props;

  props.key = topicId + Date.now()
  return { Comp: WebGLTopic, props };
};


export default factoryTopic
