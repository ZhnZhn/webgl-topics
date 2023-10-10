import { bindTo } from '../utils/bindTo';

import {
  createStore,
  subscribeWithSelector
} from './zustand-lite';

import useSubscribeState from '../components/hooks/useSubscribeState';

export const createStoreWithSelector = (
  crStore
) => createStore(
  subscribeWithSelector(crStore)
)

export const fUseStoreState = (
  store,
  select
) => bindTo(useSubscribeState, store, select);

export const getStoreApi = store => [
  store.setState,
  store.getState
];
