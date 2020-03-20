import Reflux from 'reflux-core';

export const RouterTopicActionTypes = {
  VIEW_TOPIC : 'viewTopic'
}

const RouterTopicActions = Reflux.createActions({
  [RouterTopicActionTypes.VIEW_TOPIC] : {}
});

export default RouterTopicActions
