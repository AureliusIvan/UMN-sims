
import { useEffect, useContext, useState } from 'react';
import {
  Grid,
  GridItem,
  Box,
  Button,
  VStack,
  useToast,
} from '@chakra-ui/react';
import MapPop from '../../components/buttons/MapPop';
import PartTimeCafe from './partTimeCafe';

import { AllContext } from '../../components/Value/CoinContext';
import bgPagi from './asset/Noon.jpg';
import bgSore from './asset/Dawn.jpg';
import bgMalam from './asset/Night.jpg';
import Ngopi from './ngopi';

function Cafe(props) {
  const { hour, SetHour } = useContext(AllContext);
  function changeBg() {
    if (hour >= 7 && hour < 12) {
      return bgPagi;
    } else if (hour >= 12 && hour < 15) {
      return bgPagi;
    } else if (hour >= 15 && hour < 17) {
      return bgSore;
    } else if (hour >= 18 || hour < 7) {
      return bgMalam;
    }
  }

  return (
    <Box
      bgImage={changeBg}
      transition="0.5s"
      bgRepeat="no-repeat"
      bgSize={'cover'}
      className="cafe"
    >
      <Grid
        className="Grid"
        h="100vh"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={0}
      >
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
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
        
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>        </GridItem>

        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <VStack spacing={4} align="end">
            <PartTimeCafe />
            <Ngopi />
          </VStack>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
      </Grid>
    </Box>
  );
}

export default Cafe;
