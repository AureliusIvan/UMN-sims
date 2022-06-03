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
} from '@chakra-ui/react';
import './Eval.css'


function EvaluationScreen() {
  const { Day, setDay } = useContext(AllContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [opened, setOpened ] = useState(false);
  useEffect(() => {
    if (Day % 7 === 0 && opened == false) {
      onOpen();
    }
    if(Day % 7 !== 0 ){
        setOpened(false);
    }
  }, [Day]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={'black'}>Evaluasi dalam seminggu</ModalHeader>
          <ModalCloseButton />
          <ModalBody bgColor={'pink '} margin="10px">
            <VStack align={"stretch"}>
              <Box  borderRadius={'50%'}>
                <Flex
                className='starpoin'
                  justifyContent={'center'}
                  alignItems="center"
                  borderRadius={'50%'}
                  color={'white'}
                  width={'100px'}
                  height="100px"
                  fontSize={"50px"}
                  bgGradient={"linear(to-l, purple.600, blue.600)"}
                  border="dashed 3px pink"
                >
                  90
                </Flex>
              </Box>
              <Flex bgColor={"blue.500"} color="white" p="5px" borderRadius="10px">Persentase matkul selesai:</Flex>
              <Flex bgColor={"blue.500"} color="white" p="5px" borderRadius="10px">Status tidur : </Flex>
              <Flex bgColor={"blue.500"} color="white" p="5px" borderRadius="10px">Status makan :</Flex>
              <Flex bgColor={"blue.500"} color="white" p="5px" borderRadius="10px">Status Keuangan: </Flex>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={()=>{onClose();
            setOpened(true)
            }}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default EvaluationScreen;
