import { Flex, Image, Box } from '@chakra-ui/react'
import {useContext} from 'react'
import Pop from '../../components/templateAndFunction/tempPopUp'
import GIF from '../../components/asset/gif/coding/studyinclass.gif'
import { AllContext } from '../../components/Value/CoinContext';
import { StatFunction, CoinFunction } from '../../components/templateAndFunction/statCoinFunction';
import shown from "../../components/asset/uni/Iibrary_parttime.png"

function Pustakawan() {
    const {tidur, setTidur, makan, setMakan, belajar, setBelajar} = useContext(AllContext)
    const {coin, setCoin} = useContext(AllContext)
    
    return (
        <Box onClick={() => {
                        StatFunction(tidur, setTidur, 0, 5)
                        StatFunction(makan, setMakan, 0, 5)
                        StatFunction(belajar, setBelajar, 3, 0)
                        CoinFunction(coin, setCoin, 1000, 0)
                    }}>
            <Pop 
                shownIMG={shown}
                name="part time librarian"
                image={GIF}
                alt='part time di mall'
            />
        </Box>
    )
}

export default Pustakawan;