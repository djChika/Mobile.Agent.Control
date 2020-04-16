import { Layout } from 'antd';
import paths from 'common/paths';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box } from 'UIKit/grid';

const { Content } = Layout;

const AppContent = () => {
  return (
    <Box px={[0, 50, 100, 100, 200]}>
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
    </Box>
  );
};

export default AppContent;
