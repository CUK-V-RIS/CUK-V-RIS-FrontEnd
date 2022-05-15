import React from 'react';
import Header from '../components/common/Header';
import { Flex, Image, Input } from '@chakra-ui/react';
import Main1 from '../../src/components/Main/Main1';
import Main2 from '../../src/components/Main/Main2';
import Main3 from '../../src/components/Main/Main3';
import Main4 from '../../src/components/Main/Main4';
import MainMember from '../../src/components/Main/MainMember';


const Mainpage1 = () => {
  return (
    <>
      <Header />
      <Image
        position="absolute" // 무조건 부모 기준(시작점)
        objectFit="cover"
        w="100vw" //v -> 뷰포트 기준 == 내가 켜놓은 화면 기준 100프로 채움
        h="100vh"
        src="../assets/main21.jpg"
      />
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
    </>
  );
};

export default Mainpage1;
