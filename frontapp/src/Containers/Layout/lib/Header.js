import { Layout, Menu } from 'antd';
import paths from 'common/paths';
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex } from 'UIKit/grid';
import Logo from './Logo';

const { Header } = Layout;

const LayoutHeader = () => {
  return (
    <Header className="header">
      <Flex px={[0, 50, 200, 200, 400]}>
        <Logo />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {paths.map((path, i) => {
            if (path.route) {
              return (
                <Menu.Item key={i}>
                  <Link to={path.route}>{path.name}</Link>
                </Menu.Item>
              );
            }
          })}
        </Menu>
      </Flex>
    </Header>
  );
};

export default LayoutHeader;
