import Reflux from 'reflux';

import RouterTopicActions from '../actions/RouterTopicActions'

import RouterTopicSlice from './RouterTopicSlice';

const WebGlStore = Reflux.createStore({
  listenables : [ RouterTopicActions ],  
  state : {},

  ...RouterTopicSlice
});

export default WebGlStore
