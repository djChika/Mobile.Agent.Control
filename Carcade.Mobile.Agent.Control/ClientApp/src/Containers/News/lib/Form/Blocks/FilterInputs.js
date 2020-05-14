import { Form, Select, Divider } from 'antd';
import React, { Fragment } from 'react';
import { STYLE_PROPS } from './inputProps';
const { Option } = Select;

const FilterInputs = ({ filters, onChangeFilter }) => {
  if (!filters || filters.length === 0) return null;
  return (
    <>
      <Divider>Фильтры</Divider>
      {filters.map((filter, i) => {
        return (
          <Fragment key={i}>
            <Form.Item
              name={['filters', i, filter.type]}
              label={filter.name}
              {...STYLE_PROPS}
            >
              <Select
                onChange={value => {
                  onChangeFilter(filter.type, value);
                }}
              >
                <Option value={null}>Не выбрано</Option>
                {filter.items &&
                  filter.items.map((option, io) => (
                    <Option key={io} value={option.id}>
                      {option.name}
                    </Option>
                  ))}
              </Select>
            </Form.Item>
          </Fragment>
        );
      })}
    </>
  );
};

export default FilterInputs;
