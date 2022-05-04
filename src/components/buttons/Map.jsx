import { Box, Button, Text, Image, Flex } from "@chakra-ui/react";
import { useState } from "react";

import Pop from '../template/tempPopUp'
import VolSlider from "./volumeSlider";

import audioOn from '../asset/icon/unmute.png'
import audioOff from '../asset/icon/mute.png'

function MapIcon (props) {
    return (
        <Pop 
			btnName="MAP"
            title="MAP"
            content={<Button onClick={() => props.handleClick('')}>test</Button>}
        />
    )
}

function Content(props) {
	return (
		<Box>
            <Box>
                <Button onClick={() => props.handleClick('cafe')}>test</Button>
            </Box>
		</Box>
	);
}


export default MapIcon;