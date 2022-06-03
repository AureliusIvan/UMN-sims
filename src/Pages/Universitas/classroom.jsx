import React, { useState, useContext } from 'react';
import { 
  Grid, 
  GridItem,
  Box, 
  VStack,
  Flex, 
  Button } from '@chakra-ui/react';
import bgday from './bg/Pagi.png';
import bgdayrain from './bg/Rain.png';
import bgdawn from './bg/Sore.png';
import bgnight from './bg/Sore.png';
import bgnightrain from './bg/Rain.png';
import { AllContext } from '../../components/Value/CoinContext';
import Belajar from './Belajar';
import Matkul from './matkul';
import { ArrowBackIcon } from '@chakra-ui/icons';

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
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        <VStack align="end" p={{base:3, md:8}} spacing={3}>
            <Flex 
                p={3} 
                borderRadius={15} 
                flexDir="column" 
                justifySelf="center" 
                alignContent="center" 
                bg="rgba(255,255,255, 0.5)"
                backdropFilter='blur(5px)'
                shadow="xl"
              >
              <Box textAlign="center" color="black" border="2px solid white" bg="rgba(237,100,166, 0.7)" py={1} borderRadius={10} fontSize="xl" >Menu</Box>
              <Matkul/>
            </Flex>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Univ;
