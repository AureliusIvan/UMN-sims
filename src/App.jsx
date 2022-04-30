import React from 'react';
import {
  ChakraProvider,
  Box,
  theme
} from '@chakra-ui/react';
import UI from './components/UI';
import "./App.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box className='Body'>
        <UI/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
