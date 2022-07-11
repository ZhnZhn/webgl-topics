import { useState } from 'react';

import useListen from '../hooks/useListen'

import { RouterTopicActionTypes } from '../../flux/actions/RouterTopicActions'

import Menu from '../zhn-moleculs/Menu';
import menuModel from './menuModel';

const SIDEBAR = "sidebar"
, CL_SIDEBAR = `${SIDEBAR} with-scroll`
, CL_SIDEBAR_MENU = `${SIDEBAR}__menu`
, CL_SIDEBAR_FOOTER = `${SIDEBAR}__footer`
, CL_SIDEBAR_FOOTER_LINK = `${CL_SIDEBAR_FOOTER}__link`

, S_MENU = { borderRight: '1px solid black' }
, S_MENU_TOGGLE = { paddingLeft: 6 };

const TopicMenu = ({
  store
}) => {
  const [
    topicId,
    setTopicId
  ] = useState(store.state.topicId)

  useListen(store, (actionType, state) => {
    if (actionType === RouterTopicActionTypes.VIEW_TOPIC){
      setTopicId(state.topicId)
    }
  })

  return (
    <section className={CL_SIDEBAR}>
      <div className={CL_SIDEBAR_MENU} role="navigation">
         <Menu
            style={S_MENU}
            toogleStyle={S_MENU_TOGGLE}
            menuModel={menuModel}
            topicId={topicId}
          />
      </div>
      <div className={CL_SIDEBAR_FOOTER}>
        <button className={CL_SIDEBAR_FOOTER_LINK}>
          Footer Button
        </button>
      </div>
    </section>
  );
}

/*
TopicMenu.propTypes = {
  store: PropTypes.object.isRequired
}
*/

export default TopicMenu
