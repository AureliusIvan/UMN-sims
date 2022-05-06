import { ChakraProvider, Box, theme, Text, Button } from '@chakra-ui/react';
import './App.css';
import { useState, useEffect } from 'react';
import PageOne from './Pages/Start';
import Home from './Pages/Home/Home';
import SelectChar from './Pages/SelectChar';
import Cafe from './Pages/Cafe/Cafe';
import Eat from './Pages/Home/Eat/Eat';

function App() {
  const [game, setGame] = useState('eat');
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
          default:
            return null;
        }
      })()}
    </ChakraProvider>
  );
}

export default App;

// {items.map(createList)}
