import { ChakraProvider, theme } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import './App.css';
import PageOne from './Pages/Start';
import SelectChar from './Pages/SelectChar';
import Home from './Pages/Home/Home';
import Eat from './Pages/Home/Eat/Eat';
import Cafe from './Pages/Cafe/Cafe';
import ToMall from './Pages/Mall/shopLinking';
import Ngopi from './Pages/Cafe/Ngopi/PokemonBook/Ngopi';
import Uni from './Pages/Universitas/UnivHall';
import { AllContext } from './components/Value/CoinContext';

/*
1. nama
2. jurusan
3. api
4. character
5. currency
6. status dll
7. clock
8. inventory (opsional)
9. baju
10. cuaca
*/

function App() {
  const [coin, setCoin] = useState(0);
  const [nama, setNama] = useState('');
  const [name, setName] = useState('');
  const providerValue = useMemo(
    () => ({
      coin,
      setCoin,
      name,
      setName,
    }),
    [coin, name]
  );

  
  const [jurusan, setJurusan] = useState([]);
  const [character, setCharacter] = useState([]);
  const [clock, setClock] = useState();
  const [value, setValue] = useState(0);
  const test = useMemo(() => ({ value, setValue }), [value, setValue]);
  const [game, setGame] = useState('start');
  const handleClick = gameState => {
    setGame(gameState);
    console.log(game);
  };

  return (
    <ChakraProvider theme={theme}>
      <AllContext.Provider value={{coin, setCoin, nama, setNama}}>
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
            case 'mall':
              return <ToMall handleClick={handleClick} />;
            case 'uni':
              return <Uni handleClick={handleClick} />;
            default:
              return null;
          }
        })()}
      </AllContext.Provider>
    </ChakraProvider>
  );
}

export default App;

// {items.map(createList)}
