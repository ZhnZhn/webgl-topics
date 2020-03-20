import Reflux from 'reflux-core';

import TopicID from '../../components/topics/ID';
import RouterTopicActions from '../actions/RouterTopicActions'

import RouterTopicSlice from './RouterTopicSlice';

const WebGlStore = Reflux.createStore({
  listenables : [ RouterTopicActions ],
  state : {
    topicId : TopicID.RANDOM_TRIANGLES
  },

  ...RouterTopicSlice
});

export default WebGlStore
