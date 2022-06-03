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
  Image,
  Button,
  Flex,
  useToast,
  Heading,
  VisuallyHidden
} from '@chakra-ui/react';
import Currency from '../../../components/buttons/Currency';
import COLLECTION from './collectionList';
import bg from "../../../components/background/mart.png"
import Canopy from './canopy';

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
        <Flex
          justifyContent="space-evenly"
          ref={provided.innerRef}
          className={props.className}
          bgColor="green.100"
          shadow="xl"
          px={3} 
          pt={5} 
          pb={0}
          width={{md:"60vh", sm:"80vh", base:"50vh"}}
          height={{md:"80vh", sm:"60vh", base:"110vh"}}
          flexWrap="wrap"
          overflow="scroll"
          borderRadius={20}
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
                        <Box
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
                            display={{base:"none", sm:"block"}}
                          >
                            {item.label}
                          </Text>
                          <Image src={item.url} />
                          <Text
                            bgColor="blue.200"
                            textAlign="center"
                            borderRadius="10px"
                          >
                            {'$'}{item.price}
                          </Text>
                        </Box>
                      </React.Fragment>
                    )}
                  </Draggable>
                )}
              </React.Fragment>
            );
          })}
          {provided.placeholder}
        </Flex>
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
          height={{ base: '200px', sm: '300px', md: '400px' }}
          w={{ base: 360, sm: 550 }}
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={0}
          bgColor={'blue.100'}
          ref={provided.innerRef}
          borderRadius={20}
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
      if (lastitem.label == 'salt') {
        setSaltz(saltz + 1);
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
      setSalt(salt + saltz);
      Reset();
      addToast();
    }
    else {
      addToastWarn();
    }
  }

  return (
    <Flex
      flexDir="column"
      minH="100vh"
      width="100%"
      alignItems={{base:"center", md:"normal"}}
      bgImage={bg}
      bgSize={{md:"cover", base:"contain"}}
      pb={10}
      // overflow={"hidden"}
    >
      <Flex
        bgColor={'blue.500'}
        h="70px"
        width="100%"
        justifyContent="center"
        alignItems="center"
        fontSize={'40px'}
        color="white"
      >
        Market
      </Flex>
      <DragDropContext onDragEnd={onDragEnd}>
        <Box
          position={'absolute'}
          right={{md:"30px", base:"15px"}}
          transform={'translate(40px, 70px)'}
        >
          <Currency />
        </Box>
        <Flex px={{base:"none", md:10}} mt={5} justifyContent={{md:"space-evenly", base:"center"}} flexDir={{base:"column", md:"row"}}>
          <Box>
            <Text fontSize='25px' mb={5}>Shopping List</Text>
            <Shop items={COLLECTION} />
          </Box>
          <Box mt={{md:0, base: 5}}>
            <Text fontSize='25px' mb={5}>My Shopping Cart</Text>
            <Box>
              {kosong ? (
                <Box>
                  <Flex
                    margin="auto"
                    w={{ base: 350, sm: 550 }}
                    h={{ base: 120, sm: 200, md: 400 }}
                    bgColor="rgba(43,108,176,0.8)"
                    justifyContent="center"
                    alignItems={'center'}
                    fontSize={{sm:"30px", base:"20px"}}
                    color={"white"}
                    textAlign="center"
                    borderRadius={20}
                    backdropFilter="blur(4px)"
                    shadow="xl"
                  >
                    Keranjang masih kosong
                    <br />
                    Seret Barang kedalam sini!
                  </Flex>
                  <VisuallyHidden>
                    <Box transform={{md:"translateY(-410px)", sm:"translateY(-210px)", base:"translateY(-130px)"}}>
                      <ShoppingBag items={shoppingBagItems} />
                    </Box>
                  </VisuallyHidden>
                </Box>
              ) : (
                <ShoppingBag items={shoppingBagItems} />
              )}
              <Flex flexDir={{base:"column", sm:"row"}} alignItems="center" justifyContent="space-around" mt={{md:8, base:5}}>
                <Flex color="white" borderRadius={5} justifyContent="center" alignItems="center" p="10px" w={{sm:40, base:80}} height={12} bgColor="rgba(0, 0, 0, 0.7);">
                  <Text>Subtotal: {total}</Text>
                </Flex>
                <Flex mt={{base:3, sm:0}} gap={{base:8, sm:0}}>
                  <Button colorScheme="red" fontWeight="md" minW={{sm:40, base:"120px"}} height={12} onClick={Reset}>
                    reset{' '}
                  </Button>
                  <Button display={{base:"block", sm:"none"}} bgColor={'blue.400'} color="white" fontWeight="md" minW={{sm:40, base:"120px"}} height={12} onClick={pay}>
                    Pay
                  </Button>
                </Flex>
                <Button display={{base:"none", sm:"block"}} bgColor={'blue.400'} color="white" fontWeight="md" minW={{sm:40, base:"120px"}} height={12} onClick={pay}>
                  Pay
                </Button>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </DragDropContext>
    </Flex>
  );
}

export default Cart;
