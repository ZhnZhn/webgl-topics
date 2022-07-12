import { Component } from 'react';

import initGL from './gl-decorators/initGL';
import createShaders from './gl-decorators/createShaders';
import createPerspective from './gl-decorators/createPerspective';
import setPointSize from './gl-decorators/setPointSize';
import configMatrix from './gl-decorators/configMatrix';
import draw from './gl-decorators/draw';
import startAnimation from './gl-decorators/startAnimation';

import Button from '../zhn-atoms/Button';
import TopicLink from './TopicLink';

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

  _hClickCanvas = () => {
    this.isAnimate = !this.isAnimate
    this.forceUpdate();
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
           onClick={this._hClickCanvas}
        >
          Your browser doesn't appear to support the
          <code>&lt;canvas&gt;</code> element.
        </canvas>
        {
          !this.isAnimate && <Button
            caption="Run Animation"
            style={S_BT_RUN}
            onClick={this._hClickCanvas}
         />
        }
        <TopicLink
          config={valuesForInit}
        />
      </div>
    );
  }
}

export default WebGLTopic
