import {
  useRef,
  useMemo
} from '../uiApi';

import { useTopicId } from '../../flux/useWebGLStore';

import factoryTopic from './factoryTopic';
import PanelConfigGL from '../panel-config-gl/PanelConfigGL';

const CL_CONTAINER = 'container'
, CL_CONTENT = `${CL_CONTAINER}__content`;

const TopicWrapper = () => {
  const topicId = useTopicId()
  , refComp = useRef(null)
  , getComponentTopic = useMemo(
    () => () => refComp.current,
    []
  )
  , {
    Comp,
    props:compProps
  } = useMemo(
    () => factoryTopic(topicId),
    [topicId]
  )
  , {
    valuesForInit
  } = compProps;

  return (
    <div className={CL_CONTAINER} role="document">
      <main className={CL_CONTENT}>
        <div className="row">
          <Comp
             {...compProps}
             refEl={refComp}
             key={compProps.key}
          />
          <PanelConfigGL
             valuesForInit={valuesForInit}
             onGetComp={getComponentTopic}
          />
        </div>
      </main>
    </div>
  );
}

export default TopicWrapper
