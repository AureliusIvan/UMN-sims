import {
  ChakraProvider,
  Box,
  theme,
  Text
} from '@chakra-ui/react';
import "./App.css";
import { useState } from 'react';
import PageOne from './Pages/Start';
import Home from './Pages/Home';
import Car from './Pages/SelectChar';
import SelectChar from './Pages/SelectChar';
import Cafe from './Pages/Cafe';
import MapIcon from './components/buttons/Map';

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
          case 'selectchar':
            return <SelectChar handleClick={handleClick} />
          case 'map':
              return <MapIcon handleClick={handleClick}/>
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