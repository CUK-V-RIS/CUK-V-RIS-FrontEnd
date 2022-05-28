import {
  IconButton,
  Input,
  InputRightElement,
  InputLeftElement,
  FormControl,
  Box,
  useDisclosure,
  InputGroup,
  useToast
} from "@chakra-ui/react";
import {
  Button,
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import Header from '../components/common/Header';
import SearchBar from '../../src/components/Main/SearchBar';
import MainMember from '../../src/components/Main/MainMember';
import { Flex, Spacer, Image, Text, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import CardComponent from '../../src/components/Search/CardComponent';

const SearchResult = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
      <Header />
      <ChakraProvider>
        <Flex m='5'>
      <SearchBar width="100%" marginTop="10%"
            inputVariant="outline" iconButtonVariant="ghost" />
          </Flex>
        </ChakraProvider>
      <Flex w="100vw" minH="83vh" px="0.5">
        <Text ml="30rem" fontSize="2.1rem" fontWeight="bold">
          검색 결과:
        </Text>
        <Flex flexDirection="column">
          <Grid mt="5rem" px="10%" justifyItems="center" templateColumns="repeat(1, 1fr)">
            <GridItem borderRadius="15" boxSize="14rem" mb="0">
              <ChakraProvider>
              <Image src={`/assets/newdeli.png`} objectFit="fill" borderRadius="10" onClick={onOpen} />
        <Modal onClose={onClose} isOpen={isOpen} size="xl">
          <ModalOverlay color="green" />
                    <ModalContent>
                        <Image
                            w="50rem"
                            h="30rem"
                            boxShadow="md"
                            borderRadius="0.2rem"
                            src={`/assets/newdeli.png`}
                            objectFit="fill"
                        />
            <Flex direction="row" justify="center" m={1}>
              <ModalCloseButton  borderRadius="3rem" backgroundColor="#3E603B" color="white" />
                        </Flex>
                        
            <ModalBody>
            <Flex direction="column" justify="center">
                <Text fontSize="1.8rem" fontWeight="bolder" m={2}>뉴델리</Text>
                <Box m={2}>
                  <Text m={1}>카테고리 : 인도/중동</Text>
                  <Text m={1}>전화번호 : 02-957-7955</Text>
                  <Text m={1}>주소 : 서울 동대문구 경희대로6길 5</Text>
                </Box>
                <Box m={2}>
                  <Text m={1}>메뉴<hr /></Text>
                  <Text>
                      <Flex>
                        <Text m={0.5}>팔락 파니르</Text>
                        <Spacer />
                        <Text>락토</Text>
                        </Flex>
                        <Flex>
                        <Text m={0.5}>파니르 버터 마살라</Text>
                        <Spacer />
                        <Text>락토</Text>
                        </Flex>
                                        <Flex>
                        <Text m={0.5}>샤히 파니르</Text>
                        <Spacer />
                        <Text>락토</Text>
                                        </Flex>
                                        <Flex>
                        <Text m={0.5}>베지터블 코르마</Text>
                        <Spacer />
                        <Text>락토</Text>
                                        </Flex>
                                        <Flex>
                        <Text m={0.5}>믹스 베지터블 커리</Text>
                        <Spacer />
                        <Text>비건</Text>
                      </Flex>
                  </Text>
                </Box>
              </Flex>
         </ModalBody>
                        
          </ModalContent>
        </Modal>
        </ChakraProvider>
            </GridItem>
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