import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Divider,
  Text,
  Box,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';

function Credit(props) {
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
      <Button
        onClick={() => {
          setOverlay(<PopUp />);
          onOpen();
        }}
      >
        Credit
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent width="90%" pb={3} shadow={'2px 2px 6px #fd6a6a'}>
          <ModalHeader
            bgColor={'red.100'}
            textAlign="center"
            fontWeight="normal"
          >
            <Box bgColor="">Credit</Box>
          </ModalHeader>
          <ModalCloseButton mt={2} />
          <Divider />
          <ModalBody margin="10px" textAlign="center" gap="10px">
            <Grid
              className="Grid"
              h="80vh"
              templateRows="repeat(4, 1fr)"
              templateColumns="repeat(1, 1fr)"
              gap={0}
            >
              <GridItem className="gridItems" rowSpan={1} colSpan={1}>
				  
              </GridItem>
              <GridItem className="gridItems" rowSpan={1} colSpan={1}>

              </GridItem>
              <GridItem className="gridItems" rowSpan={1} colSpan={1}>
      
              </GridItem>
              <GridItem className="gridItems" rowSpan={1} colSpan={1}>

              </GridItem>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Credit;
