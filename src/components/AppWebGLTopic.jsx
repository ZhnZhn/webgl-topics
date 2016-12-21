import React from 'react';

import Header from './header/Header';
import TopicMenu from './topic-menu/TopicMenu';
import TopicWrapper from './topics/Main';
import Footer from './footer/Footer';

const AppWebGLTopic = ({ store }) => (
  <div className="app" role="application">
    <Header />
    <TopicMenu />
    <TopicWrapper store={store} />
    <Footer />
  </div>
);


export default AppWebGLTopic
