import React, { Component } from 'react';

import initGL from './gl-decorators/initGL';
import createShaders from './gl-decorators/createShaders';
import createPerspective from './gl-decorators/createPerspective';
import setPointSize from './gl-decorators/setPointSize';
import configMatrix from './gl-decorators/configMatrix';
import draw from './gl-decorators/draw';
import startAnimation from './gl-decorators/startAnimation';

//import addGLMethods from './gl-decorators/addGLMethods';

const WIDTH = 500
    , HEIGHT = 500
    , STYLE = {
      ROOT : {
        float : 'left'
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
  }

  render(){
    return (
      <canvas
         ref={ el => this.canvas = el }
         width={WIDTH}
         height={HEIGHT}
         style={STYLE.ROOT}
         onClick={this._handleClickCanvas}
      >
      </canvas>
    );
  }
}

export default WebGLTopic
