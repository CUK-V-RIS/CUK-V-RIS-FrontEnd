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
    Text,
    Image,
    Button,
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
import React from 'react';
import Header from '../components/common/Header';
import { IoIosOptions } from "react-icons/io";



const MyPage = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    
    return (
        <>
            <Header />
            <div>마이페이지라고~</div>
            <main1 />
            
        </>
    );
};

export default MyPage;