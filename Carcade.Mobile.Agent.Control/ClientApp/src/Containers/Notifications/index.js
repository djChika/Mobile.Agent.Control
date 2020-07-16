import { Tabs } from 'antd';
import Background from 'Containers/Background';
import React from 'react';
import { SubscribersTable } from './lib';

class Notifications extends React.Component {
  state = {
    isVisibleSendNotification: false
  };

  render() {
    return (
      <Background flexDirection="column" py="24px" px="5px">
        <Tabs type="card">
          <Tabs.TabPane key="1" tab="Подписчики">
            <SubscribersTable
              subscribersList={this.props.stores.notifications.subscribersList}
            />
          </Tabs.TabPane>
          <Tabs.TabPane key="2" tab="Уведомления" disabled>
            Here will be notifications
          </Tabs.TabPane>
        </Tabs>
      </Background>
    );
  }
}

export default Notifications;
