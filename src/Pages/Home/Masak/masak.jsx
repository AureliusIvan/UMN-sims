import React, { useState, useContext } from 'react';
import { AllContext } from '../../../components/Value/CoinContext';
import {
  Box,
  Image,
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
  useToast,
} from '@chakra-ui/react';
//import makanan
import Burger from '../Eat/food/burger.png';
import FriedEgg from '../Eat/food/friedegg.png';
import RoastChicken from '../Eat/food/roastchicken.png';
import Salad from '../Eat/food/salad.png';
import Steak from '../Eat/food/steak.png';
import FriedFish from '../Eat/food/friedfish.png';
//import bahan
import beefimg from '../../Mall/shoppingCart/itemimage/beef.png';
import breadimg from '../../Mall/shoppingCart/itemimage/bread.png';
import cabbageimg from '../../Mall/shoppingCart/itemimage/cabbage.png';
import chickenimg from '../../Mall/shoppingCart/itemimage/chicken.png';
import eggimg from '../../Mall/shoppingCart/itemimage/egg.png';
import saltimg from '../../Mall/shoppingCart/itemimage/saltandpepper.png';
import tomatoimg from '../../Mall/shoppingCart/itemimage/tomato.png';

function FoodCard(props) {
  const { foodIndex, setFoodIndex } = useContext(AllContext);

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
  return (
    <Flex
      width={'300px'}
      transform={'translateY(10px)'}
      marginX="10px"
      bgColor="blue.400"
      color={'white'}
      border="2px solid white"
      borderRadius="10px"
      padding={'10px'}
      justifyContent="space-between"
    >
      <Button variant={'ghost'} bgColor={'null'} onClick={prevFood}>
        {'<'}
      </Button>
      <Image
        borderRadius={'50%'}
        bgColor="blue.600"
        width={'100px'}
        height="100px"
        src={props.image}
      />
      <Box>
        <Text
          paddingX={'10px'}
          width={'70px'}
          bgColor="white"
          color={'blackAlpha.800'}
          borderRadius="10px"
        >
          {props.name}
        </Text>
        <Text>Hunger : {props.info}</Text>
      </Box>
      <Button variant={'ghost'} onClick={nextFood}>
        {'>'}
      </Button>
    </Flex>
  );
}

function IngCard(props) {
  const { foodIndex, setFoodIndex } = useContext(AllContext);
  return (
    <>
      <Flex
        borderRadius={'10px'}
        margin={'10px'}
        width={'400px'}
        height="100px"
        bgColor={'blue.400'}
        border="2px solid white"
        alignItems="center"
        justifyContent={'space-around'}
      >
        <Flex justifyContent={'center'}>
          <Image
            borderRadius={'50%'}
            bgColor="blue.600"
            width={'70px'}
            height="70px"
            src={props.ing1}
          />
          <Text
            pos={'absolute'}
            transform="translateY(55px)"
            width={'70px'}
            border="1px solid white"
            bgColor={'red.500'}
            color="white"
            textAlign={'center'}
            borderRadius="10px"
          >
            1 / {props.jumlah1}
          </Text>
        </Flex>
        <Flex justifyContent={'center'}>
          <Image
            borderRadius={'50%'}
            bgColor="blue.600"
            width={'70px'}
            height="70px"
            src={props.ing2}
          />
          <Text
            pos={'absolute'}
            transform="translateY(55px)"
            width={'70px'}
            border="1px solid white"
            bgColor={'red.500'}
            color="white"
            textAlign={'center'}
            borderRadius="10px"
          >
            1 / {props.jumlah2}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

function SwitchFood(props) {
  const { foodIndex, setFoodIndex } = useContext(AllContext);
  return (
    <Box>
      {(() => {
        switch (foodIndex) {
          case 0:
            return <FoodCard image={Burger} name="burger" />;
          case 1:
            return <FoodCard image={FriedEgg} name="Fried Egg" />;
          case 2:
            return <FoodCard image={FriedFish} name="Fried Fish" />;
          case 3:
            return <FoodCard image={RoastChicken} name="Roast Chicken" />;
          case 4:
            return <FoodCard image={Salad} name="Salad" />;
          case 5:
            return <FoodCard image={Steak} name="Steak" />;
          default:
            return null;
        }
      })()}
    </Box>
  );
}

function SwitchIngredient(props) {
  const { foodIndex, setFoodIndex } = useContext(AllContext);
  const { tomato, setTomato } = useContext(AllContext);
  const { bread, setBread } = useContext(AllContext);
  const { beef, setBeef } = useContext(AllContext);
  const { salt, setSalt } = useContext(AllContext);
  const { cabbage, setCabbage } = useContext(AllContext);
  const { chicken, setChicken } = useContext(AllContext);
  const { eggtray, setEggtray } = useContext(AllContext);
  return (
    <Box>
      {(() => {
        switch (foodIndex) {
          case 0:
            return (
              <IngCard
                ing1={beefimg}
                ing2={breadimg}
                jumlah1={beef}
                jumlah2={bread}
              />
            );
          case 1:
            return (
              <IngCard
                ing1={eggimg}
                ing2={saltimg}
                jumlah1={eggtray}
                jumlah2={salt}
              />
            );
          case 2:
            return (
              <IngCard
                ing1={saltimg}
                ing2={beefimg}
                jumlah1={salt}
                jumlah2={beef}
              />
            );
          case 3:
            return (
              <IngCard
                ing1={chickenimg}
                ing2={saltimg}
                jumlah1={chicken}
                jumlah2={salt}
              />
            );
          case 4:
            return (
              <IngCard
                ing1={cabbageimg}
                ing2={tomatoimg}
                jumlah1={cabbage}
                jumlah2={tomato}
              />
            );
          case 5:
            return (
              <IngCard
                ing1={beefimg}
                ing2={saltimg}
                jumlah1={beef}
                jumlah2={salt}
              />
            );

          default:
            return null;
        }
      })()}
    </Box>
  );
}

function Masak(props) {
  const toast = useToast();
  const toastIdRef = React.useRef();
  const id = 'test-toast';
  function addToast() {
    toastIdRef.current = toast({
      id,
      description: 'Bahan Kurang',
      position: 'top',
      status: 'error',
      duration: '1000',
    });
  }

  function addToastsuccess() {
    toastIdRef.current = toast({
      id,
      description: 'Masak Selesai',
      position: 'top',
      status: 'success',
      duration: 1000,
    });
  }
  //const buat makanan
  const { foodIndex, setFoodIndex } = useContext(AllContext);
  const { burger, setBurger } = useContext(AllContext);
  const { telur, setTelur } = useContext(AllContext);
  const { ikangoreng, setIkangoreng } = useContext(AllContext);
  const { salad, setSalad } = useContext(AllContext);
  const { steak, setSteak } = useContext(AllContext);
  const { ayampanggang, setAyampanggang } = useContext(AllContext);

  //const buat bahan makanan
  const { tomato, setTomato } = useContext(AllContext);
  const { bread, setBread } = useContext(AllContext);
  const { beef, setBeef } = useContext(AllContext);
  const { salt, setSalt } = useContext(AllContext);
  const { cabbage, setCabbage } = useContext(AllContext);
  const { chicken, setChicken } = useContext(AllContext);
  const { eggtray, setEggtray } = useContext(AllContext);

  function Operate() {
    if (foodIndex == 0) {
      if (bread > 0 && beef > 0) {
        setBurger(burger + 1);
        setBeef(beef - 1);
        setBread(bread - 1);
        addToastsuccess();
      } else {
        if (!toast.isActive(id)) addToast(id);
      }
    } else if (foodIndex == 1) {
      if (telur > 0 && salt > 0) {
        setTelur(telur + 1);
        setEggtray(eggtray - 1);
        setSalt(salt - 1);
        addToastsuccess();
      } else {
        if (!toast.isActive(id)) addToast(id);
      }
    } else if (foodIndex == 2) {
      if (beef > 0 && salt > 0) {
        setIkangoreng(ikangoreng + 1);
        setBeef(beef - 1);
        setSalt(salt - 1);
        addToastsuccess();
      } else {
        if (!toast.isActive(id)) addToast(id);
      }
    } else if (foodIndex == 3) {
      if (chicken > 0 && salt > 0) {
        setAyampanggang(ayampanggang + 1);
        setChicken(chicken - 1);
        setSalt(salt - 1);
        addToastsuccess();
      } else {
        if (!toast.isActive(id)) addToast(id);
      }
    } else if (foodIndex == 4) {
      if (cabbage > 0 && tomato > 0) {
        setSalad(salad + 1);
        setCabbage(cabbage - 1);
        setTomato(tomato - 1);
        addToastsuccess();
      } else {
        if (!toast.isActive(id)) addToast(id);
      }
    } else if (foodIndex == 5) {
      if (beef > 0 && salt > 0) {
        setSteak(steak + 1);
        setBeef(beef - 1);
        setSalt(salt - 1);
        addToastsuccess();
      } else {
        if (!toast.isActive(id)) addToast(id);
      }
    }
  }

  return (
    <Box bgColor={'blue.200'} padding="20px" width="100%" h="100vh">
      <Flex
        width={'100%'}
        height="50px"
        bgColor="blue.300"
        pos={'absolute'}
        top="0"
        margin={'auto'}
        left="0"
        right={0}
      >
        <Button margin={'10px'} onClick={() => props.handleClick('home')}>
          {'Back'}
        </Button>
      </Flex>
      <Grid
        marginTop={'20px'}
        h="100%"
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={0}
      >
        <GridItem
          rowSpan={1}
          colSpan={3}
          bg=""
          display={'flex'}
          justifyContent="center"
          alignContent={'center'}
        >
          <SwitchFood />
        </GridItem>

        <GridItem rowSpan={3} colSpan={3} bg=""></GridItem>
        <GridItem
          rowSpan={1}
          colSpan={3}
          bg=""
          display={'flex'}
          justifyContent="center"
          alignContent={'center'}
        >
          <SwitchIngredient />
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={3}
          bg=""
          display={'flex'}
          justifyContent="center"
          alignContent={'center'}
        >
          <Button onClick={Operate}>Cook</Button>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Masak;
