import React, { useState, useContext } from 'react';
import { Grid, GridItem, Box, VStack } from '@chakra-ui/react';
import MapPop from '../../components/buttons/MapPop';
import Study from './study';
import Read from './read';
import { CreateChar } from '../../components/character/CharacterCard';
import bgday from './bg/Day.png';
import bgdayrain from './bg/Rainday.png';
import bgdawn from './bg/Dawn.png';
import bgdawnrain from './bg/Raindawn.png';
import bgnight from './bg/Night.png';
import bgnightrain from './bg/Rainnight.png';
import { AllContext } from '../../components/Value/CoinContext';
import StatusGroup from '../../components/statusBar/StatusBarGroup';
import Currency from '../../components/buttons/Currency';

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
      return bgnight;
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
            <StatusGroup />
          </Box>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <MapPop
            home={() => props.handleClick('home')}
            cafe={() => props.handleClick('cafe')}
            mall={() => props.handleClick('mall')}
            uni={() => props.handleClick('uni')}
          />
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <CreateChar />
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>

        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <VStack spacing={4} align="end">
            <Study function={() => props.handleClick('class')} />
            <Read function={() => props.handleClick('library')}/>
          </VStack>
        </GridItem>

        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
      </Grid>
    </Box>
  );
}

export default Univ;
