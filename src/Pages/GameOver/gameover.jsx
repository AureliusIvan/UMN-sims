import React, { useContext, useEffect, useState } from 'react';
import { AllContext } from '../../components/Value/CoinContext';
import gif1 from './gameoverimg/gameover.gif';

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
          <ModalHeader textAlign={'center'} fontSize={'30px'}>Game Over</ModalHeader>
          <ModalBody pb={10}>
          <Image src={gif1}/>
          </ModalBody>
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
