import { RouterTopicActionTypes } from '../actions/RouterTopicActions';

const RouterTopicSlice = {

  _setTopicId(topicId){
    this.state.topicId = topicId;    
  },

  onViewTopic(topicId){
    this._setTopicId(topicId);
    this.trigger(RouterTopicActionTypes.VIEW_TOPIC, this.state);
  }
}

export default RouterTopicSlice
