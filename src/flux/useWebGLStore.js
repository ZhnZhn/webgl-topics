import { create } from 'zustand';

import {
  ID_RANDOM_TRIANGLES
} from '../components/topics/ID';

const useWebGLStore = create((set) => ({
  topicId: ID_RANDOM_TRIANGLES,
  setTopicId: (id) => set({ topicId: id })
}))

export const useTopicId = () => useWebGLStore(state => state.topicId)
export const setTopicId = useWebGLStore.getState().setTopicId
