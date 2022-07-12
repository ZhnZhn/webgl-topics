import {
  useState,
  useRef,
  useCallback
} from '../uiApi';

import useListen from '../hooks/useListen';

import { RouterTopicActionTypes } from '../../flux/actions/RouterTopicActions';

import factoryTopic from './factoryTopic';
import PanelConfigGL from '../panel-config-gl/PanelConfigGL';

import dfValues from './gl-props/dfValues';

const CL_CONTAINER = 'container'
, CL_CONTENT = `${CL_CONTAINER}__content`;

const TopicWrapper = ({
  store
}) => {
  const [
    topicId,
    setTopicId
  ] = useState()
  , refComp = useRef(null)
  , getComponentTopic = useCallback(() => refComp.current, []);

  useListen(store, (actionType, state) => {
    if (actionType === RouterTopicActionTypes.VIEW_TOPIC){
      setTopicId(state.topicId)
    }
  })

  const {
    Comp,
    props:compProps
  } = factoryTopic(topicId)
  , { valuesForInit } = compProps
  , _valuesForInit = {
      ...dfValues,
      ...valuesForInit
  };

  return (
    <div className={CL_CONTAINER} role="document">
      <main className={CL_CONTENT} role="main">
        <div className="row">
          <Comp
             ref={refComp}
             {...compProps}
          />
          <PanelConfigGL
             valuesForInit={_valuesForInit}
             onGetComp={getComponentTopic}
          />
        </div>
      </main>
    </div>
  );
}

/*
TopicWrapper. propTypes = {
  store: PropTypes.shape({
    listen: PropTypes.func
  })
}
*/

export default TopicWrapper
