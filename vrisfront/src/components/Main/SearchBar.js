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
import SearchResult from "../../pages/SearchResult";
import axios from 'axios'; //result 결과 연결
import Button from "../common/Button";



function SerarchBar({ onClick, onChange }) {

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
              placeholder="    식당 이름을 입력해 주세요"
              px="10px"
              h="50px"
              width="500px"
              borderRadius="100"
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
            필터 공간
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

function Result({ veganres }) {
  
  var lis = [];
  for (var i = 0; i < veganres.length; i++){
    var item = veganres[i];
    lis.push(

    )
  }

}


  const url = '/v1/vegan-res/restaurantName/{resName}';







export default SerarchBar;