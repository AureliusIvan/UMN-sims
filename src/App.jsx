import { ChakraProvider, theme } from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';

import PageOne from './Pages/Start';
import SelectChar from './Pages/SelectChar';

import Home from './Pages/Home/Home';
import Cafe from './Pages/Cafe/Cafe';
import Eat from './Pages/Home/Eat/Eat';
import Mall from './Pages/Mall/Mall';
import Uni from './Pages/Universitas/UnivHall'

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
          case 'mall':
            return <Mall handleClick={handleClick} />;
          case 'uni':
            return <Uni handleClick={handleClick} />;
          default:
            return null;
        }
      })()}
    </ChakraProvider>
  );
}

export default App;

// {items.map(createList)}
