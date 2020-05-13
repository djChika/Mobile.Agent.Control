import './Menu.css';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Layout, Menu as AntMenu, Alert } from 'antd';
import React from 'react';
import { Flex, Box } from 'UIKit/grid';
const { Sider } = Layout;

const Menu = ({ list, onSelectNews, selectedNewsIndex, onAddNews }) => {
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
          selectedKeys={[`${selectedNewsIndex}`]}
        >
          {list && list.length > 0 ? (
            list.map((n, i) => (
              <AntMenu.Item
                key={i}
                onClick={() => {
                  onSelectNews(n, i);
                }}
              >
                {n.title}
              </AntMenu.Item>
            ))
          ) : (
            <Flex my="5px" justifyContent="center">
              Нет новостей
            </Flex>
          )}
        </AntMenu>
      </Sider>
      <Flex justifyContent="center">
        <Button
          // type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          size="large"
          onClick={() => {
            onAddNews();
          }}
        />
      </Flex>
    </Box>
  );
};

export default Menu;
