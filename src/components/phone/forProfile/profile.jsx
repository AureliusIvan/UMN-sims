import { Box, Center, Flex, Spacer, VStack, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AllContext } from '../../Value/CoinContext';

function Profile() {
  const { jurusan, setJurusan } = useContext(AllContext);
  const { character, setCharacter } = useContext(AllContext);
  const { nama, setNama } = useContext(AllContext);
  const { realtime, setRealtime } = useContext(AllContext);
  const { level, setLevel } = useContext(AllContext);
  return (
    <Box
      borderRadius={'10px'}
      padding={'10px'}
      position={'absolute'}
      left="0"
      right={'0'}
      margin={'auto'}
      transform="translateY(10px)"
      height={'300px'}
      width="270px"
      bgColor={'red.200'}
    >
      <Center m="10px" bgColor={'red.300'} borderRadius="10px">
        Profile
      </Center>
      <VStack
        bgColor={'red.300'}
        borderRadius="10px"
        spacing={4}
        p="10px"
        align="stretch"
      >
        <Flex gap={2}>
          <Text
            width={'100px'}
            bgColor="red.500"
            textColor={'white'}
            padding="4px"
            borderRadius={'10px'}
          >
            Nama
          </Text>
          <Text
            width={'100px'}
            bgColor="white"
            textColor={'black'}
            padding="4px"
            borderRadius={'10px'}
          >
            {nama}
          </Text>
        </Flex>
        <Flex gap={2}>
          <Text
            width={'100px'}
            bgColor="red.500"
            textColor={'white'}
            padding="4px"
            borderRadius={'10px'}
          >
            Jurusan
          </Text>
          <Text
            width={'100px'}
            bgColor="white"
            textColor={'black'}
            padding="4px"
            borderRadius={'10px'}
          >
            {jurusan}
          </Text>
        </Flex>
        <Flex gap={2}>
          <Text
            width={'100px'}
            bgColor="red.500"
            textColor={'white'}
            padding="4px"
            borderRadius={'10px'}
          >
            Level
          </Text>
          <Text
            width={'100px'}
            bgColor="white"
            textColor={'black'}
            padding="4px"
            borderRadius={'10px'}
          >
            {level}
          </Text>
        </Flex>
        <Flex gap={2}>
          <Text
            width={'100px'}
            bgColor="red.500"
            textColor={'white'}
            padding="4px"
            borderRadius={'10px'}
          >
            PlayTime
          </Text>
          <Text
            width={'100px'}
            bgColor="white"
            textColor={'black'}
            padding="4px"
            borderRadius={'10px'}
          >
            {realtime} Minutes
          </Text>
        </Flex>
        
      </VStack>
    </Box>
  );
}

export default Profile;
