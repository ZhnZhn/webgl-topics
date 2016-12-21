import { RouterTopicActionTypes } from '../actions/RouterTopicActions';

const RouterTopicSlice = {

  _setTopicId(topicId){
    this.state.topicId = topicId;
    this.trigger(RouterTopicActionTypes.VIEW_TOPIC, this.state);
  },

  onViewTopic(topicId){    
    this._setTopicId(topicId);
  }
}

export default RouterTopicSlice
