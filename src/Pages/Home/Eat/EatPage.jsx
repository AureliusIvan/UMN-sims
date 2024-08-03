import React from 'react';
import {Box, Button} from '@chakra-ui/react';
import {ArrowBackIcon} from '@chakra-ui/icons';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import EatComponent from './eat-component';

function EatPage(props) {

  return (
      <DndProvider backend={HTML5Backend}>

        <Box>
          <Button
              zIndex={1}
              pos="absolute"
              top="10px"
              left={'10px'}
              fontWeight={0}
              borderRadius={'50%'}
              h="50px"
              w="50px"
              padding={0}
              bgColor="black"
              onClick={() => props.handleClick('home')}
          >
            <ArrowBackIcon
                filter="invert(1)"
                h="50px"
                w={'50px'}
                position="absolute"
                _hover={{filter: 'invert(0)'}}
            />
          </Button>
          <EatComponent/>
        </Box>
      </DndProvider>
  );
}

export default EatPage;
