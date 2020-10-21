import { Component } from 'react';

import { RouterTopicActionTypes } from '../../flux/actions/RouterTopicActions'

import factoryTopic from './factoryTopic';
import PanelConfigGL from '../panel-config-gl/PanelConfigGL';

import dfValues from './gl-props/dfValues';

class TopicWrapper extends Component {
  /*
  static propTypes = {
    store : PropTypes.shape({
      listen: PropTypes.func
    })
  }
  */

  constructor(props){
    super(props)

    this._onStore = this._onStore.bind(this)
    this.getComponentTopic = this.getComponentTopic.bind(this);
    this.state = {
      topidId : void 0
    }
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

  _refComp = comp => this.componentTopic = comp

  render(){
    const { topicId } = this.state
    , { Comp, props:compProps } = factoryTopic(topicId)
    , { valuesForInit={} } = compProps
    , _valuesForInit = { ...dfValues, ...valuesForInit };


    return (
      <div className="container" role="document">
        <main className="container__content" role="main">
          <div className="row">
            <Comp
               ref={this._refComp}
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

export default TopicWrapper
