import { useContext, useEffect, useState  } from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import Pop from '../../components/templateAndFunction/tempPopUp'
import shown from "../../components/asset/mall/Cashier_parttime.png"
import { CoinFunction, StatFunction, CheckStatFull } from '../../components/templateAndFunction/statCoinFunction'
import { AllContext } from '../../components/Value/CoinContext'
import gif1 from './asset/Mukbangmall.gif'
import gif2 from './asset/Gamermall.gif'
import gif3 from './asset/Holkaymall.gif'
import gif4 from './asset/Codingmall.gif'

//gif
import gifA from "../../components/asset/gif/mukbang/Mukbangmall.gif"
import gifB from "../../components/asset/gif/gamers/Gamermall.gif"
import gifC from "../../components/asset/gif/holkay/Holkaymall.gif"
import gifD from "../../components/asset/gif/coding/Codingmall.gif"

function PartTime() {
    const {tidur, setTidur, main, setMain, makan, setMakan, character, setCharacter} = useContext(AllContext)
    const { countMakan, setCountMakan} = useContext(AllContext)
    const {coin, setCoin} = useContext(AllContext)
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
                        StatFunction(tidur, setTidur, 0, 8)
                        StatFunction(main, setMain, 0, 8)
                        StatFunction(makan, setMakan, 5, 0)
                        CoinFunction(coin, setCoin, 1000, 0)

                        CheckStatFull(makan, countMakan, setCountMakan)
                    }}>
            <Pop 
                shownIMG={shown}
                image={gif}
                name="cashier part time"
                alt='part time di mall'
            />
        </Box>
    )
}

export default PartTime