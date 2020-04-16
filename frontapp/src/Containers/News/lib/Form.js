import React from 'react';
import { Box, Flex } from 'UIKit/grid';
import { Form, Input, Button, Upload } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const rules = [
  {
    required: true
  }
];

const itemprops = {
  style: {
    display: 'flex',
    flexDirection: 'column'
  },
  labelAlign: 'left'
};

const INPUT_TYPES = {
  textarea: 'textarea'
};

const formItems = [
  {
    name: 'title',
    label: 'Название',
    rules,
    itemprops
  },
  {
    name: 'shortText',
    label: 'Краткое описание',
    rules,
    itemprops,
    type: INPUT_TYPES.textarea
  },
  {
    name: 'description',
    label: 'Описание',
    rules,
    itemprops,
    type: INPUT_TYPES.textarea
  },
  {
    name: 'link',
    label: 'Ссылка',
    itemprops
  }
];

function selectInput(type, params) {
  switch (type) {
    case INPUT_TYPES.textarea:
      return <Input.TextArea {...params} />;
    default:
      return <Input {...params} />;
  }
}

const NewsForm = ({ mode, news, onChangeField, sendNews }) => {
  return (
    <Box width="100%" px={[0, 0, 0, 100, 250]}>
      <Form
        name="news-form"
        onFinish={() => {
          sendNews();
        }}
      >
        {formItems.map((item, i) => {
          return (
            <Form.Item key={i} {...item} {...itemprops}>
              {selectInput(item.type, {
                onChange: e => {
                  onChangeField(item.name, e.target.value);
                }
              })}
            </Form.Item>
          );
        })}

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
