import React from 'react';
import { Flex, Image, Input, Text, Spacer } from '@chakra-ui/react';

const MainMember = () => {
  return (
    <Flex bgColor="#2F855A">
      <Image
        src="/assets/vrisrealunderline.png"
        w="9%"
        position="absolute"
        mt="5.5rem"
        ml="3.5rem"
      ></Image>
      <Spacer />
      <Flex w="20%" ml="40%" flexDirection="column" alignItems="center">
        <Text fontSize="40" color="white" fontWeight="bold" mb="1rem">
          V-RIS GITHUB
        </Text>
        <Text fontSize="20" color="white" fontWeight="medium">
          https://github.com/CUK-V-RIS
        </Text>
      </Flex>
      
      <Flex w="20%" flexDirection="column" alignItems="left" ml="5rem">
        <Text fontSize="40" color="white" fontWeight="bold" mb="0.1rem">
          DEVELOPERS
        </Text>
        <Text fontSize="20" color="white" fontWeight="medium" mb="0">
          HaJin Kim : 98hajin@naver.com
        </Text>
        <Text
          fontSize="20"
          color="white"
          fontWeight="medium"
          mb="0"
          mt="0.5rem"
        >
          Yi Nam : nyn623@naver.com
        </Text>
        <Text
          fontSize="20"
          color="white"
          fontWeight="medium"
          mb="0"
          mt="0.5rem"
        >
          IJi Shin : hee981226@naver.com
        </Text>
        <Text
          fontSize="20"
          color="white"
          fontWeight="medium"
          mb="0"
          mt="0.5rem"
        >
          HeeGu Shin : wjawksl@gmail.com
        </Text>
        <Text fontSize="20" color="white" fontWeight="medium" mt="0.5rem">
          Jeongeon Seo : eonswork21@naver.com
        </Text>
      </Flex>
    </Flex>
  );
};

export default MainMember;
