import {
  ChakraProvider,
  Box,
  theme
} from '@chakra-ui/react';
import "./App.css";
import { useState } from 'react';
import { Line } from './components/Grid/Line';
import { items } from './components/Grid/elementList';

import Test from './components/buttons/PauseBtn';

function createList(x){
  return(
      <Line
          key = {x.id}
          first={x.first}
          second={x.second}
          third={x.third}
          fourth={x.fourth}
      />
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box className='Body'>
        <Box>
          {items.map(createList)}
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;