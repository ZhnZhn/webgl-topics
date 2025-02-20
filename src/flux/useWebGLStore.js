import {
  createStoreWithSelector,
  fUseStoreState,
  getStoreApi
} from './storeApi';

import {
  ID_PLANE
} from '../components/topics/ID';

const _crStore = () => ({
  topicId: ID_PLANE
})
, _store = createStoreWithSelector(_crStore)
, _selectTopicId = state => state.topicId
, [_set] = getStoreApi(_store);

export const useTopicId = fUseStoreState(_store, _selectTopicId)

export const setTopicId = (topicId) => {
  _set({ topicId })
}
