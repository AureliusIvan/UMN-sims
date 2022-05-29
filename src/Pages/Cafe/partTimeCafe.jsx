import { useContext, useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { AllContext } from '../../components/Value/CoinContext'
import { StatFunction, CoinFunction } from '../../components/templateAndFunction/statCoinFunction'
import Pop from '../../components/templateAndFunction/tempPopUp'
import shown from '../../components/asset/cafe/Cafe_parttime.png'
import gif1 from './cafeimg/Mukbangcafe.gif'
import gif2 from './cafeimg/Gamercafe.gif'
import gif3 from './cafeimg/Holkaycafe.gif'
import gif4 from './cafeimg/Codingcafe.gif'

function PartTimeCafe() {
    const {tidur, setTidur, coin, setCoin, main, setMain, character, setCharacter} = useContext(AllContext)
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


    return (
        <Box onClick={() => {
                        {StatFunction(tidur, setTidur, 0, 10)};
                        {StatFunction(main, setMain, 0, 5)};
                        {CoinFunction(coin, setCoin, 1000, 0)};
                    }}>
            <Pop 

                shownIMG={shown}
                image={gif}
                name="cafe part time"
                alt='Kerja part time di cafe'
            />
        </Box>
    )
}

export default PartTimeCafe