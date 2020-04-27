import React from 'react';
import Background from 'Containers/Background';
import { Box, Flex } from 'UIKit/grid';
import styled from 'styled-components';

const Text = styled.span`
  color: #444a53;
  font-size: 17px;
  font-weight: 500;
`;

const TextSecondary = styled(Text)`
  font-size: 16px;
`;

const Main = () => {
  return (
    <Background>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        px="30px"
        width={[500, 650, 900, 1100]}
        height="400px"
      >
        <Text>Это панель управления мобильным приложением для агентов</Text>
        <br />
        <TextSecondary>
          Сейчас здесь можно добавлять и редактировать новости
        </TextSecondary>
      </Flex>
    </Background>
  );
};

export default Main;
