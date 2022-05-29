import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Divider,
  Text,
  Box,
  Grid,
  GridItem,
  VStack,
  Image,
  Flex,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';

function Card(props) {
  return (
    <Flex
      bgColor={'red.100'}
      margin="10px"
      padding={'10px'}
      borderRadius="10px"
      height="100px"
      gap={5}
    >
      <Image
        bgColor={'red.300'}
        width="80px"
        height={'80px'}
        borderRadius="50%"
        src={props.url}
      />
      <VStack spacing={4}>
        <Text
          width={'200px'}
          bgColor="white"
          borderRadius={'10px'}
          textAlign={'left'}
          paddingX="10px"
        >
          Nama : {props.nama}
        </Text>
        <Text
          width={'200px'}
          bgColor="white"
          borderRadius={'10px'}
          textAlign={'left'}
          paddingX="10px"
        >
          NIM : {props.nama}
        </Text>
      </VStack>
    </Flex>
  );
}

function Credit(props) {
  const PopUp = () => (
    <ModalOverlay
      bg="rgba(0,0,0, 0.6)"
      backdropFilter="blur(5px) hue-rotate(90deg)"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<PopUp />);
  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<PopUp />);
          onOpen();
        }}
      >
        Credit
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent width="90%" pb={3} shadow={'2px 2px 6px #fd6a6a'}>
          <ModalHeader
            bgColor={'red.100'}
            textAlign="center"
            fontWeight="normal"
            fontSize={'50px'}
          >
            <Box bgColor="">Credit</Box>
          </ModalHeader>
          <ModalCloseButton mt={2} />
          <Divider />
          <ModalBody margin="10px" textAlign="center" gap="10px">
            <Card />
            <Card />
            <Card />
            <Card />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Credit;
