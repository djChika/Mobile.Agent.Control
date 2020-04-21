import React from 'react';
import { Box, Flex } from 'UIKit/grid';
import { Form, Input, Button, Upload, Alert } from 'antd';
import {
  UploadOutlined,
  InboxOutlined,
  DeleteOutlined
} from '@ant-design/icons';

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

const NewsForm = ({
  sending,
  deleting,
  news,
  onChangeField,
  onSelectPicture,
  onSaveNews,
  onDeleteNews
}) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    form.setFieldsValue(news);
  }, [news]);

  if (!news) {
    return (
      <Flex
        px="30px"
        width={[300, 450, 700, 900]}
        height="704px"
        alignItems="center"
      >
        {/* <Alert
          style={{
            width: '100%',
            height: '110px',
            // height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          message="Выберите новость"
          description="Создайте или выберите новость"
          type="info"
        /> */}
      </Flex>
    );
  }

  return (
    <Box px="30px" width={[300, 450, 700, 900]}>
      <Form
        style={{
          width: '100%'
        }}
        form={form}
        onFinish={() => {
          onSaveNews();
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
          getValueFromEvent={e => {
            console.log(e);
          }}
          rules={rules}
          {...itemprops}
        >
          <Upload
            name="logo"
            listType="picture"
            beforeUpload={file => {
              console.log('file', file);
              // onSelectPicture(file, 'preview');
              return false;
            }}
          >
            <Button>
              <UploadOutlined /> Выбрать изображение
            </Button>
          </Upload>
        </Form.Item> */}

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
      </Form>
    </Box>
  );
};

export default NewsForm;
