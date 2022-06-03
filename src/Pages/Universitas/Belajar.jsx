import { Box, Flex, Image } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import Pop from '../../components/templateAndFunction/tempPopUp';
import { AllContext } from '../../components/Value/CoinContext';
import { StatFunction, CheckStatFull } from '../../components/templateAndFunction/statCoinFunction';
import shown from '../../components/asset/uni/study.png';
import gif1 from './bg/Mukbangstudy.gif';
import gif2 from './bg/gamerstudyinclass.gif';
import gif3 from './bg/holkaystudy.gif';
import gif4 from '../../components/asset/gif/coding/studyinclass.gif';

function Belajar() {
  const {
    tidur,
    setTidur,
    makan,
    setMakan,
    belajar,
    setBelajar,
    countBelajar,
    setCountBelajar,
    character,
    setCharacter,
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
          StatFunction(belajar, setBelajar, 15, 0);
        } else {
          StatFunction(belajar, setBelajar, 10, 0);
        }
        StatFunction(tidur, setTidur, 0, 5);
        StatFunction(makan, setMakan, 0, 8);
        setCountBelajar(countBelajar + 1)
      }}
    >

      <Pop shownIMG={shown} name="Study" image={gif} alt="part time di mall" />

    </Box>
  );
}

export default Belajar;
