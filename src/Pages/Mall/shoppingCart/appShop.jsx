import React from "react";
import { Box, Button } from "@chakra-ui/react"
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

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./DnDShop"

function AppShop(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialFocusRef = React.useRef()

  return (
    <DndProvider backend={HTML5Backend}>
      <Box>
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
            bg="rgba(197,48,48,0.6)" //red.600
            backdropFilter="blur(5px) hue-rotate(90deg)"/>
          <ModalContent my="auto">
            <ModalHeader fontWeight="light">Are You Sure ?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Your shopping items will be set to defaut. Still Proceed?
            </ModalBody>

            <ModalFooter>
              <Button ref={initialFocusRef} fontWeight="normal" variant='ghost' onClick={onClose} mr={3}>Nevermind</Button>
              <Button fontWeight="normal" colorScheme='red' onClick={() => props.handleClick('mall')}>
                Proceed
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <DragDrop />
      </Box>
    </DndProvider>
  )
}

export default AppShop