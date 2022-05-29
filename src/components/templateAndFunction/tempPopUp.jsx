import { Button, Modal, ModalContent, ModalBody, ModalOverlay, useDisclosure, Box } from '@chakra-ui/react'
import { Flex, Image } from '@chakra-ui/react';
import React, { useState } from "react";

import PartTimeCafe from '../../Pages/Cafe/partTimeCafe';

function PopTemplate(props) {
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
					setOverlay(<PopUp />);
					onOpen();
					setTimeout(() => {
						onClose()
					}, 1800);
				}}
			>
			{props.btnName}
			</Button>

			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				{overlay}
				<ModalContent bg="rgba(0,0,0,0)" boxShadow="none" pb={3}>
					<ModalBody textAlign='center'>
					<Flex flexDir='column' alignItems='center' justifyContent='center'>
						{props.comment}
						{/* <PartTimeCafe image={props.image[0]}/> */}
						<Image 
							src={props.image}
							width={{md:'100%', base:'70%'}}
							filter="drop-shadow(2px 2px 5px black)"
							alt={props.alt} 
						/>
					</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default PopTemplate;
