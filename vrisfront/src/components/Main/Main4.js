import { Grid, Text, Image, Box } from '@chakra-ui/react';
//import cc from '../assets/cc.png';

const Main4 = () => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)" //가로로 블럭 2개 생성, 1칸씩
      bgColor="#E2E8F0"
      justifyContent="center"
      justifyItems="center" //px는 좌우 간격(이미지랑 텍스트 py는 세로)
      px="17rem"
      py="3rem"
    >
      <Box borderTop="1px #2D3748">
        <Text
          textAlign="center"
          fontSize="2.25rem"
          fontWeight="bold"
          color="#2D3748"
        >
          ⦁ 채식주의 단계는 ?
          <br />
        </Text>
        <Text
          fontSize="1.4rem"
          fontWeight="bold"
          color="#4A5568"
          textAlign="center"
        >
          <br />
          채식주의는 7단계로
          <br />
          비교적 세분화 되어 있습니다. <br /> <br />
          그 기준은 유제품, 동물의 알, <br />
          물고기, 하얀고기, 붉은 고기 등
          <br />
          동물성 음식의 종류에 따라 나누어집니다.
          <br />
          (색칠된 모형은 섭취 가능을 뜻합니다.)
          <br />
        </Text>
      </Box>
      <Image
        src="../assets/cc.png"
        borderRadius="15"
        boxSize="28rem"
        display="flex"
        width="95%"
      />
    </Grid>
  );
};

export default Main4;
