import React, { forwardRef, useState, useContext, useEffect } from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';
import { AllContext } from '../Value/CoinContext';
import ducky from "../asset/icon/Coin.png"

function Currency(props) {
  const { coin, setCoin } = useContext(AllContext);
  const set = () => {
    setCoin(10);
  };
  return (
    <>
      <Flex
        alignItems="center"
        w={'200px'}
        overflow="hidden"
        h="50px"
        border={'1px solid white'}
        shadow="10px 5px black"
        borderRadius={'10px'}
        bgColor={'green.500'}
        pos="absolute"
        right="50px"
        top="10px"
        padding="10px"
        color={'white'}
      >
        <Image src={ducky} width="50px" height="50px" />
        <Box marginLeft={3}>{coin}</Box>
      </Flex>
    </>
  );
}

export default Currency;
