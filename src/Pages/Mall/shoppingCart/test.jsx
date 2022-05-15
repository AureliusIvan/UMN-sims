import React from "react";
import { Box, Button, Text } from "@chakra-ui/react"
import { 
  Modal, 
  ModalOverlay, 
  ModalHeader, 
  ModalContent, 
  ModalCloseButton, 
  ModalBody, 
  ModalFooter } from "@chakra-ui/react"

import { ArrowBackIcon } from "@chakra-ui/icons";
import { useDisclosure } from '@chakra-ui/react';

function Confirm(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialFocusRef = React.useRef()

  return (
    <>
      <Button
        onClick={onOpen}
        zIndex={1}
        pos={'absolute'}
        top="10px" 
        left={'10px'}
        bgColor="rgb(0, 0, 0, .0)"
        fontWeight={0}
        borderRadius={'50%'}
        h="50px"
        w="50px"
        padding={0}
      >
        <ArrowBackIcon h="50px" w={'50px'} position={'absolute'} />
      </Button>

      <Modal initialFocusRef={initialFocusRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay 
          bg="rgba(245,101,101, 0.6)" //red.400
          backdropFilter="blur(5px) hue-rotate(90deg)"/>
        <ModalContent my="auto">
          <ModalHeader fontWeight="light">Are You Sure ?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Your shopping items will be set to defaut.</Text>
            <Text>Continue to proceed?</Text>
          </ModalBody>

          <ModalFooter>
            <Button ref={initialFocusRef} fontWeight="normal" variant='ghost' onClick={onClose} mr={3}>Nevermind</Button>
            <Button fontWeight="normal" colorScheme='red' onClick={() => props.function}>
              Proceed
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Confirm