import { DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Form, Popconfirm } from 'antd';
import React from 'react';
import { Flex } from 'UIKit/grid';

const BottomButtons = ({ onDeleteNews, sending, deleting, news }) => (
  <Form.Item>
    <Flex flexDirection="row" justifyContent="space-between">
      <Button loading={sending} type="primary" htmlType="submit">
        Сохранить
      </Button>
      <Popconfirm
        title="Вы уверены, что хотите удалить новость?"
        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
        onConfirm={() => {
          onDeleteNews(news);
        }}
      >
        <Button loading={deleting} type="link" danger icon={<DeleteOutlined />}>
          Удалить
        </Button>
      </Popconfirm>
    </Flex>
  </Form.Item>
);

export default BottomButtons;
