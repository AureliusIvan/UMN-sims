import React, { useState, useContext, useEffect } from 'react';
import {
  Grid,
  GridItem,
  Box,
  VStack,
  Flex,
  Divider,
  Button,
} from '@chakra-ui/react';
import bgday from './bg/library.png';
import bgdayrain from './bg/library.png';
import bgdawn from './bg/library.png';
import bgnight from './bg/library.png';
import bgnightrain from './bg/library.png';
import { AllContext } from '../../components/Value/CoinContext';
import Baca from './baca';
import Pustakawan from './pustakawan';
import gifA from '../../components/asset/gif/mukbang/Mukbangngopi.gif';
import gifB from '../../components/asset/gif/gamers/Gamerngopi.gif';
import gifC from '../../components/asset/gif/holkay/Holkayngopi.gif';
import gifD from '../../components/asset/gif/coding/Codingngopi.gif';
import { ArrowBackIcon } from '@chakra-ui/icons';

function Univ(props) {
  const { hour, SetHour } = useContext(AllContext);
  const { weather, SetWeather } = useContext(AllContext);
  const { character, setCharacter } = useContext(AllContext);
  const [gif, setGIF] = useState(gifA);
  useEffect(() => {
    if (character === 1) {
      setGIF(gifA);
    } else if (character === 2) {
      setGIF(gifB);
    } else if (character === 3) {
      setGIF(gifC);
    } else if (character === 4) {
      setGIF(gifD);
    }
  });
  function changeBg() {
    if (hour >= 7 && hour < 12 && weather != 'Rain') {
      return bgday;
    } else if (hour >= 7 && hour < 12 && weather == 'Rain') {
      return bgdayrain;
    } else if (hour >= 12 && hour < 15 && weather != 'Rain') {
      return bgday;
    } else if (hour >= 12 && hour < 15 && weather == 'Rain') {
      return bgday;
    } else if (hour >= 15 && hour < 17 && weather != 'Rain') {
      return bgdawn;
    } else if (hour >= 15 && hour < 17 && weather == 'Rain') {
      return bgdawn;
    } else if (hour >= 18 || (hour < 7 && weather != 'Rain')) {
      console.log(weather);
      return bgnight;
    } else if (hour >= 18 || (hour < 7 && weather == 'Rain')) {
      return bgnightrain;
    }
  }
  return (
    <Box
      backgroundImage={changeBg}
      bgRepeat="no-repeat"
      bgSize={'cover'}
      className="uni"
    >
      <Grid
        className="Grid"
        h="100vh"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={0}
      >
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        <Button
          zIndex={1}
          pos={'absolute'}
          top="10px"
          left={'60px'}
          fontWeight={0}
          borderRadius={'50%'}
          h="50px"
          w="50px"
          padding={0}
          bgColor="white"
          onClick={() => props.handleClick('uni')}
          borderColor="black"
        >
          <ArrowBackIcon
            filter="invert(1)"
            h="50px"
            w={'50px'}
            position={'absolute'}
            _hover={{ filter: 'invert(0)' }}
          />
        </Button>
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
              backdropFilter="blur(5px)"
              shadow="xl"
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
              <Baca />
              <Divider />
              <Pustakawan />
            </Flex>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Univ;
