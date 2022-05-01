import { Box, Button, Text, Image, Flex } from "@chakra-ui/react";
import { useState } from "react";

import Btn from '../template/tempButton'
import Pop from '../template/tempPopUp'

import audioOn from '../asset/icon/unmute.png'
import audioOff from '../asset/icon/mute.png'

function Content() {
	const [mute, setMute] = useState(true)
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

function Pause () {
    const [pop, setPop] = useState(false);

    return (
        <Box>
            <Btn 
                btnName="| |"
                function={() => setPop (!pop)}
            />
            {pop?
            <Pop 
                title="Menu"
                content={<Content />}
                function={() => setPop(false)}
            /> : "" }
        </Box>
    )
}

export default Pause;