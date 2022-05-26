import { Flex, Image } from '@chakra-ui/react'
import Pop from '../../components/template/tempPopUp'
import GIF from '../../components/asset/gif/coding/codingread.gif'

function Baca() {
    return (
        <Pop 
			btnName="Read"
            image={GIF}
            alt='part time di mall'
        />
    )
}

export default Baca;