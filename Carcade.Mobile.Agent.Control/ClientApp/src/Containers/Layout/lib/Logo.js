import React from 'react';
import styled from 'styled-components';
import { MobileOutlined } from '@ant-design/icons';

const Wrapper = styled.div`
  margin: 0 20px;
  color: white;
  font-size: 1.125rem;
  font-weight: bold;
`;

const Logo = () => {
  return (
    <Wrapper>
      <MobileOutlined /> Mobile.Control
    </Wrapper>
  );
};

export default Logo;
