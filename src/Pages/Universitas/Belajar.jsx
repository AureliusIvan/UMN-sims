import { Box } from '@chakra-ui/react'
import {useContext, useState, useEffect} from 'react'
import Pop from '../../components/templateAndFunction/tempPopUp'
import GIF from '../../components/asset/gif/coding/studyinclass.gif'
import { AllContext } from '../../components/Value/CoinContext';
import { StatFunction } from '../../components/templateAndFunction/statCoinFunction';
import shown from '../../components/asset/uni/study.png'
import gifA from "../../components/asset/gif/mukbang/Mukbangstudy.gif"
import gifB from "../../components/asset/gif/gamers/gamerstudyinclass.gif"
import gifC from "../../components/asset/gif/holkay/holkaystudy.gif"
import gifD from "../../components/asset/gif/coding/Codingstudyinclass.gif"

function Belajar() {
    const {belajar, setBelajar} = useContext(AllContext)
    const {tidur, setTidur} = useContext(AllContext)
    const {makan, setMakan} = useContext(AllContext)
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
      }, []);

    return (
        <Box onClick={() => {
                        StatFunction(belajar, setBelajar, 10, 0)
                        StatFunction(tidur, setTidur, 0, 5)
                        StatFunction(makan, setMakan, 0, 8)
                    }}>
            <Pop 
                shownIMG={shown}
                name="Study"
                image={gif}
                alt='part time di mall'
            />
        </Box>
    )
}

export default Belajar;