import {
  ChakraProvider,
  theme,
  Text,
  background,
  toast,
  useToast,
} from '@chakra-ui/react';
import { useMemo, useState, useEffect, useRef } from 'react';
import './App.css';
import PageOne from './Pages/Start';
import SelectCharacter from './Pages/SelectChar';
import Home from './Pages/Home/Home';
import Eat from './Pages/Home/Eat/Eat';
import Cafe from './Pages/Cafe/Cafe';
import ToMall from './Pages/Mall/shopLinking';
import Uni from './Pages/Universitas/UnivHall';
import { AllContext } from './components/Value/CoinContext';
import Pause from './components/buttons/PauseBtn';
import Phone from './components/phone/phoneMain';
import MiniGamestwo from './Pages/Home/MiniGames/ButtonApp';
import Toast from './components/template/tempWarnPopUp';

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
  //show pause and phone
  const [showPause, setShowPause] = useState(true);
  const handeShowPause = x => {
    setShowPause(x);
  };
  //coin const
  const [coin, setCoin] = useState(7000);
  //player choice
  const [jurusan, setJurusan] = useState("");
  const [character, setCharacter] = useState(1);
  const [nama, setNama] = useState('kamu');
  const [name, setName] = useState('');
  //time const
  const [Day, setDay] = useState(0);
  const [hour, setHour] = useState(23);
  const [minute, setCount] = useState(0);
  const [countday, setCountday] = useState(0);
  //Status bar const
  const [makan, setMakan] = useState(50);
  const [tidur, setTidur] = useState(50);
  const [main, setMain] = useState(50);
  const [belajar, setBelajar] = useState(70);
  //Weather const
  const [weather, setWeather] = useState('');

  // background const
  const [bghome, setBgHome] = useState('BgPagi');
  const [bgCafe, setBgCafe] = useState('BgPagi');
  const [bgMall, setBgMall] = useState('BgPagi');
  const [bgUniv, setBgUniv] = useState('BgPagi');

  //const buat makanan
  const [burger, setBurger] = useState(0);
  const [telur, setTelur] = useState(0);
  const [ikangoreng, setIkangoreng] = useState(0);
  const [steak, setSteak] = useState(0);
  const [ayampanggang, setAyampanggang] = useState(0);
  
  //buat jam
  useInterval(() => {
    setCount(minute + 1);
    if (minute >= 59) {
      setHour(hour + 1);
      setCount(0);
    }
    if (hour >= 23 && minute === 59) {
      setDay(Day + 1);
      setCountday(1);
      setHour(0);
    }
    //ini buat duid harian
    if (countday == 1) {
      setCoin(coin + 2000);
      setCountday(0);
    }
  }, 1000);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  // //useEffect buat notif
  // //notif uang jajan
  // const toast = useToast();
  // useEffect(() => {
  //   toast({
  //     description: "koin nambah",
  //     status: "warning",
  //     position : "bottom-start",
  //     // default durationnya 5 detik
  //     isClosable: true,
  //   })
  // }, [coin]);

  const [value, setValue] = useState(0);
  const test = useMemo(() => ({ value, setValue }), [value, setValue]);
  const [game, setGame] = useState('selectchar');
  const handleClick = gameState => {
    setGame(gameState);
    console.log(game);
  };
  //this for hide the pause dan phone button
  useEffect(() => {
    if (game == 'start' || game == 'eat' || game == 'selectchar') {
      setShowPause(false);
    } else {
      setShowPause(true);
    }
  }, [game]);

  return (
    <ChakraProvider theme={theme}>
      <AllContext.Provider
        value={{
          coin,
          setCoin,
          nama,
          setNama,
          jurusan,
          setJurusan,
          character,
          setCharacter,
          Day,
          setDay,
          hour,
          setHour,
          minute,
          setCount,
          makan,
          setMakan,
          tidur,
          setTidur,
          main,
          setMain,
          belajar,
          setBelajar,
          weather,
          setWeather,
          game,
          setGame,
          bghome,
          setBgHome,
          burger,
          setBurger,
          telur,
          setTelur,
          ikangoreng,
          setIkangoreng,
          steak,
          setSteak,
          ayampanggang,
          setAyampanggang,
        }}
      >
        {showPause ? (
          <>
            <Pause />
            <Phone />
          </>
        ) : (
          ''
        )}
        {(() => {
          switch (game) {
            case 'start':
              return <PageOne handleClick={handleClick} />;
            case 'selectchar':
              return <SelectCharacter handleClick={handleClick} />;
            case 'home':
              return <Home handleClick={handleClick} />;
            case 'eat':
              return <Eat handleClick={handleClick} />;
            case 'cafe':
              return <Cafe handleClick={handleClick} />;
            case 'mall':
              return <ToMall handleClick={handleClick} />;
            case 'uni':
              return <Uni handleClick={handleClick} />;
            case 'Minigames':
              return <MiniGamestwo handleClick={handleClick} />;
            default:
              return null;
          }
        })()}
      </AllContext.Provider>
    </ChakraProvider>
  );
}

export default App;
