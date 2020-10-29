import { useState } from 'react';

import useListen from '../hooks/useListen'

import { RouterTopicActionTypes } from '../../flux/actions/RouterTopicActions'

import Menu from '../zhn-moleculs/Menu';
import menuModel from './menuModel';

const S = {
  MENU: {
    borderRight: '1px solid black'
  },
  MENU_TOGGLE: {
    paddingLeft: 6
  }
};


const TopicMenu = ({ store }) => {
  const [topicId, setTopicId ] = useState(store.state.topicId)

  useListen(store, (actionType, state) => {
    if (actionType === RouterTopicActionTypes.VIEW_TOPIC){
      setTopicId(state.topicId)
    }
  })

  return (
    <section className="sidebar">
      <div className="sidebar__menu" role="navigation">
         <Menu
            style={S.MENU}
            toogleStyle={S.MENU_TOGGLE}
            menuModel={menuModel}
            topicId={topicId}
          />
      </div>
      <div className="sidebar__footer">
        <button className="sidebar__footer__link">
          Footer Button
        </button>
      </div>
    </section>
  );
}

/*
TopicMenu.propTypes = {
  store : PropTypes.object.isRequired
}
*/

export default TopicMenu
