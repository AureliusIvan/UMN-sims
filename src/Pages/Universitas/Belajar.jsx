import { Box } from '@chakra-ui/react'
import {useContext} from 'react'
import Pop from '../../components/templateAndFunction/tempPopUp'
import GIF from '../../components/asset/gif/coding/studyinclass.gif'
import { AllContext } from '../../components/Value/CoinContext';
import { StatFunction } from '../../components/templateAndFunction/statCoinFunction';
import shown from '../../components/asset/uni/study.png'

function Belajar() {
    const {belajar, setBelajar} = useContext(AllContext)
    const {tidur, setTidur} = useContext(AllContext)
    const {makan, setMakan} = useContext(AllContext)

    return (
        <Box onClick={() => {
                        StatFunction(belajar, setBelajar, 10, 0)
                        StatFunction(tidur, setTidur, 0, 5)
                        StatFunction(makan, setMakan, 0, 8)
                    }}>
            <Pop 
                shownIMG={shown}
                name="Study"
                image={GIF}
                alt='part time di mall'
            />
        </Box>
    )
}

export default Belajar;