import React from 'react';
import { Flex } from 'UIKit/grid';
import { Content, Header } from './lib';

class PageLayout extends React.Component {
  render() {
    return (
      <Flex flexDirection="column">
        <Header />
        <Content />
      </Flex>
    );
  }
}

export default PageLayout;
