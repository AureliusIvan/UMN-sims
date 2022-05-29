import React, { useContext, useEffect, useState } from 'react';
import { AllContext } from '../../components/Value/CoinContext';
import over1 from './gameoverimg/Mukbanggameover.png';
import over2 from './gameoverimg/Gamergameover.png';
import over3 from './gameoverimg/Holkaygameover.png';
import over4 from './gameoverimg/Codinggameover.png';

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
  const { character, setCharacter } = useContext(AllContext);
  const {over, SetOver} = useState(over1)

  
  useEffect(() => {
    if (gameOver == true) {
      onOpen();
        // if (character === 1) {
        //   SetOver(over1);
        // }
        // else if (character === 2) {
        //   SetOver(over2);
        // }
        // else if (character === 3) {
        //   SetOver(over3);
        // }
        // else if (character === 4) {
        //   SetOver(over4);
        // }
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

          <ModalBody pb={10}>

            <Image 
          src={over3}
          />

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
