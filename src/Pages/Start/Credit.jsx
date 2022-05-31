import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Divider,
  Text,
  Box,
  Image,
  Flex,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import ivan from '../../components/asset/credit/Ivan.png';
import arka from '../../components/asset/credit/Arka.png';
import pat from '../../components/asset/credit/Pat.png';
import mae from '../../components/asset/credit/Mae.png';

function Card(props) {
  return (
    <Flex
      bgColor={'red.100'}
      my="10px"
      padding={'10px'}
      borderRadius="10px"
      height="100px"
      gap={{sm:5, base:3}}
      alignContent="center"
      justifyContent="space-evenly"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        borderRadius="50%"
        border="5px solid white"
        bgColor={'red.300'}
        width={{sm:"80px", base:"100px"}}
        height={{sm:"80px", base:"70px"}}
      >
        <Image filter="drop-shadow(2px 2px 2px white)" src={props.img} />
      </Flex>
      <Flex flexDir="column" justifyContent="space-evenly">
        <Flex>
          <Text
            display={{base:"none", sm:"block"}}
            width={'50px'}
            bgColor="red.400"
            color="whiteAlpha.900"
            borderRadius={'10px'}
            paddingX="10px"
            textAlign="center"
            mr={3}
          >
            Nama
          </Text>
          <Text
            width={'200px'}
            bgColor="white"
            borderRadius={'10px'}
            textAlign={'left'}
            paddingX="10px"
            filter="drop-shadow(1px 1px 1px gray)"
          >
            {props.nama}
          </Text>
        </Flex>
        <Flex>
          <Text
            display={{base:"none", sm:"block"}}
            width={'50px'}
            bgColor="red.400"
            color="whiteAlpha.900"
            borderRadius={'10px'}
            paddingX="10px"
            textAlign="center"
            mr={3}
          >
            NIM
          </Text>
          <Text
            width={'200px'}
            bgColor="white"
            borderRadius={'10px'}
            textAlign={'left'}
            paddingX="10px"
            filter="drop-shadow(1px 1px 1px gray)"
          >
            {props.nim}
          </Text>
        </Flex>
      </Flex>
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
        width="100px"
        height={'40px'}
        bgGradient="linear(to-r, purple.600, blue.500)"
        fontSize={"2xl"}
        fontWeight="thin"
        _hover={{
          bgGradient: 'linear(to-r, purple.700, blue.800)',
          width: '120px',
          height: '48px',
          borderRadius:'24px',
          fontSize:"3xl"
        }}
        color="white"
        borderRadius={`20px`}
        variant="unstyled"
        transition={'0.3s'}
        shadow="2xl"
      >
        Credit
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent
          borderRadius={15}
          width="90%"
          pb={3}
          shadow={'2px 2px 6px #fd6a6a'}
        >
          <ModalHeader
            borderRadius="15px 15px 0px 0px"
            bgColor={'red.100'}
            textAlign="center"
            fontWeight="normal"
            fontSize={'50px'}
          >
            <Box bgColor="">Credit</Box>
          </ModalHeader>
          <ModalCloseButton mt={2} />
          <Divider />
          <ModalBody>
            <Flex flexDir="column">
              <Card nama="Aurelius Ivan Wijaya" img={ivan} nim="00000054769" />
              <Card nama="Arkana Asa Andoko" img={arka} nim="00000054387" />
              <Card
                nama="Maecyntha Irelynn Tantra"
                img={mae}
                nim="00000055038"
              />
              <Card
                nama="Patricia Theodora Darmawan"
                img={pat}
                nim="00000054093"
              />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Credit;
