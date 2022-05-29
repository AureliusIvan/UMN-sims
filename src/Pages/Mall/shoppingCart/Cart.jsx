import React, { useState, useContext, useCallback, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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
  Images,
  useToast
} from '@chakra-ui/react';
import tomato from './itemimage/tomato.png';
import beef from './itemimage/beef.png';
import bread from './itemimage/bread.png';
import cabbage from './itemimage/cabbage.png';
import chicken from './itemimage/chicken.png';
import eggtray from './itemimage/eggtray.png';
import salt from './itemimage/saltandpepper.png';
import Currency from '../../../components/buttons/Currency';

const COLLECTION = [
  {
    id: uuid(),
    label: 'tomat0',
    url: tomato,
    price: 50,
  },
  {
    id: uuid(),
    label: 'beef',
    url: beef,
    price: 500,
  },
  {
    id: uuid(),
    label: 'bread',
    url: bread,
    price: 100,
  },
  {
    id: uuid(),
    label: 'cabbage',
    url: cabbage,
    price: 125,
  },
  {
    id: uuid(),
    label: 'chicken',
    url: chicken,
    price: 300,
  },
  {
    id: uuid(),
    label: 'egg',
    url: eggtray,
    price: 200,
  },
];

const getRenderItem = (items, className) => (provided, snapshot, rubric) => {
  const item = items[rubric.source.index];
  return (
    <React.Fragment>
      <Box
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        style={provided.draggableProps.style}
        className={snapshot.isDragging ? 'dragging' : ''}
      >
        <img className="dragitemss" src={item.url} />
      </Box>
    </React.Fragment>
  );
};

function Copyable(props) {
  return (
    <Droppable
      renderClone={getRenderItem(props.items, props.className)}
      droppableId={props.droppableId}
      isDropDisabled={true}
    >
      {(provided, snapshot) => (
        <Grid
          position={'absolute'}
          left="0"
          top={'100px'}
          width="240px"
          h="80vh"
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(2, 1fr)"
          rowGap={20}
          ref={provided.innerRef}
          className={props.className}
          bgColor="green.100"
        >
          {props.items.map((item, index) => {
            const shouldRenderClone = item.id === snapshot.draggingFromThisWith;
            return (
              <React.Fragment key={item.id}>
                {shouldRenderClone ? (
                  <Box></Box>
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
                          <Text
                            bgColor="red.200"
                            textAlign="center"
                            borderRadius="10px"
                          >
                            {item.label}
                          </Text>
                          <img src={item.url} />
                          <Text
                            bgColor="blue.200"
                            textAlign="center"
                            borderRadius="10px"
                          >
                            {'$'}
                            {item.price}
                          </Text>
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

function Shop(props) {
  return <Copyable droppableId="SHOP" items={props.items} />;
}

function ShoppingBag(props) {
  return (
    <Droppable droppableId="BAG">
      {(provided, snapshot) => (
        <Grid
          margin={'10px'}
          h={{ base: '200px', sm: '300px', md: '400px' }}
          width={{ base: '200px', sm: '300px', md: '400px' }}
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={0}
          bgColor={'blue.100'}
          ref={provided.innerRef}
          overflow="hidden"
          borderRadius={'10px'}
        >
          {props.items.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided, snapshot) => (
                <GridItem
                  rowSpan={1}
                  colSpan={1}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={provided.draggableProps.style}
                  className="dragableitemshop"
                >
                  <img src={item.url} />
                </GridItem>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </Grid>
      )}
    </Droppable>
  );
}

const reorder = (list, startIndex, endIndex) => {
  const [removed] = list.splice(startIndex, 1);
  list.splice(endIndex, 0, removed);
  return list;
};

const copy = (source, destination, droppableSource, droppableDestination) => {
  const item = source[droppableSource.index];
  destination.splice(droppableDestination.index, 0, { ...item, id: uuid() });
  return destination;
};

function Cart() {
  const { coin, setCoin } = useContext(AllContext);
  const [total, setTotal] = useState(0);
  const [lastitem, setLastitem] = useState('');
  const [shoppingBagItems, setShoppingBagItems] = useState([]);

  //bahan makanan temp
  const [tomatoz, setTomatoz] = useState(0);
  const [breadz, setBreadz] = useState(0);
  const [beefz, setBeefz] = useState(0);
  const [saltz, setSaltz] = useState(0);
  const [cabbagez, setCabbagez] = useState(0);
  const [chickenz, setChickenz] = useState(0);
  const [eggtrayz, setEggtrayz] = useState(0);
  //bahan makanan
  const { tomato, setTomato } = useContext(AllContext);
  const { bread, setBread } = useContext(AllContext);
  const { beef, setBeef } = useContext(AllContext);
  const { salt, setSalt } = useContext(AllContext);
  const { cabbage, setCabbage } = useContext(AllContext);
  const { chicken, setChicken } = useContext(AllContext);
  const { eggtray, setEggtray } = useContext(AllContext);

  //function keranjang
  const [kosong, setKosong] = useState(true);
  //Toast notif
  const toast = useToast();
  const toastIdRef = React.useRef();
  const id = 'test-toast';
  function addToast() {
    toastIdRef.current = toast({
      id,
      description: 'Sukses Membeli',
      position: 'top',
      status: 'success',
      duration: '2000'
    });
  }

  function addToastWarn() {
    toastIdRef.current = toast({
      id,
      description: 'Gagal Membeli',
      position: 'top',
      status: 'error',
      duration: '2000'
    });
  }
  //
  const onDragEnd = useCallback(
    result => {
      const { source, destination } = result;
      if (!destination) {
        return;
      }
      switch (source.droppableId) {
        case destination.droppableId:
          setShoppingBagItems(state =>
            reorder(state, source.index, destination.index)
          );
          break;
        case 'SHOP':
          setShoppingBagItems(state =>
            copy(COLLECTION, state, source, destination)
          );
          setLastitem(COLLECTION[source.index]);
          break;
        default:
          break;
      }
    },
    [setShoppingBagItems]
  );

  //total bill
  useEffect(() => {
    if (lastitem.price != undefined) {
      setKosong(false);
      setTotal(total + lastitem.price);
      if (lastitem.label == 'cabbage') {
        setCabbagez(cabbagez + 1);
      }
      if (lastitem.label == 'beef') {
        setBeefz(beefz + 1);
      }
      if (lastitem.label == 'tomato') {
        setTomatoz(tomatoz + 1);
      }
      if (lastitem.label == 'bread') {
        setBreadz(breadz + 1);
      }
      if (lastitem.label == 'egg') {
        setEggtrayz(eggtrayz + 1);
      }
      if (lastitem.label == 'chicken') {
        setChicken(chicken + 1);
      }
    }
    setLastitem('');
  }, [lastitem]);

  //reset bag
  function Reset() {
    setShoppingBagItems([]);
    setTomatoz(0);
    setBreadz(0);
    setBeefz(0);
    setSaltz(0);
    setCabbagez(0);
    setChickenz(0);
    setEggtrayz(0);
    setTotal(0);
    setKosong(true);
  }

  //pay algoritm
  function pay() {
    if (coin >= total) {
      setCoin(coin - total);
      setTomato(tomato + tomatoz);
      setBread(bread + breadz);
      setBeef(beef + beefz);
      setCabbage(cabbage + cabbagez);
      setChicken(chicken + chickenz);
      setEggtray(eggtray + eggtrayz);
      Reset();
      addToast();
    }
    else {
      addToastWarn();
    }
  }

  return (
    <Flex
      h={'100vh'}
      width="100%"
      padding="20px"
      justifyContent={'center'}
      bgColor="orange.100"
      overflow={"hidden"}
    >
      <Box
        bgColor={'blue.500'}
        pos="absolute"
        top={'0'}
        h="60px"
        width="100%"
        display={'flex'}
        justifyContent="center"
        fontSize={'40px'}
        color="white"
      >
        Market
      </Box>
      <DragDropContext onDragEnd={onDragEnd}>
      <Box
          position={'absolute'}
          right={{ base: '10px', sm: '20x' }}
          left={{ base: '10px', sm: '20x' }}
          margin="auto"
          transform={'translateY(30px)'}
        >
          <Currency />
        </Box>
        <Flex>
          <Box>
            <Shop items={COLLECTION} />
          </Box>
          <Box pos={'absolute'} right="0" top={'150px'}>
            {kosong ? (
              <Flex
                pos="absolute"
                bottom="55px"
                left="0"
                right={0}
                margin="auto"
                w={{ base: '200px', sm: '300px', md: '400px' }}
                h={{ base: '200px', sm: '300px', md: '400px' }}
                bgColor="blue.600"
                justifyContent="center"
                alignItems={'center'}
                fontSize="30px"
                color={"white"}
                textAlign="center"
                borderRadius={"10px"}
              >
                Keranjang masih kosong
                <br />
                Seret Barang kedalam Sini!
              </Flex>
            ) : (
              ''
            )}
            <ShoppingBag items={shoppingBagItems} />
            <Flex>
              <Box color="white" p="10px" bgColor="rgba(0, 0, 0, 0.7);">
                <Text>Subtotal: {total}</Text>
              </Box>
              <Button colorScheme="red" fontWeight="sm" onClick={Reset}>
                reset{' '}
              </Button>
              <Button bgColor={'blue.400'} color="white" onClick={pay}>
                Pay
              </Button>
            </Flex>
          </Box>
        </Flex>
      </DragDropContext>
    </Flex>
  );
}

export default Cart;
