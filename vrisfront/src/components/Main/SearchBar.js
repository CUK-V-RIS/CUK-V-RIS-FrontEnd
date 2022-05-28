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
  ChakraProvider,
  Flex,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import React from "react";
import { BiListCheck, BiSearchAlt2 } from "react-icons/bi";
import { IoIosOptions } from "react-icons/io";
import { Link } from 'react-router-dom';
import axios from 'axios'; //result 결과 연결
import Button from "../common/Button";
import FilterBox from "../Search/FilterBox";



function SerarchBar({onChange }) {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (

    <>
      <Box mx="auto">
        <FormControl display="flex" h="100px">
          <InputGroup>
          <Link to='/SearchResult'>
            <InputLeftElement mx="10px" h="50px">
                <IconButton
                  variant="filled"
                color="green"
                icon={<BiSearchAlt2 />}
                />
              </InputLeftElement>
            </Link>  
            
            <Input
              id="input1"
              type="search"
              bgcolor="white"
              placeholder="        식당 이름을 입력해 주세요"
              px="10px"
              h="50px"
              width="500px"
              borderRadius="100"
              variant="outline"
          onChange={onChange}
            />

            <InputRightElement>
            <ChakraProvider>
                <IconButton icon={<IoIosOptions size="25px" />}
                  onClick={onOpen}
                  h="50px"
                  variant="ghost"
                  color="green"
                  mr="10px"
                >
                </IconButton>
        <Modal onClose={onClose} isOpen={isOpen} size="xl"
        scrollBehavior="inside" colorScheme="Green"
      isCentered>
          <ModalOverlay color="green" />
        <ModalContent>
            <Flex>
              <ModalHeader flex="1">필터 선택</ModalHeader>
              <Spacer />
              <ModalCloseButton />
            </Flex>
            <ModalBody>
              
            <FilterBox
              type="지역"
              options={seoulAreas}
                      />
                      
                      <FilterBox
              type="채식 단계"
              options={vegetarianStages}
                      />
                      
                      <FilterBox
              type="종류"
              options={restaurantTypes}
            />

            </ModalBody>
            <ModalFooter>
              <Button
                variant="solid"
                size="md"
                mt="5rem"
                alignSelf="flex-end"
                onClick={onClose}>선택 완료</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </ChakraProvider>
            </InputRightElement>

          </InputGroup>
        </FormControl>

      </Box>

    </>
  );

}

  
const seoulAreas = [
  "강서구",
  "양천구",
  "구로구",
  "금천구",
  "영등포구",
  "마포구",
  "은평구",
  "서대문구",
  "동작구",
  "관악구",
  "용산구",
  "서초구",
  "강남구",
  "송파구",
  "강동구",
  "중구",
  "종로구",
  "성북구",
  "강북구",
  "도봉구",
  "노원구",
  "중랑구",
  "동대문구",
  "성동구",
  "광진구",
];

const vegetarianStages = [
  "비건",
  "락토",
  "오보",
  "락토 오보",
  "페스코",
  "폴로",
  "플렉시테리언",
];
const restaurantTypes = [
  "한식",
  "분식",
  "카페",
  "베이커리",
  "양식",
  "술집",
  "인도/중동",
  "중식",
  "동남아",
  "일식",
];






export default SerarchBar;