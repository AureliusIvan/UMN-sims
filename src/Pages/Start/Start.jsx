import {
  Box,
  Stack,
  Input,
  Header,
  Image,
  Center,
  Flex,
  Button,
  Text,
  Grid,
  GridItem,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Credit from './Credit';
import bg from '../../components/background/splash.png';
import mainBG from '../../components/background/Charselect.png';
import splash from './asset/splash.png';
import './Start.css';
import useSound from 'use-sound';
import ClickSound from '../../components/asset/sound/click.mp3';

function PageOne(props) {
  const [playActive] = useSound(ClickSound, { volume: 0.25 });
  return (
    <Box
      draggable="false"
      bgImage={mainBG}
      bgSize={{ md: 'cover', base: 'contain' }}
      backgroundColor="pink"
      bgPos="center"
      position="fixed"
      width="100%"
      height="100%"
      zIndex="100"
    >
      <Grid
        className="Grid"
        h="10vh"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={0}
      >
        <GridItem rowSpan={1} colSpan={3}>
          <Center mt="30px" gap="10px">
            <Text
              borderRadius="50px"
              w="300px"
              textAlign="center"
              padding="1px"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              color="white"
              fontSize="40px"
            >
              7 Days of UMN life
            </Text>
          </Center>
        </GridItem>
      </Grid>
      <Grid
        className="Grid"
        h="60vh"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={0}
      >
        <GridItem className="gridItems" rowSpan={1} colSpan={3}>
          <Center>
            <Image
              pos="absolute"
              margin="auto"
              left="-60px"
              right="0"
              top="0"
              bottom="20"
              src={bg}
              maxH="500px"
              filter="drop-shadow(5px 5px 5px black)"
            />
            <Image
              top={'0'}
              margin="auto"
              bottom={'50px'}
              left="80px"
              right="0"
              zIndex={'-1'}
              pos={'absolute'}
              src={splash}
            />
          </Center>
        </GridItem>
      </Grid>
      <Grid
        className="Grid"
        h="20vh"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={0}
      >
        <GridItem className="gridItems" rowSpan={1} colSpan={3}>
          <VStack spacing={5}>
            <Button
              width="80px"
              height="80px"
              borderRadius="50%"
              onClick={() => props.handleClick('selectchar')}
              onMouseDown={playActive}
              pointerEvents="all"
              transition="0.5s"
              _hover={{
                transform: 'scale(1.2)',
                bgGradient: 'linear(to-r, red.400, yellow.400)',
              }}
              shadow="xl"
              bgGradient="linear(to-l, red.500, yellow.500)"
              filter="invert(1)"
              paddingLeft={'25px'}
              className="StartBTN"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
              </svg>
            </Button>
            <Credit content="test" />
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default PageOne;
