import React from 'react';
import { Box, Flex } from 'UIKit/grid';
import { Form, Input, Button, Upload } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const rules = [
  {
    required: true
  }
];

const itemParams = {
  style: {
    display: 'flex',
    flexDirection: 'column'
  },
  labelAlign: 'left'
};

const normFile = e => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const NewsForm = ({ mode, news, onChangeField, sendNews }) => {
  return (
    <Box width="100%" px={[0, 0, 0, 100, 250]}>
      <Form
        name="news-form"
        onFinish={() => {
          sendNews();
        }}
      >
        <Form.Item
          name={['news', 'title']}
          label="Название"
          rules={rules}
          {...itemParams}
        >
          <Input
            onChange={e => {
              onChangeField('title', e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          name={['news', 'shorttext']}
          label="Краткое описание"
          rules={rules}
          {...itemParams}
        >
          <Input.TextArea
            onChange={e => {
              onChangeField('shortText', e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          name={['news', 'description']}
          label="Описание"
          rules={rules}
          {...itemParams}
        >
          <Input.TextArea
            onChange={e => {
              onChangeField('description', e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item name={['news', 'link']} label="Ссылка" {...itemParams}>
          <Input
            onChange={e => {
              onChangeField('link', e.target.value);
            }}
          />
        </Form.Item>

        {/* <Form.Item
          name="preview"
          label="Превью"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={rules}
          {...itemParams}
        >
          <Upload name="logo" action={normFile} listType="picture">
            <Button>
              <UploadOutlined /> Выбрать изображение
            </Button>
          </Upload>
        </Form.Item> */}

        <Form.Item>
          <Flex flexDirection="row" justifyContent="flex-end">
            <Button type="primary" htmlType="submit">
              Сохранить
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </Box>
  );
};

export default NewsForm;
