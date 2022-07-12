import Reflux from 'reflux-core';

import {
  ID_RANDOM_TRIANGLES
} from '../../components/topics/ID';
import RouterTopicActions from '../actions/RouterTopicActions'

import RouterTopicSlice from './RouterTopicSlice';

const WebGlStore = Reflux.createStore({
  listenables: [ RouterTopicActions ],
  state: {
    topicId: ID_RANDOM_TRIANGLES
  },

  ...RouterTopicSlice
});

export default WebGlStore
