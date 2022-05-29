import React, { useContext, useEffect } from 'react';
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
} from '@chakra-ui/react';

function GameoverScreen() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { gameOver, setGameover } = useContext(AllContext);
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
          <ModalHeader>Game Over</ModalHeader>
          <ModalBody pb={10}>Yahh kalahhhhh</ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                window.location.reload();
              }}
              colorScheme="red"
              mr={3}
            >
              Reset
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default GameoverScreen;
