import { Flex, Image, Box } from '@chakra-ui/react'
import {useContext} from 'react'
import Pop from '../../components/templateAndFunction/tempPopUp'
import GIF from '../../components/asset/gif/coding/studyinclass.gif'
import { AllContext } from '../../components/Value/CoinContext';
import { StatFunction, CoinFunction } from '../../components/templateAndFunction/statCoinFunction';

function Pustakawan() {
    const {tidur, setTidur} = useContext(AllContext)
    const {coin, setCoin} = useContext(AllContext)
    
    return (
        <Box onClick={() => {
                        {StatFunction(tidur, setTidur, 0, 5)};
                        {CoinFunction(coin, setCoin, 1000, 0)};
                    }}>
            <Pop 
                btnName="Kerja"
                image={GIF}
                alt='part time di mall'
            />
        </Box>
    )
}

export default Pustakawan;