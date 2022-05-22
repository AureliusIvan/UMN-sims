import {
  Box,
  Center,
  Grid,
  GridItem,
  Text,
  Button,
  Progress,
  Flex,
  Image,
} from '@chakra-ui/react';

import { PhoneIcon, AddIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import React, { useContext, useState } from 'react';
import { DragFood } from './DragFood';
import { CreateChar } from '../../../components/character/CharacterCard';
import { AllContext } from '../../../components/Value/CoinContext';
import BurgerImg from './food/burger.png';

function ChangeFoodBTN() {
  const [food, setFood] = useState('burger');
  const changeleft = () => {};
  return <Button onClick={changeleft}>left</Button>;
}

function Eat(props) {
  const { foodList, setFoodList } = useContext(AllContext);
  const { makan, setMakan } = useContext(AllContext);
  const { burger, setBurger } = useContext(AllContext);
  const { telur, setTelur } = useContext(AllContext);
  const { ikangoreng, setIkangoreng } = useContext(AllContext);
  const { steak, setSteak } = useContext(AllContext);
  const { ayampanggang, setAyampanggang } = useContext(AllContext);
  function EatHandle(x) {
    if (makan < 100) setMakan(makan + x);
  }
  return (
    <Box className="Eat" bgGradient="linear(to-t, green.200, blue.500)">
      <Grid
        className="Grid"
        h="100vh"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={0}
      >
        <GridItem
          h="70px"
          className="gridItems"
          rowSpan={1}
          colSpan={3}
          bgGradient="linear(to-l, green.300, blue.600)"
          fontSize="50px"
          color="white"
          textAlign={'center'}
          shadow={'2px 1px 6px #2e2e2e'}
        >
          <Text pos={'absolute'} top="0px" left={0} right={0}></Text>
        </GridItem>
        <GridItem className="gridItems" rowSpan={3} colSpan={3}>
          <Progress
            transform={'rotate()'}
            pos="absolute"
            margin={'auto'}
            left="0"
            right="0"
            w="300px"
            h={'20px'}
            colorScheme={'green'}
            borderRadius="10px"
            value={makan}
            border="2px solid white"
          />
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={3}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={3}>
          <Box zIndex={-1}>
            <CreateChar />
          </Box>
        </GridItem>
        <GridItem zIndex={10} className="gridItems" rowSpan={1} colSpan={3}>
          <Box
            width="400px"
            h={'200px'}
            bgColor="blue.100"
            transform="perspective(5px) rotateX(1deg)"
            margin={'auto'}
            position="absolute"
            bottom={'100px'}
            left={0}
            right={0}
            borderRadius="50%"
            shadow={'1px 1px 6px #2e2e2e'}
            overflow="hidden"
          >
            <Box
              bgColor="rgb(0, 0, 0, 0.2)"
              borderRadius={'50%'}
              transform="translateX(200px)"
              h="200px"
              w={'200px'}
            ></Box>
            <Box
              width="200px"
              h={'100px'}
              bgColor="white"
              margin={'auto'}
              transform="translateY(50px) perspective(10px) rotateX(1deg)"
              position="absolute"
              bottom={'100px'}
              left={0}
              right={0}
              borderRadius="50%"
              border={'10px solid #dedede'}
              shadow={'2px 1px 6px #2e2e2e'}
            ></Box>
          </Box>
          <Box>
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
              <ArrowBackIcon h="50px" w={'50px'} position={'absolute'} />
            </Button>
          </Box>
          <Flex
            left={0}
            right={0}
            margin="auto"
            top={'460px'}
            zIndex={'100'}
            pos={'absolute'}
            width="100%"
            justifyContent={'center'}
          >
            <Button>{'<'}</Button>
            <Box>
              <Image width={'100px'} h="100px" src={BurgerImg} />
            </Box>
            <Button>{'>'}</Button>
          </Flex>
        </GridItem>
        <GridItem
          width={'100%'}
          h="20vh"
          pos={'fixed'}
          bottom={0}
          bgGradient="linear(to-l, green.300, blue.600)"
          className="gridItems"
          shadow={'2px 1px 6px #2e2e2e'}
          rowSpan={3}
          colSpan={1}
          zIndex={11}
        >
          <Grid
            className="Grid"
            h="100%"
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={0}
          >
            <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
            <GridItem className="gridItems" rowSpan={1} colSpan={1}>
              <Center>
                <Button
                  onClick={() => {
                    EatHandle(10);
                  }}
                >
                  Makan
                </Button>
              </Center>
            </GridItem>
            <GridItem className="gridItems" rowSpan={1} colSpan={1}>
              <Center></Center>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Eat;
