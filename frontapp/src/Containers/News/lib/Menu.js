import React from 'react';
import { Menu as AntMenu, Layout } from 'antd';
const { Sider } = Layout;

const Menu = ({ list }) => {
  return (
    <Sider>
      <AntMenu mode="inline" style={{ height: '100%' }}>
        {list.map((n, i) => (
          <AntMenu.Item key={i}>{n.title}</AntMenu.Item>
        ))}
      </AntMenu>
    </Sider>
  );
};

export default Menu;
