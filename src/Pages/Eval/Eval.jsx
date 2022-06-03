import React, { useContext, useEffect, useState } from 'react';
import { AllContext } from '../../components/Value/CoinContext';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
  Box,
  VStack,
  Flex,
  Text,
} from '@chakra-ui/react';
import './Eval.css';

function CreateText(props) {
  return (
    <>
      <Text
        bgColor={'blue.500'}
        border="1px dashed white"
        color="white"
        fontWeight={'thin'}
        h="40px"
        w="140px"
        paddingLeft={'20px'}
        paddingTop="6px"
        marginEnd={'10px'}
        borderRadius="20px"
      >
        {props.content1}
      </Text>
      <Text
        bgColor={'blue.700'}
        border="1px dashed white"
        fontWeight={'thin'}
        color="white"
        h="40px"
        w="230px"
        paddingLeft={'20px'}
        paddingTop="6px"
        marginEnd={'10px'}
        borderRadius="20px"
      >
        {props.content2}
      </Text>
    </>
  );
}

function EvaluationScreen() {
  const { Day, setDay } = useContext(AllContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [opened, setOpened] = useState(false);
  //counter
  const { countMakan, setCountMakan } = useContext(AllContext);
  const { countTidur, setCountTidur } = useContext(AllContext);
  const { countMain, setCountMain } = useContext(AllContext);
  const { countBelajar, setCountBelajar } = useContext(AllContext);
  //eval
  const [evalMakan, setEvalMakan] = useState('');
  const [evalTidur, setEvalTidur] = useState('');
  const [evalMain, setEvalMain] = useState('');
  const [evalBelajar, setEvalBelajar] = useState('');
  useEffect(() => {
    if (Day % 7 === 0 && opened == false) {
      onOpen();
    }
    if (Day % 7 !== 0) {
      setOpened(false);
    }
  }, [Day]);

  useEffect(() => {
    if (countMakan < 10) {
      setEvalMakan('Kamu kekurangan gizi');
    } else {
      setEvalMakan('Dasar makan mulu');
    }
    if (countTidur < 20) {
      setEvalTidur('Kurang tidur gegara ngoding PTI');
    } else {
      setEvalTidur('Cukup tidur banget');
    }
    if (countMain < 3) {
      setEvalMain('Kamu ga depresi kan?');
    } else {
      setEvalMain('Udah bahagia banget');
    }
  }, [Day]);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={'black'}>Evaluasi dalam seminggu</ModalHeader>
          <ModalBody bgColor={'pink '} margin="10px">
            <VStack align={'stretch'}>
              <Box borderRadius={'50%'}>
                <Flex
                  className="starpoin"
                  justifyContent={'center'}
                  alignItems="center"
                  borderRadius={'50%'}
                  color={'white'}
                  width={'100px'}
                  height="100px"
                  fontSize={'50px'}
                  bgGradient={'linear(to-l, purple.600, blue.600)'}
                  border="dashed 3px pink"
                >
                  7
                </Flex>
              </Box>
              <Flex
                bgColor={'blue.500'}
                color="white"
                p="5px"
                borderRadius="10px"
              >
                Hasil Evaluasi selama 7 hari
              </Flex>
              <Flex>
                <CreateText content1={'Status Tidur'} content2={evalTidur} />
              </Flex>
              <Flex>
                <CreateText content1={'Status Makan'} content2={evalMakan} />
              </Flex>
              <Flex>
                <CreateText
                  content1={'Status Kebahagiaan'}
                  content2={evalMain}
                />
              </Flex>
              <Flex>
                <CreateText
                  content1={'Status Keuangan'}
                  content2={'misqueen'}
                />
              </Flex>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                setOpened(true);
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default EvaluationScreen;
