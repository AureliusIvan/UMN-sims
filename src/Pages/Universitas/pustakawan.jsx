import { Flex, Image,  } from '@chakra-ui/react'
import {useContext} from 'react'
import Pop from '../../components/template/tempPopUp'
import GIF from '../../components/asset/gif/coding/studyinclass.gif'
import { AllContext } from '../../components/Value/CoinContext';

function Pustakawan() {
    return (
        <Pop 
			btnName="Kerja"
            image={GIF}
            alt='part time di mall'
        />
    )
}

export default Pustakawan;