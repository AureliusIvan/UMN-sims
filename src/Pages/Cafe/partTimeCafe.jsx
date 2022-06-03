import { useContext, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { AllContext } from '../../components/Value/CoinContext';
import {
  StatFunction,
  CoinFunction,
  CheckStatFull
} from '../../components/templateAndFunction/statCoinFunction';
import Pop from '../../components/templateAndFunction/tempPopUp';
import shown from '../../components/asset/cafe/Cafe_parttime.png';
import gifA from '../../components/asset/gif/mukbang/Mukbangcafe.gif';
import gifB from '../../components/asset/gif/gamers/Gamercafe.gif';
import gifC from '../../components/asset/gif/holkay/Holkaycafe.gif';
import gifD from '../../components/asset/gif/coding/Codingcafe.gif';

function PartTimeCafe() {
  const { tidur, setTidur, coin, setCoin, main, setMain } = useContext(AllContext);
  const { countTidur, setCountTidur, countMain, setCountMain } = useContext(AllContext);
  

  const { character, setCharacter } = useContext(AllContext);
  const [gif, setGIF] = useState(gifA);
  useEffect(() => {
    if (character === 1) {
      setGIF(gifA);
    } else if (character === 2) {
      setGIF(gifB);
    } else if (character === 3) {
      setGIF(gifC);
    } else if (character === 4) {
      setGIF(gifD);
    }
  });

  return (
    <Box
      onClick={() => {
          StatFunction(tidur, setTidur, 0, 10);
          StatFunction(main, setMain, 0, 5);
          CoinFunction(coin, setCoin, 1000, 0);

          CheckStatFull(tidur, countTidur, setCountTidur);
          CheckStatFull(main, countMain, setCountMain);
      }}
    >
      <Pop
        shownIMG={shown}
        image={gif}
        name="cafe part time"
        alt="Kerja part time di cafe"
      />
    </Box>
  );
}

export default PartTimeCafe;
