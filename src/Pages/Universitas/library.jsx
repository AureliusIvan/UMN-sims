import React, { useState, useContext } from 'react';
import { 
  Grid, 
  GridItem,
   Box, 
   VStack, 
   Button } from '@chakra-ui/react';
import { CreateChar } from '../../components/character/CharacterCard';
import bgday from './bg/library.png';
import bgdayrain from './bg/library.png';
import bgdawn from './bg/library.png';
import bgnight from './bg/library.png';
import bgnightrain from './bg/library.png';
import { AllContext } from '../../components/Value/CoinContext';
import Baca from './baca';
import Pustakawan from './pustakawan';
import Currency from '../../components/buttons/Currency';
import Read from './read';

function Univ(props) {
  const { hour, SetHour } = useContext(AllContext);
  const { weather, SetWeather } = useContext(AllContext);
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
    } else if (hour >= 18 || hour < 7 && weather != 'Rain') {
      console.log(weather);
      return bgnight;
    } else if (hour >= 18 || hour < 7 && weather == 'Rain') {
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
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        <Box>
            <Currency />
          </Box>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        <Button className="gamebutton" onClick={() => props.handleClick('uni')}> Back </Button>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <CreateChar />
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        <VStack spacing={4} align="end">
        <Baca />
        <Pustakawan />
          </VStack>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>

        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
      </Grid>
    </Box>
  );
}

export default Univ;
