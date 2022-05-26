import {
  Box,
  Center,
  Grid,
  GridItem,
  Text,
  Button,
  Progress,
  Flex,
} from '@chakra-ui/react';
import { PhoneIcon, AddIcon, ArrowBackIcon } from '@chakra-ui/icons';
import React, { useContext, useEffect, useState } from 'react';
import { CreateChar } from '../../../components/character/CharacterCard';
import { AllContext } from '../../../components/Value/CoinContext';
import { useDrop, useDrag } from 'react-dnd';
import burger from './food/burger.png';
import friedegg from './food/friedegg.png';
import friedfish from './food/friedfish.png';
import roastchicken from './food/roastchicken.png';
import salad from './food/salad.png';
import steak from './food/steak.png';
import CharacterModule from '../../../components/character/Card';
import './food.css';

const dragList = [
  {
    id: 1,
    name: 'burger',
    url: burger,
    hunger: 20,
  },
  {
    id: 2,
    name: 'friedegg',
    url: friedegg,
    hunger: 10,
  },
  {
    id: 3,
    name: 'friedfish',
    url: friedfish,
    hunger: 10,
  },
  {
    id: 4,
    name: 'roaschicken',
    url: roastchicken,
    hunger: 20,
  },
  {
    id: 5,
    name: 'salad',
    url: salad,
    hunger: 10,
  },
  {
    id: 6,
    name: 'steak',
    url: steak,
    hunger: 20,
  },
];

const sliceMakananA = dragList.slice(0, 1);
const sliceMakananB = dragList.slice(1, 2);
const sliceMakananC = dragList.slice(2, 3);
const sliceMakananD = dragList.slice(3, 4);
const sliceMakananE = dragList.slice(4, 5);
const sliceMakananF = dragList.slice(5, 6);
const sliceMakananG = dragList.slice(1);

function Picture({ url, id, className }) {
  const { isdrag, setDrag } = useContext(AllContext);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { id: id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <>
      <img
        ref={drag}
        src={url}
        alt=""
        width={'150px'}
        style={{ display: isDragging ? 'none' : 'block' }}
        draggable="false"
        className={className}
      />
    </>
  );
}

function Eat(props) {
  const { isdrag, setDrag } = useContext(AllContext);
  const [slice, setSlice] = useState(sliceMakananA);
  const pictures = slice.map(picture => (
    <>
      <Picture className="itemshop" url={picture.url} id={picture.id} />
    </>
  ));
  const texts = slice.map(text => <>{text.name}</>);
  //all const
  const { showPause, setShowPause } = useContext(AllContext);
  const { foodList, setFoodList } = useContext(AllContext);
  const { makan, setMakan } = useContext(AllContext);
  const { burger, setBurger } = useContext(AllContext);
  const { telur, setTelur } = useContext(AllContext);
  const { ikangoreng, setIkangoreng } = useContext(AllContext);
  const { steak, setSteak } = useContext(AllContext);
  const { ayampanggang, setAyampanggang } = useContext(AllContext);
  //dnd function
  const [board, setBoard] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: item => addImage(item.id),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImage = id => {
    const droppedPictures = slice.filter(picture => id === picture.id);
    setBoard(board => [...board, droppedPictures[0]]);
  };

  useEffect(() => {
    if (isOver == true) {
      const makanid = slice;
      console.log(makanid[0].hunger);
      setMakan(makan + makanid[0].hunger);
      setBoard([]);
    }
  }, [board]);

  function EatHandle(x) {
    if (makan < 100) setMakan(makan + x);
  }

  function prevFood() {
    if (slice == sliceMakananA) {
      setSlice(sliceMakananF);
    } else if (slice == sliceMakananB) {
      setSlice(sliceMakananA);
    } else if (slice == sliceMakananC) {
      setSlice(sliceMakananB);
    } else if (slice == sliceMakananD) {
      setSlice(sliceMakananC);
    } else if (slice == sliceMakananE) {
      setSlice(sliceMakananD);
    } else if (slice == sliceMakananF) {
      setSlice(sliceMakananE);
    }
  }

  function nextFood() {
    if (slice == sliceMakananA) {
      setSlice(sliceMakananB);
    } else if (slice == sliceMakananB) {
      setSlice(sliceMakananC);
    } else if (slice == sliceMakananC) {
      setSlice(sliceMakananD);
    } else if (slice == sliceMakananD) {
      setSlice(sliceMakananE);
    } else if (slice == sliceMakananE) {
      setSlice(sliceMakananF);
    } else if (slice == sliceMakananF) {
      setSlice(sliceMakananA);
    }
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
            <Box
              overflow={'hidden'}
              position="absolute"
              margin="auto"
              right="0"
              left="0"
              bottom="0"
              h="550px"
              width="300px"
              ref={drop}
              style={{ border: isOver ? '10px solid red' : '1px solid black' }}
            >
              <CharacterModule />
            </Box>
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
          <Box></Box>
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
                <Box
                  className="titleFood"
                  bgColor="yellow.200"
                  borderRadius="10px"
                  width="100px"
                  pos="fixed"
                >
                  {texts}
                </Box>
                <Flex
                  left={0}
                  right={0}
                  zIndex="101"
                  margin="auto"
                  top={'0'}
                  pos={'absolute'}
                  width="100%"
                  justifyContent={'center'}
                >
                  <Button
                    transform="translateX(-100px)"
                    position="absolute"
                    onClick={prevFood}
                  >
                    {'<'}
                  </Button>
                  <Box>{pictures}</Box>
                  <Button
                    transform="translateX(100px)"
                    position="absolute"
                    onClick={nextFood}
                  >
                    {'>'}
                  </Button>
                </Flex>
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
