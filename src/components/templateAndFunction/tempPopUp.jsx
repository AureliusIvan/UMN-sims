import {
  Modal,
  ModalContent,
  ModalBody,
  ModalOverlay,
  useDisclosure,
  Tooltip,
} from '@chakra-ui/react';
import { Flex, Image } from '@chakra-ui/react';
import React, { useState } from 'react';

function PopTemplate(props) {
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
      <Tooltip label={props.name} placement="start" zIndex={50}>
        <Image
          src={props.shownIMG}
          width={{ base: 120, sm: 140, md: 165 }}
          cursor="pointer"
          transition="0.3s"
          _hover={{ transform: 'scale(1.1)' }}
          onClick={() => {
            setOverlay(<PopUp />);
            onOpen();
            setTimeout(() => {
              onClose();
            }, 1800);
          }}
        />
      </Tooltip>

      <Modal isCentered size="lg" isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent bg="rgba(0,0,0,0)" boxShadow="none" pb={3}>
          <ModalBody textAlign="center">
            <Flex flexDir="column" alignItems="center" justifyContent="center">
              {props.comment}
              <Image
                src={props.image}
                width={{ md: '100%', base: '70%' }}
                filter="drop-shadow(2px 2px 5px black)"
                alt={props.alt}
              />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PopTemplate;
