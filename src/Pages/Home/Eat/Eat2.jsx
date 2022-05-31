import React, { useState, useContext, useCallback, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Eat2.css';
import { AllContext } from '../../../components/Value/CoinContext';
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
import burger from './food/burger.png';
import friedegg from './food/friedegg.png';
import friedfish from './food/friedfish.png';
import roastchicken from './food/roastchicken.png';
import salad from './food/salad.png';
import steak from './food/steak.png';
import { StatFunction } from '../../../components/templateAndFunction/statCoinFunction';
import makanbg from './food/makanbg.png';
import nexticon from '../../../components/asset/icon/next.png';
import previcon from '../../../components/asset/icon/prev.png';
//import gif
//kang mukbang
import mukbangA from '../../../components/asset/gif/mukbang/MukbangA.gif';
import mukbangmunch from '../../../components/asset/gif/mukbang/Mukbangmunch.gif';

const COLLECTION = [
  {
    id: uuid(),
    name: 'burger',
    url: burger,
    hunger: 20,
  },
  {
    id: uuid(),
    name: 'friedegg',
    url: friedegg,
    hunger: 10,
  },
  {
    id: uuid(),
    name: 'friedfish',
    url: friedfish,
    hunger: 10,
  },
  {
    id: uuid(),
    name: 'roaschicken',
    url: roastchicken,
    hunger: 20,
  },
  {
    id: uuid(),
    name: 'salad',
    url: salad,
    hunger: 10,
  },
  {
    id: uuid(),
    name: 'steak',
    url: steak,
    hunger: 20,
  },
];

const sliceA = COLLECTION.slice(0, 1);
const sliceB = COLLECTION.slice(1, 2);
const sliceC = COLLECTION.slice(2, 3);
const sliceD = COLLECTION.slice(3, 4);
const sliceE = COLLECTION.slice(4, 5);
const sliceF = COLLECTION.slice(5, 6);

const getRenderItem = (items, className) => (provided, snapshot, rubric) => {
  const { foodIndex, setFoodIndex } = useContext(AllContext);
  const item = items[rubric.source.index];
  const { startEAT, setStartEat } = useContext(AllContext);
  const { test, setTest } = useState(false);
  return (
    <React.Fragment>
      <Box
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        style={provided.draggableProps.style}
        className={snapshot.isDragging ? 'dragging' : ''}
      >
        <img className="dragitemss" src={COLLECTION[foodIndex].url} />
      </Box>
    </React.Fragment>
  );
};

function Copyable(props) {
  const { foodIndex, setFoodIndex } = useContext(AllContext);
  const [slice, setSlice] = useState(sliceA);
  useEffect(() => {
    if (foodIndex == 0) {
      setSlice(sliceA);
    } else if (foodIndex == 1) {
      setSlice(sliceB);
    } else if (foodIndex == 2) {
      setSlice(sliceC);
    } else if (foodIndex == 3) {
      setSlice(sliceD);
    } else if (foodIndex == 4) {
      setSlice(sliceE);
    } else if (foodIndex == 5) {
      setSlice(sliceF);
    }
  }, [foodIndex]);
  return (
    <Droppable
      renderClone={getRenderItem(props.items, props.className)}
      droppableId={props.droppableId}
      isDropDisabled={true}
    >
      {(provided, snapshot) => (
        <Grid
          templateRows="repeat(6, 1fr)"
          gap={10}
          ref={provided.innerRef}
          className={props.className}
        >
          {slice.map((item, index) => {
            const shouldRenderClone = item.id === snapshot.draggingFromThisWith;
            return (
              <React.Fragment key={item.id}>
                {shouldRenderClone ? (
                  <Box className="react-beatiful-dnd-copy"></Box>
                ) : (
                  <Draggable draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <React.Fragment>
                        <GridItem
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={
                            snapshot.isDragging ? 'dragging dragbox' : 'dragbox'
                          }
                        >
                          <Image src={item.url} />
                        </GridItem>
                      </React.Fragment>
                    )}
                  </Draggable>
                )}
              </React.Fragment>
            );
          })}
          {provided.placeholder}
        </Grid>
      )}
    </Droppable>
  );
}

function ShoppingBag(props) {
  const [item, setItem] = useState();
  const [item2, setItem2] = useState();
  useEffect(() => {
    if (item == false) {
      setTimeout(() => {
        setItem2(true);
      }, 1000);
    }
  }, [item]);
  return (
    <Droppable droppableId="BAG">
      {(provided, snapshot) => (
        <Box ref={provided.innerRef} className="shopping-bag">
          {provided.placeholder}
          {setItem(snapshot.isDraggingOver)}
          {console.log(item)}
          <Image
            src={item2 ? mukbangA : mukbangmunch}
            pointerEvents="none"
            objectFit="cover"
            margin="auto"
            left="0"
            right="0"
            bottom="5"
            filter="drop-shadow(4px 4px 2px #222)"
            w={{ md: '600px', sm: '550px', base: '500px' }}
            h={{ md: '600px', sm: '550px', base: '500px' }}
            zIndex={7}
            pos="absolute"
            alt={'test'}
          />
        </Box>
      )}
    </Droppable>
  );
}

function Shop(props) {
  return <Copyable droppableId="SHOP" className="shop" items={props.items} />;
}

function FoodCard(props) {
  return (
    <>
      <>
        <Flex
          bgColor={'red'}
          color="white"
          height={'20px'}
          width="70px"
          justifyContent={'center'}
          alignItems="center"
          borderRadius={'10px'}
          position="absolute"
        >
          {props.item}
        </Flex>
        <Flex
          bgColor={'green.800'}
          color="white"
          height={'20px'}
          width="120px"
          justifyContent={'center'}
          alignItems="center"
          borderRadius={'10px'}
          position="absolute"
          transform={'translateY(120px)'}
        >
          {props.content}
        </Flex>
      </>
    </>
  );
}

function Eat2() {
  const { foodIndex, setFoodIndex } = useContext(AllContext);
  const { makan, setMakan } = useContext(AllContext);
  const [lastfood, setLastFood] = useState('');
  const { coin, setCoin } = useContext(AllContext);
  const [total, setTotal] = useState(0);
  const [lastitem, setLastitem] = useState(0);
  const [shoppingBagItems, setShoppingBagItems] = useState([]);
  const onDragEnd = useCallback(
    result => {
      const { source, destination } = result;
      if (!destination) {
        return;
      }
      switch (source.droppableId) {
        case destination.droppableId:
          break;
        case 'SHOP':
          setLastFood(source);
          break;
        default:
          break;
      }
    },
    [setShoppingBagItems]
  );

  function prevFood() {
    if (foodIndex == 0) {
      setFoodIndex(5);
    } else if (foodIndex == 1) {
      setFoodIndex(0);
    } else if (foodIndex == 2) {
      setFoodIndex(1);
    } else if (foodIndex == 3) {
      setFoodIndex(2);
    } else if (foodIndex == 4) {
      setFoodIndex(3);
    } else if (foodIndex == 5) {
      setFoodIndex(4);
    }
  }

  function nextFood() {
    console.log(foodIndex);
    if (foodIndex == 0) {
      setFoodIndex(1);
    } else if (foodIndex == 1) {
      setFoodIndex(2);
    } else if (foodIndex == 2) {
      setFoodIndex(3);
    } else if (foodIndex == 3) {
      setFoodIndex(4);
    } else if (foodIndex == 4) {
      setFoodIndex(5);
    } else if (foodIndex == 5) {
      setFoodIndex(0);
    }
  }

  //food limit
  const [foodlimit, setFoodlimit] = useState(true);
  const [foodvalue, setFoodValue] = useState(0);
  const { burger, setBurger } = useContext(AllContext);
  const { telur, setTelur } = useContext(AllContext);
  const { ikangoreng, setIkangoreng } = useContext(AllContext);
  const { steak, setSteak } = useContext(AllContext);
  const { ayampanggang, setAyampanggang } = useContext(AllContext);
  const { salad, setSalad } = useContext(AllContext);

  useEffect(
    () => {
      if (burger <= 0 && foodIndex == 0) {
        setFoodlimit(false);
      } else if (telur <= 0 && foodIndex == 1) {
        setFoodlimit(false);
      } else if (ikangoreng <= 0 && foodIndex == 2) {
        setFoodlimit(false);
      } else if (ayampanggang <= 0 && foodIndex == 3) {
        setFoodlimit(false);
      } else if (salad <= 0 && foodIndex == 4) {
        setFoodlimit(false);
      } else if (steak <= 0 && foodIndex == 5) {
        setFoodlimit(false);
      } else {
        setFoodlimit(true);
      }
    },
    [burger][lastfood],
    [foodIndex]
  );

  //total bill
  useEffect(() => {
    if (lastfood != 0) {
      StatFunction(makan, setMakan, COLLECTION[foodIndex].hunger, 0);
      // setMakan(makan + COLLECTION[foodIndex].hunger);
      if (COLLECTION[foodIndex].name === 'burger') {
        setBurger(burger - 1);
        setFoodValue(burger);
      }
      if (COLLECTION[foodIndex].name === 'friedegg') {
        setTelur(telur - 1);
        setFoodValue(telur);
      }
      if (COLLECTION[foodIndex].name === 'friedfish') {
        setIkangoreng(ikangoreng - 1);
        setFoodValue(ikangoreng);
      }
      if (COLLECTION[foodIndex].name === 'roaschicken') {
        setAyampanggang(ayampanggang - 1);
        setFoodValue(ayampanggang);
      }
      if (COLLECTION[foodIndex].name === 'salad') {
        setSalad(salad - 1);
        setFoodValue(salad);
      }
      if (COLLECTION[foodIndex].name === 'steak') {
        setSteak(steak - 1);
        setFoodValue(steak);
      }
      setLastFood('');
    }
  }, [lastfood]);

  // buat gif makan
  const { startEAT, setStartEat } = useContext(AllContext);
  const [EatGIFOne, setEatGIFOne] = useState(mukbangA);
  useEffect(() => {});

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box className="Eat" bgImage={makanbg}>
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
            <Text pos={'absolute'} top="0px" left={0} right={0}>
              Let's Eat!
            </Text>
          </GridItem>
          <GridItem className="gridItems" rowSpan={3} colSpan={3}>
            <Text
              pos="absolute"
              margin={'auto'}
              left="0"
              right="0"
              width={'100px'}
              top="140px"
              zIndex={10}
              textAlign="center"
            >
              {makan}/100
            </Text>
            <Progress
              zIndex={9}
              transform={'rotate()'}
              pos="absolute"
              margin={'auto'}
              top="140px"
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
              <Flex
                h="600px"
                width="100%"
                justifyContent={'center'}
                paddingTop={{ base: '80px', sm: '40px' }}
                //ref={drop}
                style={
                  {
                    //border: isOver ? '10px solid red' : '1px solid black',
                  }
                }
              >
                <ShoppingBag items={shoppingBagItems} />
              </Flex>
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
              <GridItem
                className="gridItems"
                rowSpan={1}
                colSpan={1}
              ></GridItem>
              <GridItem className="gridItems" rowSpan={1} colSpan={1}>
                <Center>
                  <Box
                    className="titleFood"
                    bgColor="yellow.200"
                    borderRadius="10px"
                    width="100px"
                    pos="fixed"
                  ></Box>
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
                      variant="unstyled"
                      border={'none'}
                      filter="contrast(300%)"
                      _hover={{ filter: 'contrast(400%)' }}
                      leftIcon={
                        <Image width={'70px'} height="100px" src={previcon} />
                      }
                      _focus={{ outline: 'none' }}
                      _focusVisible={{ outline: 'none' }}
                    ></Button>
                    {foodlimit ? (
                      <Shop items={COLLECTION} />
                    ) : (
                      <>
                        <Text>Makanan Habis</Text>
                      </>
                    )}
                    {(() => {
                      switch (foodIndex) {
                        case 0:
                          return (
                            <>
                              <FoodCard item={burger} content="Burger" />
                            </>
                          );
                        case 1:
                          return (
                            <>
                              <FoodCard item={telur} content="Telur Goreng" />
                            </>
                          );
                        case 2:
                          return (
                            <>
                              <FoodCard
                                item={ikangoreng}
                                content="Ikan Goreng"
                              />
                            </>
                          );
                        case 3:
                          return (
                            <>
                              <FoodCard
                                item={ayampanggang}
                                content="Ayam Panggang"
                              />
                            </>
                          );
                        case 4:
                          return (
                            <>
                              <FoodCard item={salad} content="Salad" />
                            </>
                          );
                        case 5:
                          return (
                            <>
                              <FoodCard item={steak} content="Steak" />
                            </>
                          );
                        default:
                          return null;
                      }
                    })()}
                    <Button
                      transform="translateX(100px)"
                      position="absolute"
                      onClick={nextFood}
                      variant="unstyled"
                      border={'none'}
                      filter="contrast(300%)"
                      _hover={{ filter: 'contrast(400%)' }}
                      leftIcon={
                        <Image width={'70px'} height="100px" src={nexticon} />
                      }
                      _focus={{ outline: 'none' }}
                      _focusVisible={{ outline: 'none' }}
                    ></Button>
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
    </DragDropContext>
  );
}

export default Eat2;
