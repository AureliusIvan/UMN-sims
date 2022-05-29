import { Box, Text, Divider, Flex, Image, Button } from '@chakra-ui/react';
import { useState } from 'react';

import Clock from '../Clock';
import homeButton from '../asset/icon/homePhone.png';

// list aplikasi
import NewsApp from './forNews/newsApp';
import App2 from './forApp2/app2';
import Pokedex from './forPokedex/pokedex';
import Home from '../../Pages/Home/Home';
import WeatherApp from '../background/Weather';
import Walpaper1 from './walpaper/walpaper1.png';
import Profile from './forProfile/profile';
import SS from './forSS/SS';
import AnimeApp from './forAnime/anime';

function HomeScreen() {
  return (
    <Box h={'100%'} w="100%" backgroundImage={Walpaper1}>
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
    case 'clock':
      return (
        <Box>
          <App2 handleClick={handleClick} />
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
      <Flex flexDir="column">
        <Flex mt={3} justifyContent="space-around" color="black">
          <Button
            width={100}
            fontWeight="light"
            colorScheme="teal"
            onClick={() => props.handleClick('news')}
          >
            News
          </Button>

          <Button
            width={100}
            flexGrow="100%"
            fontWeight="light"
            colorScheme="teal"
            onClick={() => props.handleClick('clock')}
          >
            Clock
          </Button>
        </Flex>
        <Flex mt={3} justifyContent="space-around" color="black">
          <Button
            width={100}
            fontWeight="light"
            colorScheme="teal"
            onClick={() => props.handleClick('profile')}
          >
            Profile
          </Button>

          <Button width={100} fontWeight="light" colorScheme="teal">
            Foto
          </Button>
        </Flex>
        <Flex mt={3} justifyContent="space-around" color="black">
          <Button
            width={100}
            fontWeight="light"
            colorScheme="teal"
            onClick={() => props.handleClick('pokedex')}
          >
            Pokédex
          </Button>

          <Button
            width={100}
            fontWeight="light"
            colorScheme="teal"
            onClick={() => props.handleClick('anime')}
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
      <Image
        src={homeButton}
        width="10%"
        position="fixed"
        bottom={0}
        cursor="pointer"
        transition="0.2s"
        _hover={{ transform: 'scale(1.2)' }}
        onClick={() => props.handleClick('start')}
      />
    </Flex>
  );
}

export default HomeScreen;
