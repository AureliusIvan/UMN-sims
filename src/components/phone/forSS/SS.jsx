import React from 'react';
import {Flex, Center, Box} from '@chakra-ui/react';

function ScreenShot() {
  return (
      <Box
          borderRadius={'10px'}
          padding={'10px'}
          position='absolute'
          left="0"
          right={'0'}
          margin={'auto'}
          transform="translateY(10px)"
          height={'100px'}
          width="270px"
          bgColor={'red.200'}
      >
        <Center>Profile</Center>
        <Flex>Nama : </Flex>
        <Flex>Jurusan : </Flex>
        <Flex>Playtime : </Flex>
      </Box>
  );
}

export default ScreenShot;
