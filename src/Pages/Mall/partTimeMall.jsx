import { useContext, useState, useEffect } from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import Pop from '../../components/templateAndFunction/tempPopUp'
import shown from "../../components/asset/mall/Cashier_parttime.png"
import { CoinFunction, StatFunction } from '../../components/templateAndFunction/statCoinFunction'
import { AllContext } from '../../components/Value/CoinContext'

//gif
import gifA from "../../components/asset/gif/mukbang/Mukbangmall.gif"
import gifB from "../../components/asset/gif/gamers/Gamermall.gif"
import gifC from "../../components/asset/gif/holkay/Holkaymall.gif"
import gifD from "../../components/asset/gif/coding/Codingmall.gif"

function PartTime() {
    const {tidur, setTidur, main, setMain, makan, setMakan, character, setCharacter} = useContext(AllContext);
    const {coin, setCoin} = useContext(AllContext);
    const [ GIF , setGIF] = useState(gifA);
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
      }, []);


    return (
        <Box onClick={() => {
                        StatFunction(tidur, setTidur, 0, 8)
                        StatFunction(main, setMain, 0, 8)
                        StatFunction(makan, setMakan, 5, 0)
                        CoinFunction(coin, setCoin, 1000, 0)
                    }}>
            <Pop 
                shownIMG={shown}
                image={GIF}
                name="cashier part time"
                alt='part time di mall'
            />
        </Box>
    )
}

export default PartTime