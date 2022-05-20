import { Flex, Image } from '@chakra-ui/react'
import Pop from '../../components/template/tempPopUp'
import GIF from '../../components/asset/gif/congrats.gif'

function partTime() {
    return (
        <Pop 
			btnName="Part Time"
            image={GIF}
            alt='part time di mall'
        />
    )
}

export default partTime