import React, { Component } from 'react';

import RouterLink from './links/RouterLink';

import initGL from './gl-decorators/initGL';
import createShaders from './gl-decorators/createShaders';
import createPerspective from './gl-decorators/createPerspective';
import setPointSize from './gl-decorators/setPointSize';
import configMatrix from './gl-decorators/configMatrix';
import draw from './gl-decorators/draw';
import startAnimation from './gl-decorators/startAnimation';

//import addGLMethods from './gl-decorators/addGLMethods';

import Button from '../zhn-atoms/Button';

const WIDTH = 500
    , HEIGHT = 500
    , STYLE = {
      ROOT : {
        position : 'relative',
        float : 'left'
      },
      BT_RUN : {
        position: 'absolute',
        top: '8px',
        right : '8px'
      }
    }

//@addGLMethods
@initGL
@createShaders
@createPerspective
@setPointSize
@configMatrix
@draw
@startAnimation
class WebGLTopic extends Component {

  constructor(props){
    super();

    this.isAnimate = true;
    this.isStopDraw = false;
  }

  componentDidMount(){
    const { startAnimation } = this.props
    if ( typeof startAnimation === "function"){
      startAnimation(this)
    } else {
      this.startAnimation(this);
    }
  }

  componentWillUnmount(){
    this.isStopDraw = true;
    this.props.clearBuffers(this);
  }

  _handleClickCanvas = () => {
    this.isAnimate = !this.isAnimate
    this.forceUpdate();
  }

  _renderTopicLink = (valuesForInit) => {
    if (!valuesForInit){
      return undefined;
    } else {
      const { topicLink={} } = valuesForInit
          , { type } = topicLink
          , Comp = RouterLink[type]
      if (typeof Comp === 'undefined'){
        return undefined;
      } else
        return (<Comp {...topicLink} />);
    }
  }

  render(){
    const { valuesForInit } = this.props
    return (
      <div style={STYLE.ROOT}>
        <canvas
           ref={ el => this.canvas = el }
           width={WIDTH}
           height={HEIGHT}
           onClick={this._handleClickCanvas}
        >
          Your browser doesn't appear to support the
          <code>&lt;canvas&gt;</code> element.
        </canvas>
        {
          (this.isAnimate === false) &&
          <Button
            caption="Run Animation"
            style={STYLE.BT_RUN}
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
