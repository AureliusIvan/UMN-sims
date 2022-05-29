import { useContext } from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import Pop from '../../components/templateAndFunction/tempPopUp'
import GIF from '../../components/asset/gif/congrats.gif'
import shown from "../../components/asset/mall/Cashier_parttime.png"
import { CoinFunction, StatFunction } from '../../components/templateAndFunction/statCoinFunction'
import { AllContext } from '../../components/Value/CoinContext'

function PartTime() {
    const {tidur, setTidur, main, setMain, makan, setMakan} = useContext(AllContext)
    const {coin, setCoin} = useContext(AllContext)

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