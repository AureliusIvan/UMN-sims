import { Box } from '@chakra-ui/react'
import {useContext, useEffect, useState } from 'react'
import Pop from '../../components/templateAndFunction/tempPopUp'
import { AllContext} from '../../components/Value/CoinContext';
import { StatFunction, CoinFunction, CheckStatFull } from '../../components/templateAndFunction/statCoinFunction';
import shown from "../../components/asset/uni/Iibrary_parttime.png"
import gif1 from './bg/Mukbangstudy.gif'
import gif2 from './bg/gamerstudyinclass.gif'
import gif3 from './bg/holkaystudy.gif'
import gif4 from '../../components/asset/gif/coding/studyinclass.gif'

function Pustakawan() {
    const {tidur, setTidur, makan, setMakan, belajar, setBelajar, character, setCharacter} = useContext(AllContext)
    const {coin, setCoin, countBelajar, setCountBelajar} = useContext(AllContext)
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
                        StatFunction(tidur, setTidur, 0, 5)
                        StatFunction(makan, setMakan, 0, 5)
                        StatFunction(belajar, setBelajar, 5, 0)
                        CoinFunction(coin, setCoin, 1000, 0)

                        CheckStatFull(belajar, countBelajar, setCountBelajar)
                    }}>
            <Pop 
                shownIMG={shown}
                name="part time librarian"
                image={gif}
                alt='part time di mall'
            />
        </Box>
    )
}

export default Pustakawan;
