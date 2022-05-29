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

function PageOne(props) {
  return (
    <Box
      backgroundColor="pink"
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
              bgColor="red.500"
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
              pointerEvents="all"
              transition="0.5s"
              _hover={{transform:"scale(1.15)"}}
              shadow="xl"
            >
              Play
            </Button>
            <Credit content="test" />
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default PageOne;
