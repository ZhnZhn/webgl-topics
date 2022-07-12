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

const _rTopicProps = {
  DF: RandomTriangles,

  [ID_RANDOM_TRIANGLES]: RandomTriangles,
  [ID_CROWN]: CoronaSample,
  [ID_PLANE]: Plane,
  [ID_CUBE]: Cube,
  [ID_TEXTURE_IMAGE]: TextureImage,
  [ID_CUBE_WITH_LIGHT]: CubeWithLight,
  [ID_CUBE_TRANSPARENT]: CubeTransparent
}

const factoryTopic = (
  topicId
) => {
  const props = topicId && _rTopicProps[topicId]
    || _rTopicProps.DF;
  props.key = topicId + Date.now()
  return {
    Comp: WebGLTopic,
    props
  };
};

export default factoryTopic
