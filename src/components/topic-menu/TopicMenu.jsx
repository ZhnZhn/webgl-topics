import React from 'react';

import Menu from '../zhn-moleculs/Menu';

import menuModel from './menuModel';

const TopicMenu = (props) => (
  <section className="sidebar" tabindex="-1">
    <div className="sidebar__menu" role="navigation">
       <Menu menuModel={menuModel} />
    </div>
    <div className="sidebar__footer">
      <button className="sidebar__footer__link" type="button">
        Footer Button
      </button>
    </div>
  </section>
);

export default TopicMenu
