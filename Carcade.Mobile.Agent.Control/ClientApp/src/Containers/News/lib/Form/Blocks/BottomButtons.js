import { DeleteOutlined } from '@ant-design/icons';
import { Button, Form } from 'antd';
import React from 'react';
import { Flex } from 'UIKit/grid';

const BottomButtons = ({ onDeleteNews, sending, deleting, news }) => (
  <Form.Item>
    <Flex flexDirection="row" justifyContent="space-between">
      <Button loading={sending} type="primary" htmlType="submit">
        Сохранить
      </Button>
      <Button
        loading={deleting}
        type="link"
        danger
        icon={<DeleteOutlined />}
        onClick={() => {
          onDeleteNews(news);
        }}
      >
        Удалить
      </Button>
    </Flex>
  </Form.Item>
);

export default BottomButtons;
