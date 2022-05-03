import {
  ChakraProvider,
  Box,
  theme,
  Text
} from '@chakra-ui/react';
import "./App.css";
import { useState } from 'react';
import PageOne from './Pages/PageOne';
import Home from './Pages/Home';

function App() {

  const [game, setGame] = useState('start')
  const handleClick = (gameState) => {
    setGame(gameState)
  }

  return (
    <ChakraProvider theme={theme}>
      {(() => {
        switch (game) {
          case 'start':
            return <PageOne handleClick={handleClick} />
          case 'home':

          default:
            return null
        }
      })()}
 
    </ChakraProvider>
  );
}

export default App;

// {items.map(createList)}