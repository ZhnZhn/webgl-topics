import RouterLink from './links/RouterLink';

const TopicLink = ({
  config
}) => {
  if (!config){
    return null;
  } else {
    const { topicLink } = config
    , { type } = topicLink || {};
    return type && RouterLink[type] || null;
  }
}

export default TopicLink
