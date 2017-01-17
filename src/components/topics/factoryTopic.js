import WebGLTopic from './WebGLTopic';

import ID from './ID';

import RandomTriangles from './gl-props/RandomTriangles';
import CoronaSample from './gl-props/CoronaSample';
import Plane from './gl-props/Plane';
import Cube from './gl-props/Cube';
import TextureImage from './gl-props/TextureImage';
import CubeWithLight from './gl-props/CubeWithLight';
import CubeTransparent from './gl-props/CubeTransparent';

const _rTopic = {
  DEFAULT : { props : RandomTriangles },

  [ID.RANDOM_TRIANGLES] : { props : RandomTriangles },
  [ID.CROWN] : { props : CoronaSample },
  [ID.PLANE] : { props : Plane },
  [ID.CUBE] : { props : Cube },
  [ID.TEXTURE_IMAGE] : { props: TextureImage },
  [ID.CUBE_WITH_LIGHT] : { props: CubeWithLight },
  [ID.CUBE_TRANSPARENT] : { props : CubeTransparent }
}

const factoryTopic = (topicId) => {
  const config  = _rTopic[topicId]
      , props = (config)
          ? config.props
          : _rTopic.DEFAULT.props;

  props.key = topicId + Date.now()
  return { Comp : WebGLTopic, props };
};


export default factoryTopic
