import { Flex, Image, Box } from '@chakra-ui/react'
import {useContext} from 'react'
import Pop from '../../components/templateAndFunction/tempPopUp'
import GIF from '../../components/asset/gif/coding/studyinclass.gif'
import { AllContext } from '../../components/Value/CoinContext';
import { StatFunction } from '../../components/templateAndFunction/statCoinFunction';

function Belajar() {
    const {belajar, setBelajar} = useContext(AllContext)
    const {tidur, setTidur} = useContext(AllContext)

    return (
        <Box onClick={() => {
                        {StatFunction(belajar, setBelajar, 10, 0)};
                        {StatFunction(tidur, setTidur, 0, 5)};
                    }}>
            <Pop 
                btnName="Study"
                image={GIF}
                alt='part time di mall'
            />
        </Box>
    )
}

export default Belajar;