import { Box, Flex, Image } from '@chakra-ui/react'
import Pop from '../../components/template/tempPopUp'
import GIF from '../../components/asset/gif/eat.gif'
import GambarPopUp from "./arrayPopUp"

function partTimeCafe() {
    return (
        // <Image 
		// 	src={props.image}
		// 	width={{md:'100%', base:'70%'}}
		// 	filter="drop-shadow(2px 2px 5px black)"
		// 	alt={props.alt}
		// />
        <Pop 
            image={GIF}
            btnName="Part Time"
            alt='Kerja part time di cafe'
        />
    )
}

export default partTimeCafe