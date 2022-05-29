import Pop from '../../components/templateAndFunction/tempPopUp'
import GIF from '../../components/asset/gif/coding/codingread.gif'
import shown from '../../components/asset/uni/Library.png'
import { Box } from '@chakra-ui/react';
import { StatFunction } from '../../components/templateAndFunction/statCoinFunction';
import { useContext } from 'react';
import { AllContext } from '../../components/Value/CoinContext';

function Baca() {
    const {belajar, setBelajar, makan, setMakan, main, setMain} = useContext(AllContext)
    
    return (
        <Box onClick={() => {
            StatFunction(belajar, setBelajar, 5, 0)
            StatFunction(makan, setMakan, 0, 8)
            StatFunction(main, setMain, 0, 8)
        }}>
            <Pop 
                shownIMG={shown}
                name="read books"
                image={GIF}
                alt='basa buku di perpus'
            />
        </Box>
    )
}

export default Baca;