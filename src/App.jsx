import {
  ChakraProvider,
  Box,
  theme
} from '@chakra-ui/react';
import "./App.css";
import PageOne from './PageOne';
import { Line } from './components/Grid/Line';
import { items } from './components/Grid/elementList';
import { useState } from 'react';

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
  const [pop, setPop] = useState(true);

	const Close = () => {
		setPop(false);
	}

  return (
    <ChakraProvider theme={theme}>
      {pop? <PageOne play={Close}/> :""}
      <Box className='Body'>
        <Box>
          {items.map(createList)}
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
