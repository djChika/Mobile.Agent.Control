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
      return <Input.TextArea {...params} style={{ height: '180px' }} />;
    default:
      return <Input {...params} />;
  }
}

const NewsForm = ({ sending, news, onChangeField, onSendNews }) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    form.setFieldsValue(news);
  }, [news]);

  return (
    <Box px="30px" width={[300, 450, 700, 900]}>
      <Form
        style={{
          width: '100%'
        }}
        form={form}
        onFinish={() => {
          onSendNews();
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
            <Button loading={sending} type="primary" htmlType="submit">
              Сохранить
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </Box>
  );
};

export default NewsForm;
