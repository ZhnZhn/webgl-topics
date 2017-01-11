import Reflux from 'reflux';

import RouterTopicActions from '../actions/RouterTopicActions'

import RouterTopicSlice from './RouterTopicSlice';

const WebGlStore = Reflux.createStore({
  listenables : [ RouterTopicActions ],
  state : {
    topicId : 'RANDOM_TRIANGLES'
  },

  ...RouterTopicSlice
});

export default WebGlStore
