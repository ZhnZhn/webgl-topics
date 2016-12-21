//import React from 'react';

import WebGLTopic from './WebGLTopic';

import RandomTriangles from './gl-props/RandomTriangles';
import CoronaSample from './gl-props/CoronaSample';
import Plane from './gl-props/Plane';
import Cube from './gl-props/Cube';
import TextureImage from './gl-props/TextureImage';
import CubeWithLight from './gl-props/CubeWithLight';

const _rTopic = {
  DEFAULT : { props : RandomTriangles },  
  //DEFAULT : { props : CubeWithLight },
  RANDOM_TRIANGLES : { props : RandomTriangles },
  CORONA : { props : CoronaSample },
  PLANE : { props : Plane },
  CUBE : { props : Cube },
  TEXTURE_IMAGE : { props: TextureImage },
  CUBE_WITH_LIGHT : { props: CubeWithLight }
}

const factoryTopic = (topicId) => {
  const config  = _rTopic[topicId]
      , props = (config)
          ? config.props
          : _rTopic.DEFAULT.props

  props.key = topicId + Date.now()
  //return React.createElement(WebGLTopic, props);
  return { Comp : WebGLTopic, props };

}


export default factoryTopic
