import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
} from '@chakra-ui/react';
import { Image, Circle, Flex, Progress, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';
import HomeScreen from './homeScreen';
import phone from '../asset/icon/hp1.png';
import phoneHover from '../asset/icon/hp2.png';
import pointer from '../asset/cursor/cursor_point.png';

function Phone() {
  const [hover, setHover] = useState(false);
  const [load, setLoad] = useState(true);

  function Loading() {
    setTimeout(() => {
      setLoad(false);
    }, 700);
    console.log('loading...');
  }

  return (
    <Box zIndex={100}>
      <Popover placement='top-start' gutter={18} zIndex="1000" >
        <PopoverTrigger>
          <Image
            bottom={0} 
            position="absolute" 
            p={3}
            onClick={() => {
              Loading();
              setLoad(true);
            }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            src={!hover ? phone : phoneHover}
            width={{ base: 90, sm:110, md: 120 }}
            // className="usePointer"
            cursor="pointer"
          />
        </PopoverTrigger>
        <PopoverContent
          ml={4}
          bottom={-5}
          borderRadius={25}
          color="white"
          bg="blue.800"
          borderColor="blue.800"
        >
          <Flex justifyContent="center" py={2}>
            <Circle size="15px" bg="black"></Circle>
            <Circle alignSelf="center" ml={2} size="5px" bg="black"></Circle>
          </Flex>
          <Box
            overflowY="scroll"
            height="420px"
            mx={2}
            mb={2}
            p={1}
            borderRadius={20}
            color="black"
            overflowX="hidden"
          >
            {load ? (
              <Flex
                my="50%"
                direction="column"
                align="center"
                justifyContent="flex-end"
              >
                <Text>Loading</Text>
                <Progress w="60%" size="sm" isIndeterminate />
              </Flex>
            ) : (
              <HomeScreen />
            )}
          </Box>
          <PopoverCloseButton />
        </PopoverContent>
      </Popover>
    </Box>
  );
}

export default Phone;
