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
} from '@chakra-ui/react';

function EvaluationScreen() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { gameOver, setGameover } = useContext(AllContext);
  const { character, setCharacter } = useContext(AllContext);
  const { over, SetOver } = useState('');

  useEffect(() => {
    if (gameOver == true) {
      onOpen();
    }
  }, [gameOver]);

  return (
    <>
      <Modal
        isCentered="true"
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Evaluation</ModalHeader>
          <ModalBody pb={10}>
            <Image src={''} />
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                onClose();
              }}
              colorScheme="red"
              mr={3}
            >
              close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EvaluationScreen;
