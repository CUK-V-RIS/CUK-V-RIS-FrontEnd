import { Spacer, Flex, Text } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/react';
import SerarchBar from './SearchBar';


const Main1 = () => {
  return (
    <>
      <Flex
        flexDirection="column" // 세로로 플렉스 정렬
        position="relative"
        w="50%" //width
        h="100vh" //height
        p="5% 0 16% 9%" //padding
        alignItems="center" // 중간 배열로 해둠 left right 밀기 등 가능
      >
        <Spacer />
        <Text fontSize="60" fontWeight="bold" color="white">
          비건 or 논 비건 <br />
          당신의 선택은?
          <br />
        </Text>
        <Text fontSize="40" color="white" mt="0.7em" fontWeight="extrabold">
          vegetarian restaurant 찾기 서비스
        </Text>
          <div> 
            <SerarchBar></SerarchBar>
          </div>

      </Flex>
    </>
  );
};

export default Main1;
