import { Box, Center, Grid, GridItem, Text, Button } from '@chakra-ui/react';

import { PhoneIcon, AddIcon, ArrowBackIcon } from '@chakra-ui/icons';

function Eat(props) {
  return (
    <Box className="Eat" bgGradient="linear(to-t, green.200, blue.500)">
      <Grid
        className="Grid"
        h="100vh"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={0}
      >
        <GridItem
          h="70px"
          className="gridItems"
          rowSpan={1}
          colSpan={3}
          bgGradient="linear(to-l, green.300, blue.600)"
          fontSize="50px"
          color="white"
          textAlign={'center'}
          shadow={'2px 1px 6px #2e2e2e'}
        >
          <Button
            zIndex={1}
            pos={'absolute'}
            top="10px"
            left={'10px'}
            bgColor="rgb(0, 0, 0, .0)"
            fontWeight={0}
            borderRadius={'50%'}
            h="50px"
            w="50px"
            padding={0}
            onClick={() => props.handleClick('home')}
          >
            <ArrowBackIcon h="50px" w={'50px'} position={'absolute'} />
          </Button>

          <Text pos={'absolute'} top="0px" left={0} right={0}>
            Eat
          </Text>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={3}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={3}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={3}>
          <Box
            width="400px"
            h={'200px'}
            bgColor='blue.100'
            transform="perspective(5px) rotateX(1deg)"
            margin={'auto'}
            position="absolute"
            bottom={'100px'}
            left={0}
            right={0}
            borderRadius="50%"

            shadow={'1px 1px 6px #2e2e2e'}
            overflow='hidden'
          >
              <Box

              bgColor='rgb(0, 0, 0, 0.2)'
              borderRadius={'50%'}
              transform='translateX(200px)'
              h='200px'
              w={'200px'}
              >

              </Box>
              <Box
                          width="200px"
                          h={'100px'}
                          bgColor='white'
                          margin={'auto'}
                          transform='translateY(50px) perspective(10px) rotateX(1deg)'
                          position="absolute"
                          bottom={'100px'}
                          left={0}
                          right={0}
                          borderRadius="50%"
                          border={'10px solid #dedede'}
                          shadow={'2px 1px 6px #2e2e2e'}

              >
                  
              </Box>
          </Box>
        </GridItem>
        <GridItem
          width={'100%'}
          h="20vh"
          pos={'fixed'}
          bottom={0}
          bgGradient="linear(to-l, green.300, blue.600)"
          className="gridItems"
          shadow={'2px 1px 6px #2e2e2e'}
          rowSpan={3}
          colSpan={1}
        ></GridItem>
      </Grid>
    </Box>
  );
}

export default Eat;
