import { useContext } from 'react'
import { Box } from '@chakra-ui/react'
import { AllContext } from '../../components/Value/CoinContext'
import { StatFunction, checkStat, CoinFunction } from '../../components/templateAndFunction/statCoinFunction'
import Pop from '../../components/templateAndFunction/tempPopUp'
import GIF from '../../components/asset/gif/eat.gif'

function Ngopi() {
    const {tidur, setTidur, coin, setCoin, makan, setMakan} = useContext(AllContext)

    return (
        <Box onClick={() => {
                        StatFunction(tidur, setTidur, 10, 0)
                        StatFunction(makan, setMakan, 15, 0)
                        CoinFunction(coin, setCoin, 0, 800)
                    }}>
            <Pop 
                image={GIF}
                btnName="Ngopi"
                alt='Ngopi di cafe'
            />
        </Box>
    )
}

export default Ngopi