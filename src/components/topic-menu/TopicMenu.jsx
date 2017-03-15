import React, { Component, PropTypes } from 'react';

import { RouterTopicActionTypes } from '../../flux/actions/RouterTopicActions'

import Menu from '../zhn-moleculs/Menu';
import menuModel from './menuModel';

class TopicMenu  extends Component {
  constructor(props){
    super(props)

    const { store } = props
    this.state = {
      topicId : store.state.topicId
    }
  }

  componentDidMount(){
     const { store } = this.props
     this.unsubscribe = store.listen(this._onStore);
  }

  _onStore = (actionType, state) => {
    if (actionType === RouterTopicActionTypes.VIEW_TOPIC){
      this.setState({ topicId : state.topicId })
    }
  }

  componentWillUnmount(){
     this.unsubscribe()
  }

  render(){
    const { topicId } = this.state;
    return (
      <section className="sidebar" tabindex="-1">
        <div className="sidebar__menu" role="navigation">
           <Menu
              toogleStyle={{ paddingLeft: '6px' }}
              menuModel={menuModel}
              topicId={topicId}
            />
        </div>
        <div className="sidebar__footer">
          <button className="sidebar__footer__link" type="button">
            Footer Button
          </button>
        </div>
      </section>
    );
  }
}

TopicMenu.propTypes = {
  store : PropTypes.object.isRequired
}

export default TopicMenu
