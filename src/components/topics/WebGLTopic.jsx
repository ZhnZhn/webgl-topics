import { Component } from 'react';

import RouterLink from './links/RouterLink';

import initGL from './gl-decorators/initGL';
import createShaders from './gl-decorators/createShaders';
import createPerspective from './gl-decorators/createPerspective';
import setPointSize from './gl-decorators/setPointSize';
import configMatrix from './gl-decorators/configMatrix';
import draw from './gl-decorators/draw';
import startAnimation from './gl-decorators/startAnimation';

import Button from '../zhn-atoms/Button';

const WIDTH = 500
, HEIGHT = 500
, S_ROOT = {
  position : 'relative',
  float : 'left'
}
, S_CANVAS = {
  borderRadius: '2px'
}
, S_BT_RUN = {
  position: 'absolute',
  top: 8,
  right : 8
};

@initGL
@createShaders
@createPerspective
@setPointSize
@configMatrix
@draw
@startAnimation
class WebGLTopic extends Component {
   /*
   static propTypes = {
     valuesForInit: PropTypes.object
   }
   */

  isAnimate = true
  isStopDraw = false

  componentDidMount(){
    const { startAnimation } = this.props;
    if (typeof startAnimation === "function"){
      startAnimation(this)
    } else {
      this.startAnimation(this);
    }
  }

  componentWillUnmount(){
    this.isStopDraw = true
  }

  _handleClickCanvas = () => {
    this.isAnimate = !this.isAnimate
    this.forceUpdate();
  }

  _renderTopicLink = (
    valuesForInit
  ) => {
    if (!valuesForInit){
      return null;
    } else {
      const { topicLink } = valuesForInit
      , { type } = topicLink || {}
      , Comp = RouterLink[type];
      return typeof Comp === 'undefined'
        ? null
        : <Comp {...topicLink} />;
    }
  }

  _refCanvas = el => this.canvas = el

  render(){
    const { valuesForInit } = this.props
    return (
      <div style={S_ROOT}>
        <canvas
           ref={this._refCanvas}
           width={WIDTH}
           height={HEIGHT}
           style={S_CANVAS}
           onClick={this._handleClickCanvas}
        >
          Your browser doesn't appear to support the
          <code>&lt;canvas&gt;</code> element.
        </canvas>
        {
          (this.isAnimate === false) &&
          <Button
            caption="Run Animation"
            style={S_BT_RUN}
            onClick={this._handleClickCanvas}
         />
        }
        {
          this._renderTopicLink(valuesForInit)
        }
      </div>
    );
  }
}

export default WebGLTopic
