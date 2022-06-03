import React, { useContext, useEffect, useState } from 'react';
import {
  VStack,
  Grid,
  GridItem,
  Box,
  Button,
  Text,
  Center,
  Flex,
  Divider,
  Image,
  Tooltip,
} from '@chakra-ui/react';
import MapPop from '../../components/buttons/MapPop';
import { AllContext } from '../../components/Value/CoinContext';
import BgPagi from './bg/Pagi.png';
import BgSiang from './bg/Siang.png';
import BgSore from './bg/Sore.png';
import BgMalem from './bg/Malem.png';
import Notif from './testNotif';
import Player from '../../audio';
import makanImg from '../../components/asset/home/makan.png';
import masakImg from '../../components/asset/home/Cooking.png';
import mainImg from '../../components/asset/home/Controller.png';
import Sleep from './sleep';

function Home(props) {
  const { nama, setNama } = useContext(AllContext);
  const { coin, setCoin, prevCoin } = useContext(AllContext);
  const { makan, setMakan } = useContext(AllContext);
  const { tidur, setTidur } = useContext(AllContext);
  const { jurusan } = useContext(AllContext);
  const { bghome, setBgHome } = useContext(AllContext);
  const { hour, SetHour } = useContext(AllContext);

  function changeBg() {
    if (hour >= 7 && hour < 12) {
      return BgPagi;
    } else if (hour >= 12 && hour < 15) {
      return BgSiang;
    } else if (hour >= 15 && hour < 17) {
      return BgSore;
    } else if (hour >= 18 || hour < 7) {
      return BgMalem;
    }
  }

  useEffect(() => {
    // if (makan < 50)
    //   console.log ("makan under 50");
    if (makan === 0) console.log('game over');
  }, [makan]);

  return (
    <Box
      backgroundImage={changeBg}
      bgPos="center"
      transition="0.5s"
      bgRepeat="no-repeat"
      bgSize={'cover'}
      bgPosition="center"
      className="home"
    >
      <Player url="" />
      <Grid
        className="Grid"
        h="100vh"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={0}
      >
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Center>
            <Text></Text>
          </Center>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>

        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <MapPop
            home={() => props.handleClick('home')}
            cafe={() => props.handleClick('cafe')}
            mall={() => props.handleClick('mall')}
            uni={() => props.handleClick('uni')}
          />
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>

        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>

        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>

        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <VStack align="end" p={{ base: 3, md: 8 }} spacing={3}>
            <Flex
              p={3}
              borderRadius={15}
              flexDir="column"
              justifySelf="center"
              alignContent="center"
              bg="rgba(255,255,255, 0.5)"
              width="100%"
              backdropFilter="blur(5px)"
              shadow="xl"
              zIndex={101}
            >
              <Box
                textAlign="center"
                color="black"
                border="2px solid white"
                bg="rgba(237,100,166, 0.7)"
                py={1}
                borderRadius={10}
                fontSize="xl"
              >
                Menu
              </Box>
              <Flex
                flexDir={{ base: 'column', md: 'row' }}
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Choice
                  label="eat"
                  src={makanImg}
                  function={() => props.handleClick('eat')}
                />
                <Divider display={{ base: 'block', md: 'none' }} />
                <Choice
                  label="cook"
                  src={masakImg}
                  function={() => props.handleClick('cook')}
                />
              </Flex>
              <Divider display={{ base: 'block', md: 'none' }} />
              <Flex
                flexDir={{ base: 'column', md: 'row' }}
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Sleep />
                <Divider display={{ base: 'block', md: 'none' }} />
                <Choice
                  zIndex={1000}
                  label="play minigame"
                  src={mainImg}
                  function={() => props.handleClick('Minigames')}
                />
              </Flex>
            </Flex>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

function Choice(props) {
  return (
    <Tooltip label={props.label} placement="start">
      <Image
        src={props.src}
        width={{ base: 85, sm: 90, md: 125 }}
        height={{ base: 85, sm: 90, md: 125 }}
        cursor="pointer"
        transition="0.3s"
        _hover={{ transform: 'scale(1.1)' }}
        filter="drop-shadow(5px 5px white)"
        onClick={props.function}
      />
    </Tooltip>
  );
}

export default Home;
