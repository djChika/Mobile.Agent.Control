import { Form, Input, Divider } from 'antd';
import React from 'react';
import { RULES, STYLE_PROPS } from './inputProps';

const INPUT_TYPES = {
  textarea: 'textarea'
};

const INPUTS_LIST = [
  {
    name: 'title',
    label: 'Название',
    rules: RULES
  },
  {
    name: 'shortText',
    label: 'Краткое описание',
    rules: RULES,
    type: INPUT_TYPES.textarea
  },
  {
    name: 'description',
    label: 'Описание',
    rules: RULES,
    type: INPUT_TYPES.textarea
  },
  {
    name: 'link',
    label: 'Ссылка'
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

const TextInputs = ({ onChangeField }) => (
  <>
    <Divider>Информация</Divider>
    {INPUTS_LIST.map((item, i) => {
      return (
        <Form.Item key={i} {...item} {...STYLE_PROPS}>
          {selectInput(item.type, {
            onChange: e => {
              onChangeField(item.name, e.target.value);
            }
          })}
        </Form.Item>
      );
    })}
  </>
);

export default TextInputs;
