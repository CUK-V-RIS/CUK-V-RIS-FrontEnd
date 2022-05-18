import { Grid, Text, Image, Box } from '@chakra-ui/react';
//import main22 from '../assets/main23.png';

const Main3 = () => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)" //가로로 블럭 2개 생성, 1칸씩
      bgColor="#E2E8F0"
      justifyContent="center"
      justifyItems="center" //px는 좌우 간격(이미지랑 텍스트 py는 세로)
      px="14rem"
      py="3rem"
    >
      <Box>
        <Text
          textAlign="center"
          fontSize="2.25rem"
          fontWeight="bold"
          color="#2D3748"
        >
          ⦁ Vegan은 채식주의자인가?
          <br />
        </Text>
        <Text fontSize="1.4rem" fontWeight="bold" color="#4A5568">
          <br />
          맞습니다. <br />
          채식주의의 가장 높은 단계인, 7단계를
          <br />
          비건이라 합니다.
          <br />
          이러한 비건 시장을, MZ세대가 주도합니다.
          <br />
          <br /> 이젠 뒤처지지 마세요.
        </Text>
      </Box>
      <Image
        src="../assets/main23.png"
        borderRadius="15"
        boxSize="24rem"
        width="80%"
        display="flex"
      />
    </Grid>
  );
};

export default Main3;
