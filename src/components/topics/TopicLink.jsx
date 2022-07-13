import RouterLink from './links/RouterLink';

const TopicLink = ({
  config
}) => {
  if (!config){
    return null;
  } else {
    const { topicLink } = config
    , { type, ...restProps } = topicLink || {}
    , Comp = type && RouterLink[type];
    return Comp
      ? <Comp {...restProps} />
      : null;
  }
}

export default TopicLink
