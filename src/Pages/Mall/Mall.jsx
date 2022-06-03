import react, { useContext } from 'react';
import {
  Grid,
  GridItem,
  Box,
  Tooltip,
  VStack,
  Image,
  Flex,
  Divider,
} from '@chakra-ui/react';
import MapPop from '../../components/buttons/MapPop';
import PartTime from './partTimeMall';
import trolley from '../../components/asset/mall/Trolley.png';
import { AllContext } from '../../components/Value/CoinContext';
import bgday from './asset/Siang.jpg';
import bgdawn from './asset/Sore.jpg';
import bgnight from './asset/Night.jpg';
import bgdayrain from './asset/Rain.jpg';
function Mall(props) {
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
    } else if (hour >= 18 || (hour < 7 && weather != 'Rain')) {
      return bgnight;
    } else if (hour >= 18 || (hour < 7 && weather == 'Rain')) {
      return bgnight;
    }
  }
  return (
    <Box className="mall" bgImage={changeBg} bgPos="center">
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
              <PartTime />
              <Divider />
              <Tooltip label="shopping cart" placement="start">
                <Image
                  src={trolley}
                  width={{ base: 120, sm: 140, md: 165 }}
                  cursor="pointer"
                  transition="0.3s"
                  _hover={{ transform: 'scale(1.1)' }}
                  filter="drop-shadow(5px 5px white)"
                  onClick={() => props.handleClick('cart')}
                />
              </Tooltip>
            </Flex>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Mall;
