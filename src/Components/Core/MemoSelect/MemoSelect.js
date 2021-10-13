import React from "react";
import { Select } from 'antd';
const { Option } = Select;

const PageElements = ({ handleChange }) => {
  return (
    <Select defaultValue="2" style={{ width: 120 }} onChange={handleChange}>
      <Option value="10">All</Option> 
      <Option value="2">2</Option>
      <Option value="5">5</Option>
      <Option value="10">10</Option>
    </Select>
  );
};

export default React.memo(PageElements);