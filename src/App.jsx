import {
  ChakraProvider,
  Box,
  theme
} from '@chakra-ui/react';
import "./App.css";
import { Line } from './components/Grid/Line';
import { items } from './components/Grid/elementList';

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
