import React, {useContext, useEffect} from 'react';
import {AllContext} from '../../components/Value/CoinContext';
import DefaultGameOverGif from './gameoverimg/gameover.gif';

import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, useDisclosure, Button, Image,
} from '@chakra-ui/react';

function GameOverScreen() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {gameOver} = useContext(AllContext);

  useEffect(() => {
    if (gameOver === true) {
      onOpen();
    }
  }, [gameOver]);

  return (<>
    <Modal
        isCentered="true"
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
    >
      <ModalOverlay
          bg="rgba(165,42,42, 0.8)"
          backdropFilter="blur(5px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader
            textAlign='center'
            fontSize={'30px'}>
          Game Over
        </ModalHeader>

        <ModalBody pb={10}>
          <Image src={DefaultGameOverGif}/>
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
  </>);
}

export default GameOverScreen;
