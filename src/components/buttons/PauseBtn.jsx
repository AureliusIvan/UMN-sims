import { Box, Button, Text, Image, Flex } from "@chakra-ui/react";
import { useState } from "react";

import Pop from '../template/tempPopUp'
import VolSlider from "./volumeSlider";

import audioOn from '../asset/icon/unmute.png'
import audioOff from '../asset/icon/mute.png'

function Pause () {
    return (
        <Pop 
			btnName="| |"
            title="Menu"
            content={<Content />}
        />
    )
}

function Content() {
	const [mute, setMute] = useState(false)
	const toggleMute = () => setMute(mute => !mute);

	return (
		<Box>
			<Text>Volume</Text>
			<Flex 
				justifyContent='center'
				height={{base:'50px', sm:'80px'}}
			>
				{mute ? 
					<Image src={audioOff} onClick={toggleMute} cursor='pointer' />
				:
					<Image src={audioOn} onClick={toggleMute} cursor='pointer' />
				}
			</Flex>
			<Text>*belom ada efek suaranya ya :)</Text>
			<VolSlider /><br />
			<Button 
				size='sm'
				backgroundColor='red.500' 
				color='whitesmoke'
				fontWeight='light'
				letterSpacing={1}
				_hover={{bg:'red.700'}}
				// onClick={}
			>reset game</Button>
		</Box>
	);
}


export default Pause;