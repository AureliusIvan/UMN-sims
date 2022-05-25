import React, { useState, useEffect, useContext } from 'react';
import { useDrop, useDrag } from 'react-dnd';

import { Picture } from './pictures';
import ItemList from './shoppingList';
import './mall.css';
import { Box, Flex, Images, Text, Button } from '@chakra-ui/react';
import tomato from './itemimage/tomato.png';
import beef from './itemimage/beef.png';
import bread from './itemimage/bread.png';
import cabbage from './itemimage/cabbage.png';
import chicken from './itemimage/chicken.png';
import eggtray from './itemimage/eggtray.png';
import salt from './itemimage/saltandpepper.png';
import Currency from '../../../components/buttons/Currency';
import { AllContext } from '../../../components/Value/CoinContext';

const dragList = [
  {
    id: 1,
    name: 'tomato',
    url: tomato,
    price: 1000,
  },
  {
    id: 2,
    name: 'beef',
    url: beef,
    price: 500,
  },
  {
    id: 3,
    name: 'cabbage',
    url: cabbage,
    price: 200,
  },
  {
    id: 4,
    name: 'chicken',
    url: chicken,
    price: 700,
  },
  {
    id: 5,
    name: 'eggtray',
    url: eggtray,
    price: 100,
  },
];

const pictures = dragList.map(picture => (
  <Picture className="itemshop" url={picture.url} id={picture.id} />
));

function Dragdrop() {
  //All state
  //Coin
  const { tomato, setTomato } = useContext(AllContext);
  const { beef, setBeef } = useContext(AllContext);
  const { cabbage, setCabbage } = useContext(AllContext);
  const { chicken, setChicken } = useContext(AllContext);
  const { eggtray, setEggtray } = useContext(AllContext);
  const [tomatoz, setTomatoz] = useState(0);
  const [beefz, setBeefz] = useState(0);
  const [cabbagez, setCabbagez] = useState(0);
  const [chickenz, setChickenz] = useState(0);
  const [eggtrayz, setEggtrayz] = useState(0);
  const { coin, setCoin } = useContext(AllContext);
  //Bahan makanan

  //
  const [total, setTotal] = useState(0);
  const [board, setBoard] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: item => addImage(item.id),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [count, setCount] = useState(0);
  const [temp, setTemp] = useState(0);
  useEffect(() => {
    if (isOver == true) {
      const lastItem = board[board.length - 1];
      setTotal(total + lastItem.price);
      if (lastItem.id == 1) {
        setTomatoz(tomatoz + 1);
      } else if (lastItem.id == 2) {
        setBeefz(beefz + 1);
      } else if (lastItem.id == 3) {
        setCabbagez(cabbagez + 1);
      } else if (lastItem.id == 4) {
        setChickenz(chickenz + 1);
      } else if (lastItem.id == 5) {
        setEggtrayz(eggtrayz + 1);
      }
    }
  }, [board]);

  const addImage = id => {
    const droppedPictures = dragList.filter(picture => id === picture.id);
    setBoard(board => [...board, droppedPictures[0]]);
  };

  const boardImages = board.map(picture => (
    <Box>
      <Picture className="itemshop" url={picture.url} id={picture.id} />
    </Box>
  ));

  function BuyItems() {
    setCoin(coin - total);
    setBoard([]);
    setTotal(0);
    setTomato(tomato + tomatoz);
    setBeef(beef + beefz);
    setCabbage(cabbage + cabbagez);
    setChicken(chicken + chickenz);
    setEggtray(eggtray + eggtrayz);
    setTomatoz(0);
    setBeefz(0);
    setCabbagez(0);
    setChickenz(0);
    setEggtrayz(0);
  }

  return (
      <>
    <Box margin={"10px"}>
      <Currency />
      <Flex className="drag-box">{pictures}</Flex>
      <br />
      <Box
        overflow={'hidden'}
        className="drop-board"
        ref={drop}
        style={{ border: isOver ? '3px solid red' : '1px solid black' }}
      >
        {boardImages}
      </Box>
      <Text color="black" width="100px">
        {total}
        <br />
        tomato:
        {tomato}
        <br />
        beef:
        {beef}
        <br />
        chicken:
        {chicken}
        <br />
        cabbage:
        {cabbage}
        <br />
        eggtray:
        {eggtray}
        <br />
      </Text>
      <Button onClick={BuyItems}>Buy</Button>
    </Box>
    </>
  );
}

export default Dragdrop;
