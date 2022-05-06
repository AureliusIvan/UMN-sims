import { Divider, Button, Modal, ModalContent, ModalCloseButton, ModalBody, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useState } from "react";

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
					setOverlay(<PopUp />)
					onOpen()
				}}
			>
			{props.btnName}
			</Button>

			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				{overlay}
				<ModalContent width='70%' pb={3} shadow= { '2px 2px 6px #fd6a6a' }>
					<ModalHeader fontWeight='normal'>{props.title}</ModalHeader>
					<ModalCloseButton mt={2}/>
					<Divider />
					<ModalBody textAlign='center'>
						{props.content}
					</ModalBody>
					
				</ModalContent>
			</Modal>
		</>
	)
}

export default PopTemplate;