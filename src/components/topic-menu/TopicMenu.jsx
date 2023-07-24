import { useTopicId } from '../../flux/useWebGLStore';

import Menu from '../zhn-moleculs/Menu';
import menuModel from './menuModel';

const SIDEBAR = "sidebar"
, CL_SIDEBAR = `${SIDEBAR} with-scroll`
, CL_SIDEBAR_MENU = `${SIDEBAR}__menu`

, S_MENU = { borderRight: '1px solid black' }
, S_MENU_TOGGLE = { paddingLeft: 6 };

const TopicMenu = () => {
  const topicId = useTopicId();
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
    </section>
  );
};

export default TopicMenu
