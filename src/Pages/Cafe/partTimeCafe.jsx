import { useContext } from 'react'
import { Box } from '@chakra-ui/react'
import { AllContext } from '../../components/Value/CoinContext'
import { StatFunction, CoinFunction } from '../../components/templateAndFunction/statCoinFunction'
import Pop from '../../components/templateAndFunction/tempPopUp'
import GIF from '../../components/asset/gif/eat.gif'
import shown from '../../components/asset/cafe/Cafe_parttime.png'

function PartTimeCafe() {
    const {tidur, setTidur, coin, setCoin, main, setMain} = useContext(AllContext)

    return (
        <Box onClick={() => {
                        {StatFunction(tidur, setTidur, 0, 10)};
                        {StatFunction(main, setMain, 0, 5)};
                        {CoinFunction(coin, setCoin, 1000, 0)};
                    }}>
            <Pop 

                shownIMG={shown}
                image={GIF}
                name="cafe part time"
                alt='Kerja part time di cafe'
            />
        </Box>
    )
}

export default PartTimeCafe