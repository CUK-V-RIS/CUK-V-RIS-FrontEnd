import Header from '../components/common/Header';
import SearchBar from '../../src/components/Main/SearchBar';
import MainMember from '../../src/components/Main/MainMember';
import { Flex, Spacer, Image, Text, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import CardComponent from '../../src/components/Search/CardComponent';

const SearchResult = () => {
  return (
    <>
      <Header />
      <SearchBar marginTop="5%" width="40%" />
      <Flex w="100vw" minH="83vh" px="0.5">
        <Text ml="30rem" fontSize="2.1rem" fontWeight="bold">
          검색 결과:
        </Text>
        <Flex flexDirection="column">
        <Grid mt="5rem" px="10%" justifyItems="center" templateColums="repeat(3, 1fr)">
          <GridItem bg="red" borderRadius="15" boxSize="14rem" mb="0" />
          <Text fontWeight="bold" fontSize="1.5rem" mb="0">
            뉴델리
          </Text>
          <Text fontWeight="extrabold" fontSize="1rem" mt="0.1">
            인도/중동
          </Text>
          <Text fontWeight="extrabold" fontSize="1rem">
            서울/ 동대문구 경희대로6길 5
          </Text>
        </Grid>
        <Spacer />
        </Flex>
      </Flex>
      <MainMember />
    </>
  );
};

export default SearchResult;
