import { Layout } from 'antd';
import paths from 'common/paths';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const { Content } = Layout;


const AppContent = () => {
  return (
    <Content style={{ padding: '0 50px', margin: '24px 0' }}>
      <Switch>
        {paths.map((path, i) => (
          <Route
            key={i}
            path={path.route}
            exact={path.exact}
            component={path.content}
          />
        ))}
      </Switch>
    </Content>
  );
};

export default AppContent;
