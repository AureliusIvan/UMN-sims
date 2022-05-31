import Pop from '../../components/templateAndFunction/tempPopUp'
import GIF from '../../components/asset/gif/coding/codingread.gif'
import shown from '../../components/asset/uni/Read.png'
import { Box } from '@chakra-ui/react';
import { StatFunction } from '../../components/templateAndFunction/statCoinFunction';
import { useContext, useEffect, useState } from 'react';
import { AllContext } from '../../components/Value/CoinContext';
import gifA from "../../components/asset/gif/mukbang/Mukbangstudy.gif"
import gifB from "../../components/asset/gif/gamers/gamerstudyinclass.gif"
import gifC from "../../components/asset/gif/holkay/holkaystudy.gif"
import gifD from "../../components/asset/gif/coding/Codingstudyinclass.gif"

function Baca() {
  const { belajar, setBelajar, makan, setMakan, main, setMain } =
    useContext(AllContext);
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
        StatFunction(belajar, setBelajar, 5, 0);
        StatFunction(makan, setMakan, 0, 8);
        StatFunction(main, setMain, 0, 8);
      }}
    >
      <Pop
        shownIMG={shown}
        name="read books"
        image={gif}
        alt="basa buku di perpus"
      />
    </Box>
  );
}

export default Baca;
