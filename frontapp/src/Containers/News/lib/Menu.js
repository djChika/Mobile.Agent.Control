import './Menu.css';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Layout, Menu as AntMenu } from 'antd';
import React from 'react';
import { Flex, Box } from 'UIKit/grid';
const { Sider } = Layout;

const Menu = ({ list, onSelectNews, onCreateNews }) => {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Sider className="fixSider">
        <AntMenu
          mode="inline"
          style={{
            height: '100%'
          }}
        >
          {list.map((n, i) => (
            <AntMenu.Item
              key={i}
              onClick={() => {
                onSelectNews(n);
              }}
            >
              {n.title}
            </AntMenu.Item>
          ))}
          <Flex justifyContent="center">
            <Button
              type="primary"
              shape="circle"
              icon={<PlusOutlined />}
              size="large"
              onClick={() => {
                onCreateNews();
              }}
            />
          </Flex>
        </AntMenu>
      </Sider>
    </Box>
  );
};

export default Menu;
