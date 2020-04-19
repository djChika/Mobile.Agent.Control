import paths from 'common/paths';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Flex } from 'UIKit/grid';

const LayoutContent = () => {
  return (
    <Flex mx={'7%'} my="24px" justifyContent="center">
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
    </Flex>
  );
};

export default LayoutContent;
