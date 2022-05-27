import { Box, Center, Flex } from '@chakra-ui/react';
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
      height={'100px'}
      width="270px"
      bgColor={'red.200'}
    >
      <Center>Profile</Center>
      <Flex>Nama : {nama}</Flex>
      <Flex>Jurusan : {jurusan}</Flex>
      <Flex>Playtime : {realtime}</Flex>
    </Box>
  );
}

export default Profile;
