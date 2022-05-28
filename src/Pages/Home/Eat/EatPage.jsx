import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Eat from './Eat';
import Eat2 from "./Eat2"

function EatPage(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialFocusRef = React.useRef();

  return (
    <DndProvider backend={HTML5Backend}>
      <Button
        zIndex={1}
        pos={'absolute'}
        top="10px"
        right={'10px'}
        bgColor="rgb(0, 0, 0, .0)"
        fontWeight={0}
        borderRadius={'50%'}
        h="50px"
        w="50px"
        padding={0}
        onClick={() => props.handleClick('home')}
      >
        <ArrowBackIcon h="50px" w={'50px'} position={'absolute'} /><Text>Back</Text>
      </Button>
      <Eat2 />
    </DndProvider>
  );
}

export default EatPage;
