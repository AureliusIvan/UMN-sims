import { Image, Box, DefaultIcon, Flex, Text, Center } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move,
} from 'react-grid-dnd';
import './Cart.css';
import tomato from './itemimage/tomato.png';
import beef from './itemimage/beef.png';
import bread from './itemimage/bread.png';
import cabbage from './itemimage/cabbage.png';
import chicken from './itemimage/chicken.png';
import eggtray from './itemimage/eggtray.png';
import salt from './itemimage/saltandpepper.png';
function ShopCart() {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState({
    left: [
      {
        id: 1,
        name: 'Tomato',
        image: tomato,
        price: 1000,
      },
      {
        id: 2,
        name: 'beef',
        image: beef,
        price: 3000,
      },
      {
        id: 3,
        name: 'bread',
        image: bread,
        price: 500,
      },
      {
        id: 4,
        name: 'cabbage',
        image: cabbage,
        price: 100,
      },
      {
        id: 5,
        name: 'chicken',
        image: chicken,
        price: 1000,
      },
      {
        id: 6,
        name: 'egg',
        image: eggtray,
        price: 100,
      },
      {
        id: 7,
        name: 'salt',
        image: salt,
        price: 400,
      },
    ],
    right: [],
  });

  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    if (targetId) {
      const result = move(
        items[sourceId],
        items[targetId],
        sourceIndex,
        targetIndex
      );
      console.log(targetIndex);
      return setItems({
        ...items,
        [sourceId]: result[0],
        [targetId]: result[1],
      });
    }

    const result = swap(items[sourceId], sourceIndex, targetIndex);
    return setItems({
      ...items,
      [sourceId]: result,
    });
  }

  useEffect(() => {
    console.log(total);
  }, [total]);

  return (
    <GridContextProvider onChange={onChange}>
      <Center>
        <Text fontSize={'100px'}>{total}</Text>
      </Center>
      <Flex>
        <Box
          margin={'10px'}
          borderRadius="10px"
          padding={'20px'}
          bgColor={'red.100'}
        >
          <GridDropZone
            className="dropzone left"
            id="left"
            boxesPerRow={7}
            rowHeight={70}
          >
            {items.left.map(item => (
              <GridItem key={item.name}>
                <div className="grid-item">
                  <div className="grid-item-content">
                    <Image draggable="false" src={item.image} />
                    {items.price}
                  </div>
                </div>
              </GridItem>
            ))}
          </GridDropZone>
        </Box>
        <Box
          margin={'10px'}
          borderRadius="10px"
          padding={'20px'}
          bgColor={'green.300'}
        >
          <GridDropZone
            className="dropzone right"
            id="right"
            boxesPerRow={4}
            rowHeight={70}
          >
            {items.right.map(item => (
              <GridItem key={item.name}>
                <div className="grid-item">
                  <div className="grid-item-content">
                    <Image draggable="false" src={item.image} />
                    {items.price}
                  </div>
                </div>
              </GridItem>
            ))}
          </GridDropZone>
        </Box>
      </Flex>
    </GridContextProvider>
  );
}

export default ShopCart;
