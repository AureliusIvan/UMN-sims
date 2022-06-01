import { Box, Flex } from '@chakra-ui/react';
import { EatBar, SleepBar, PlayBar } from './StatusBar';
import { Xp } from './Xp';

function StatusGroup() {
  return (
    <>
      <Flex pos={'absolute'} right="10px" transform='translateY(70px)'>
        <Box pos={'relative'}>
          <EatBar />
        </Box>
        <Box pos={'relative'}>
          <SleepBar />
        </Box>
        <Box pos={'relative'}>
          <PlayBar />
        </Box>
      </Flex>
      <Xp/>
    </>
  );
}

export default StatusGroup;
