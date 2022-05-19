import { Flex, Image } from '@chakra-ui/react'
import Pop from '../../components/template/tempPopUp'
import GIF from '../../components/asset/gif/eat.gif'

function partTimeCafe() {
    return (
        <Pop 
			btnName="Part Time"
            image={GIF}
            alt='Kerja part time di cafe'
        />
    )
}

export default partTimeCafe