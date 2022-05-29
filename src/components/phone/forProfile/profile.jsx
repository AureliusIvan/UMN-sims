import { Box, Center, Flex, Spacer, VStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AllContext } from '../../Value/CoinContext';

function Profile() {
  const { jurusan, setJurusan } = useContext(AllContext);
  const { character, setCharacter } = useContext(AllContext);
  const { nama, setNama } = useContext(AllContext);
  const { realtime, setRealtime } = useContext(AllContext);
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
        <Flex>Nama : {nama}</Flex>
        <Flex>Jurusan : {jurusan}</Flex>
        <Flex>Playtime : {realtime}</Flex>
      </VStack>
    </Box>
  );
}

export default Profile;
