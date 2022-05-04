import {
  ChakraProvider,
  Box,
  theme,
  Text,
  Button
} from '@chakra-ui/react';
import "./App.css";
import { useState, useEffect } from 'react';
import PageOne from './Pages/Start';
import Home from './Pages/Home';
import SelectChar from './Pages/SelectChar';
import Cafe from './Pages/Cafe';

function App() {
  const [game , setGame] = useState('start');
  const handleClick = (gameState) => {
    setGame(gameState);
    console.log(game);
  }

  return (
    <ChakraProvider theme={theme}>
      {(() => {
        switch (game) {
          case 'start':
            return <PageOne handleClick={handleClick} />
          case 'selectchar':
            return <SelectChar handleClick={handleClick} />
          case 'home':
            return <Home handleClick={handleClick}/>
          case 'cafe':
              return <Cafe handleClick={handleClick}/>
          default:
            return null
        }
      })()}
 
    </ChakraProvider>
  );
}

export default App;

// {items.map(createList)}