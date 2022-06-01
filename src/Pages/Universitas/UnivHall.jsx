import React, { useState, useContext } from 'react';
import { Grid, GridItem, Box, VStack, Flex, Tooltip, Image, Divider } from '@chakra-ui/react';
import MapPop from '../../components/buttons/MapPop';
import bgday from './bg/Day.png';
import bgdayrain from './bg/Rainday.png';
import bgdawn from './bg/Dawn.png';
import bgdawnrain from './bg/Raindawn.png';
import bgnight from './bg/Night.png';
import bgnightrain from './bg/Rainnight.png';
import { AllContext } from '../../components/Value/CoinContext';
import studyImg from '../../components/asset/uni/study.png'
import libraryImg from '../../components/asset/uni/Library.png'

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
      bgPosition="center"
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
              <Tooltip label="to classroom" placement='start'>
                <Image 
                  src={studyImg} 
                  width={{base:120, sm:140, md:165}}
                  cursor="pointer"
                  transition="0.3s"
                  _hover={{transform:"scale(1.1)"}}
                  filter="contrast(200%) drop-shadow(5px 5px white)"
                  onClick={() => props.handleClick('class')}
                />
              </Tooltip>
              <Divider />
              <Tooltip label="to library" placement='start'>
                <Image 
                  src={libraryImg} 
                  width={{base:120, sm:140, md:165}}
                  cursor="pointer"
                  transition="0.3s"
                  _hover={{transform:"scale(1.1)"}}
                  filter="contrast(200%) drop-shadow(5px 5px white)"
                  onClick={() => props.handleClick('library')}
                />
              </Tooltip>
            </Flex>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Univ;
