import { Box, Text, Divider, Flex, Image, Button, Circle } from '@chakra-ui/react';
import { useState } from 'react';

import Clock from '../Clock';
import WeatherApp from '../background/Weather';
import homeButton from '../asset/icon/homePhone.png';
import Greetings from './greetings';

// list aplikasi
import NewsApp from './forNews/newsApp';
import Pokedex from './forPokedex/pokedex';
import Walpaper1 from './walpaper/walpaper1.png';
import Profile from './forProfile/profile';
import SS from './forSS/SS';
import AnimeApp from './forAnime/anime';

function HomeScreen() {
  return (
    <Box h={'100%'} w="100%" backgroundImage={Walpaper1} bgSize="cover">
      <Text size="xs">
        <Clock />
      </Text>
      <Divider borderColor="black" />
      <AppLinking />
    </Box>
  );
}

// UPDATE LIST APP DARI SINI (2) --------------------------

const AppLinking = () => {
  const [app, setApp] = useState('start');

  const handleClick = appState => {
    setApp(appState);
  };
  switch (app) {
    case 'start':
      return (
        <Box>
          <AppList handleClick={handleClick} />
          <HomeButton handleClick={handleClick} />
        </Box>
      );
    case 'news':
      return (
        <Box>
          <NewsApp handleClick={handleClick} />
          <HomeButton handleClick={handleClick} />
        </Box>
      );
    case 'pokedex':
      return (
        <Box>
          <Pokedex handleClick={handleClick} />
          <HomeButton handleClick={handleClick} />
        </Box>
      );
    case 'profile':
      return (
        <Box>
          <Profile handleClick={handleClick} />
          <HomeButton handleClick={handleClick} />
        </Box>
      );
    case 'ss':
      return (
        <Box>
          <SS handleClick={handleClick} />
          <HomeButton handleClick={handleClick} />
        </Box>
      );
    case 'anime':
      return (
        <Box>
          <AnimeApp handleClick={handleClick} />
          <HomeButton handleClick={handleClick} />
        </Box>
      );
    default:
      return null;
  }
};

// uda coba pake function w/ props tapi ga masuk ke AppListnya
function AppList(props) {
  return (
    <>
      <WeatherApp />
      <Greetings />
      <Flex
        borderRadius={10} 
        shadow="xl" 
        flexDir="column" 
        bgColor="rgb(0,0,0 0.7)" 
        backdropFilter="blur(4px) hue-rotate(90deg)" 
        m={5} 
        minH={200}
      >
        <Text textAlign="center" borderRadius="10px 10px 0 0" py={1} bgColor="teal.100">My apps</Text>
        <Flex mt={3} justifyContent="space-evenly" color="black">
          <Button
            width={100}
            fontWeight="light"
            colorScheme="teal"
            onClick={() => props.handleClick('news')}
            _hover={{ shadow:"lg", transform:"scale(0.95)"}}
          >
            News
          </Button>

          <Button
            width={100}
            flexGrow="100%"
            fontWeight="light"
            colorScheme="teal"
            onClick={() => props.handleClick('profile')}
            _hover={{ shadow:"lg", transform:"scale(0.95)"}}
          >
            Profile
          </Button>
        </Flex>
        <Flex mt={3} justifyContent="space-evenly" color="black">
          <Button
            width={100}
            fontWeight="light"
            colorScheme="teal"
            onClick={() => props.handleClick('pokedex')}
            _hover={{ shadow:"lg", transform:"scale(0.95)"}}
          >
            Pokédex
          </Button>

          <Button
            width={100}
            fontWeight="light"
            colorScheme="teal"
            onClick={() => props.handleClick('anime')}
            _hover={{ shadow:"lg", transform:"scale(0.95)"}}
          >
            Anime
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

// --------------------------------------------------------

function HomeButton(props) {
  return (
    <Flex justifyContent="center">
      <Circle 
        size="40px" 
        bg="white"
        shadow="xl"
        position="fixed"
        bottom={0}
        cursor="pointer"
        transition="0.2s"
        _hover={{ transform: 'scale(1.2)' }}
        onClick={() => props.handleClick('start')}
      >
        <Image src={homeButton} width="65%"/>
      </Circle>
    </Flex>
  );
}

export default HomeScreen;
