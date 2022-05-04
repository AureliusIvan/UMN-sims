import { Box, Button, Text, Image, Flex } from "@chakra-ui/react";
import { useState } from "react";

import Pop from '../template/tempPopUp'
import VolSlider from "./volumeSlider";

import audioOn from '../asset/icon/unmute.png'
import audioOff from '../asset/icon/mute.png'

function MapIcon () {
    return (
        <Pop 
			btnName="MAP"
            title="MAP"
            content={<Content />}
        />
    )
}

function Content() {
	const [mute, setMute] = useState(false)
	const toggleMute = () => setMute(mute => !mute);

	return (
		<Box>
            <Box>
                
            </Box>
		</Box>
	);
}


export default MapIcon;