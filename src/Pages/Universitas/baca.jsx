import Pop from '../../components/templateAndFunction/tempPopUp';
import GIF from '../../components/asset/gif/coding/codingread.gif';
import shown from '../../components/asset/uni/Read.png';
import { Box } from '@chakra-ui/react';
import { StatFunction, CheckStatFull } from '../../components/templateAndFunction/statCoinFunction';
import { useContext, useEffect, useState } from 'react';
import { AllContext } from '../../components/Value/CoinContext';
import gif1 from './bg/Mukbangread.gif';
import gif2 from './bg/Gamerread.gif';
import gif3 from './bg/Holkayread.gif';
import gif4 from './bg/codingread.gif';

function Baca() {
  const {
    belajar,
    setBelajar,
    makan,
    setMakan,
    main,
    setMain,
    character,
  } = useContext(AllContext);
  const [gif, setGif] = useState(gif1);

  useEffect(() => {
    console.log(character);
    if (character === 1) {
      setGif(gif1);
    } else if (character === 2) {
      setGif(gif2);
    } else if (character === 3) {
      setGif(gif3);
    } else if (character === 4) {
      setGif(gif4);
    }
  }, []);

  
  return (
    <Box
      onClick={() => {
        if (character === 4) {
          StatFunction(belajar, setBelajar, 6, 0);
        } else {
          StatFunction(belajar, setBelajar, 5, 0);
        }
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
