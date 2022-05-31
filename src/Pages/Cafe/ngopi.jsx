import { useContext, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react'
import { AllContext } from '../../components/Value/CoinContext'
import { StatFunction, checkStat, CoinFunction } from '../../components/templateAndFunction/statCoinFunction'
import Pop from '../../components/templateAndFunction/tempPopUp'
import shown from '../../components/asset/cafe/Coffee.png'
import gif1 from './cafeimg/Mukbangngopi.gif'
import gif2 from './cafeimg/Gamerngopi.gif'
import gif3 from './cafeimg/Holkayngopi.gif'
import gif4 from './cafeimg/Codingngopi.gif'

function Ngopi() {
  const { tidur, setTidur, coin, setCoin, makan, setMakan } =
    useContext(AllContext);

  //buat ganti gif berdasarkan character
  const { character, setCharacter } = useContext(AllContext);
  const [gif, setGif] = useState(gif1);

  useEffect(() => {
    console.log(character);
    if (character === 1) {
      setGif(gif1);
    }
    else if (character === 2) {
      setGif(gif2);
    }
    else if (character === 3) {
      setGif(gif3);
    }
    else if (character === 4) {
      setGif(gif4);
    }
  }, []);
  ////

  return (
    <Box onClick={() => {
          StatFunction(tidur, setTidur, 10, 0)
          StatFunction(makan, setMakan, 15, 0)
          CoinFunction(coin, setCoin, 0, 800)
        }}>
      <Pop 
        shownIMG={shown}
        image={gif}
        name="ngopi"
        alt='Ngopi di cafe'
      />
    </Box>
  );
}

export default Ngopi;
