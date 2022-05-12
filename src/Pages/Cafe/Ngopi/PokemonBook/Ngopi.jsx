import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import Pokemon from './Pokemon';
import Phone from '../../../../components/phone/phoneMain';
import Pause from '../../../../components/buttons/PauseBtn';


function Ngopi() {
  return (
    <Box bgColor={'blue.300'}>
      <Grid
        className="Grid"
        h="100vh"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={0}
      >
        <GridItem className="gridItems" rowSpan={4} colSpan={1}>
          <Pause />
        </GridItem>
        <GridItem className="gridItems" rowSpan={5} colSpan={1}>
          <Pokemon />
          <Box
            bgColor={'rgb(94, 70, 58)'}
            w="50vh"
            h="50vh"
            position={'absolute'}
            borderRadius="50%"
            top={0}
            bottom={0}
            left={0}
            right={0}
            margin={'auto'}
            border="2px solid rgb(94, 70, 58)"
            bgSize={'cover'}
            overflow="hidden"
            zIndex={-1}
          >
            <Box
              bgColor={'rgb(0, 0, 0, .2)'}
              w="400px"
              h="400px"
              position={'absolute'}
              margin="auto"
              top={0}
              bottom={0}
              right={0}
              left={0}
              transform={'translateX(50%) translateY(20%)'}
              borderRadius="50%"
              bgSize={'cover'}
            ></Box>
          </Box>
        </GridItem>
        <GridItem className="gridItems" rowSpan={4} colSpan={1}></GridItem>

        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Phone />
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>

      </Grid>
    </Box>
  );
}

export default Ngopi;
