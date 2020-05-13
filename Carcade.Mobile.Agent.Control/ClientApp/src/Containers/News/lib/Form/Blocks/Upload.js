import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Upload } from 'antd';
import { RULES, STYLE_PROPS } from './inputProps';
import React from 'react';

const UploadBlock = ({ onRemoveFile, onAddFile, news }) => {
  return (
    <Form.Item
      name="pictures"
      label="Картинки"
      valuePropName="fileList"
      rules={RULES}
      {...STYLE_PROPS}
      getValueFromEvent={e => {
        console.log(e);
        if (Array.isArray(e)) {
          return e;
        }

        return e && e.fileList;
      }}
    >
      <Upload
        fileList={news.pictures}
        action="/api/News/UploadPicture"
        // beforeUpload={file => {
        //   onAddFile(file);
        // }}
        onRemove={file => {
          if (file) onRemoveFile(file);
        }}
        onChange={e => {
          console.log('OnChangeUpload: ', e);
          const { file } = e;
          onAddFile(file);
        }}
      >
        <Button>
          <UploadOutlined /> Выбрать изображение
        </Button>
      </Upload>
    </Form.Item>
  );
};

export default UploadBlock;
