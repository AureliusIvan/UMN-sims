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
    label: 'burger',
    url: tomato,
    price: 100,
  },
  {
    id: uuid(),
    label: 'fried egg',
    url: beef,
    price: 50,
  },
  {
    id: uuid(),
    label: 'fried fish',
    url: bread,
    price: 100,
  },
  {
    id: uuid(),
    label: 'roast chicken',
    url: cabbage,
    price: 200,
  },
  {
    id: uuid(),
    label: 'salad',
    url: chicken,
    price: 100,
  },
  {
    id: uuid(),
    label: 'steak',
    url: eggtray,
    price: 500,
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
          templateRows="repeat(6, 1fr)"
          gap={10}
          ref={provided.innerRef}
          className={props.className}
        >
          {props.items.map((item, index) => {
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
  return <Copyable droppableId="SHOP" className="shop" items={props.items} />;
}

function ShoppingBag(props) {
  return (
    <Droppable droppableId="BAG">
      {(provided, snapshot) => (
        <Flex ref={provided.innerRef} className="shopping-bag">
          {props.items.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided, snapshot) => (
                <Flex
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={provided.draggableProps.style}
                  className="dragableitemshop"
                >
                  <img src={item.url} />
                </Flex>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </Flex>
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

function Eat2() {
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
          setShoppingBagItems(state =>
            copy(COLLECTION, state, source, destination)
          );
          setLastitem(COLLECTION[source.index].price);
          break;
        default:
          break;
      }
    },
    [setShoppingBagItems]
  );

  //total bill
  useEffect(() => {
    console.log(lastitem);
    setTotal(total + lastitem);
    setLastitem(0);
  }, [lastitem]);

  //reset bag
  function Reset() {
    setShoppingBagItems([]);
    setTotal(0);
  }

  //pay algoritm
  function pay() {
    if (coin >= total) setCoin(coin - total);
    Reset();
  }

  return (
    <Box padding="20px" bgColor="orange.100">
      <DragDropContext onDragEnd={onDragEnd}>
        <Currency />
        <Flex>
          <h2>Shop</h2>
          <Shop items={COLLECTION} />

          <Box>
            <h2>Shopping bag</h2>
            <Button colorScheme="red" fontWeight="sm" onClick={Reset}>
              reset{' '}
            </Button>
            <ShoppingBag items={shoppingBagItems} />
          </Box>
          <Box m="30px">
            <Box m="20px" color="white" p="10px" bgColor="rgba(0, 0, 0, 0.7);">
              <Text>Subtotal: {total}</Text>
            </Box>
            <Button onClick={pay} m="20px">
              Pay
            </Button>
          </Box>
        </Flex>
      </DragDropContext>
    </Box>

  );
}

export default Eat2;
