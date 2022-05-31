import { Flex, Image, Box } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import Pop from '../../components/templateAndFunction/tempPopUp';
import GIF from '../../components/asset/gif/coding/studyinclass.gif';
import { AllContext } from '../../components/Value/CoinContext';
import {
  StatFunction,
  CoinFunction,
} from '../../components/templateAndFunction/statCoinFunction';
import shown from '../../components/asset/uni/Iibrary_parttime.png';
import gifA from '../../components/asset/gif/mukbang/Mukbangcafe.gif';
import gifB from '../../components/asset/gif/gamers/Gamercafe.gif';
import gifC from '../../components/asset/gif/holkay/Holkaycafe.gif';
import gifD from '../../components/asset/gif/coding/Codingcafe.gif';

function Pustakawan() {
  const { tidur, setTidur, makan, setMakan, belajar, setBelajar } =
    useContext(AllContext);
  const { coin, setCoin } = useContext(AllContext);
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
        StatFunction(tidur, setTidur, 0, 5);
        StatFunction(makan, setMakan, 0, 5);
        StatFunction(belajar, setBelajar, 3, 0);
        CoinFunction(coin, setCoin, 1000, 0);
      }}
    >
      <Pop
        shownIMG={shown}
        name="part time librarian"
        image={gif}
        alt="part time di mall"
      />
    </Box>
  );
}

export default Pustakawan;
