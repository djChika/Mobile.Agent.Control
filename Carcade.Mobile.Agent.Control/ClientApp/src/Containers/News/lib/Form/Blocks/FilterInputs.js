import { Form, Select, Divider } from 'antd';
import React from 'react';
import { STYLE_PROPS } from './inputProps';
const { Option } = Select;

const FilterInputs = ({ filters, onChangeFilter }) => {
  if (!filters || filters.length === 0) return null;
  return (
    <>
      <Divider>Фильтры</Divider>
      {filters.map((filter, i) => {
        return (
          <>
            <Form.Item
              key={i}
              name={filter.type}
              label={filter.name}
              {...STYLE_PROPS}
            >
              <Select
                defaultValue={null}
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
          </>
        );
      })}
    </>
  );
};

export default FilterInputs;
