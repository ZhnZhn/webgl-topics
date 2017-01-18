import React, { Component, PropTypes } from 'react';

import { RouterTopicActionTypes } from '../../flux/actions/RouterTopicActions'

import factoryTopic from './factoryTopic';
import PanelConfigGL from '../panel-config-gl/PanelConfigGL';

import dfValues from './gl-props/dfValues';

class TopicWrapper extends Component{

  state = {
      topidId : undefined
  }

  constructor(props){
    super()

    this._onStore = this._onStore.bind(this)
    this.getComponentTopic = this.getComponentTopic.bind(this);
  }

  componentDidMount(){
     const { store } = this.props
     this.unsubscribe = store.listen(this._onStore);
  }

  _onStore(actionType, state){
    if (actionType === RouterTopicActionTypes.VIEW_TOPIC){
      this.setState({ topicId : state.topicId })
    }
  }

  componentWillUnmount(){
     this.unsubscribe()
  }

  getComponentTopic(){
    return this.componentTopic;
  }

  render(){
    const { topicId } = this.state
    , { Comp, props:compProps } = factoryTopic(topicId)
    , { valuesForInit={} } = compProps
    , _valuesForInit = Object.assign({}, dfValues, valuesForInit)

    
    return (
      <div className="container" role="document">
        <main className="container__content" tabIndex="1" role="main">
          <div className="row">
            <Comp
               ref={ comp => this.componentTopic = comp }
               {...compProps}
            />
            <PanelConfigGL
               valuesForInit={_valuesForInit}
               onGetComp={this.getComponentTopic}
            />
          </div>
        </main>
      </div>
    );
  }
}

TopicWrapper.propTypes = {
  store : PropTypes.object.isRequired
}


export default TopicWrapper
