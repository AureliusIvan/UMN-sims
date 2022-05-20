import { Box, Divider, Text, Image, Flex, Button, Modal, ModalContent, ModalCloseButton, ModalBody, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useState } from "react";

import Pop from '../template/tempPopUp'
import VolSlider from "./volumeSlider";

import audioOn from '../asset/icon/unmute.png'
import audioOff from '../asset/icon/mute.png'


function Pause() {
	const PopUp = () => (
		<ModalOverlay
			bg='rgba(0,0,0, 0.6)'
			backdropFilter='blur(5px) hue-rotate(90deg)'
		/>
	)

	const { isOpen, onOpen, onClose } = useDisclosure()
	const [overlay, setOverlay] = useState(<PopUp />)
	
	return (
		<>
			<Button
				onClick={() => {
					setOverlay(<PopUp />)
					onOpen()
				}}
			>
			| |
			</Button>

			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				{overlay}
				<ModalContent width='70%' pb={3} shadow= { '2px 2px 6px #fd6a6a' }>
					<ModalHeader fontWeight='normal'>Menu</ModalHeader>
					<ModalCloseButton mt={2}/>
					<Divider />
					<ModalBody textAlign='center'>
						<Content />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
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