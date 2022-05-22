import { Box, Flex } from '@chakra-ui/react';
import { EatBar, SleepBar, PlayBar } from './StatusBar';

function StatusGroup() {
  return (
    <>
      <Flex>
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
    </>
  );
}

export default StatusGroup;
