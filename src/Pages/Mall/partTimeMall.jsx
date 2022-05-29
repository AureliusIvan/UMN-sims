import { Flex, Image } from '@chakra-ui/react'
import Pop from '../../components/templateAndFunction/tempPopUp'
import GIF from '../../components/asset/gif/congrats.gif'
import shown from "../../components/asset/icon/Cashier_parttime.png"

function partTime() {
    return (
        <Pop 
			shownIMG={shown}
            image={GIF}
            width={150}
            alt='part time di mall'
        />
    )
}

export default partTime