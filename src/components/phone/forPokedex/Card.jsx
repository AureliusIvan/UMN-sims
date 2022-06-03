import React from 'react';
import typeColors from './typeColors';
import { Box, Image, Flex, Text } from '@chakra-ui/react';

function PokeCard({ pokemon }) {
  const type = pokemon.types[0];
  return (
    <Flex
      margin={'10px'}
      mb={5}
      padding="10px"
      h={'120px'}
      w="220px"
      borderRadius={'10px'}
      bgColor={typeColors[type.type.name]}
      justifyContent="center"
      textAlign={'center'}
      alignItems={'center'}
      filter="drop-shadow(2px 1px 1px #222)"
    >
      <Flex
        h={'120px'}
        w="120px"
        borderRadius={'50%'}
        bgColor={'whiteAlpha.400'}
        justifyContent="center"
        alignContent="center"
        textAlign={'center'}
        alignItems={'center'}
      >
        <Image
          sizes="100%"
          src={pokemon.sprites.front_default}
          zIndex={3}
          margin={'10px'}
          filter="drop-shadow(5px 5px rgb(0,0,0, .5))"
        />
      <Text
          pos={'absolute'}
          bgColor={'yellow.100'}
          zIndex={'5'}
          transform="translateY(50px)"
          margin="auto"
          borderRadius="20px"
          textAlign={'center'}
          padding="5px"
          w={'100%'}
        >
          {pokemon.name}
        </Text>
      </Flex>

    </Flex>
  );
}

export default PokeCard;
