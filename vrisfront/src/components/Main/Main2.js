//import main22 from '../assets/main22.jpg';
import { Grid, Text, Image, Box } from '@chakra-ui/react';

const Main2 = () => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)" //가로로 블럭 2개 생성, 1칸씩
      bgColor="#E2E8F0"
      mt="0.9rem" //margin-top(main1이랑 main2사이 여백(조절가능))
      justifyContent="center"
      justifyItems="center" //px는 좌우 간격(이미지랑 텍스트 py는 세로)
      px="17rem"
    >
      <Image src="../assets/main22.jpg" borderRadius="15" boxSize="23rem" />
      <Box>
        <Text fontSize="2.25rem" fontWeight="bold" color="#2D3748">
          ⦁ Vegetarian이란 ?<br />
        </Text>
        <Text fontSize="1.4rem" fontWeight="bold" color="#4A5568">
          <br />
          세계채식연맹(IVU)에서는 채식주의자를
          <br />
          '육지동물은 물론 바다나 강에 사는 <br />
          물고기도 먹지 않는 사람들'이라고 <br />
          정의합니다.
        </Text>
      </Box>
    </Grid>
  );
};

export default Main2;
