import { ChakraProvider, Box, theme, Text, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import './App.css';

import PageOne from './Pages/Start';
import Home from './Pages/Home/Home';
import SelectChar from './Pages/SelectChar';
import Cafe from './Pages/Cafe/Cafe';
import Eat from './Pages/Home/Eat/Eat';
import UnivHall from './Pages/Universitas/UnivHall';
import Mall from './Pages/Mall/Mall';
import Ngopi from './Pages/Cafe/Ngopi/PokemonBook/Ngopi';

function App() {
  const [game, setGame] = useState('home');
  const handleClick = gameState => {
    setGame(gameState);
    console.log(game);
  };

  return (
    <ChakraProvider theme={theme}>
      {(() => {
        switch (game) {
          case 'start':
            return <PageOne handleClick={handleClick} />;
          case 'selectchar':
            return <SelectChar handleClick={handleClick} />;
          case 'home':
            return <Home handleClick={handleClick} />;
          case 'eat':
            return <Eat handleClick={handleClick} />;
          case 'cafe':
            return <Cafe handleClick={handleClick} />;
          case 'ngopi':
            return <Ngopi handleClick={handleClick} />;
          case 'univhall':
            return <UnivHall handleClick={handleClick} />;
          case 'mall':
            return <Mall handleClick={handleClick} />;
          default:
            return null;
        }
      })()}
    </ChakraProvider>
  );
}

export default App;

// {items.map(createList)}
