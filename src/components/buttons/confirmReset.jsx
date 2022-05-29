import { Divider, Text, Box, Button, Modal, ModalContent, ModalCloseButton, ModalBody, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useState } from "react";

function Reset() {
	const PopUp = () => (
		<ModalOverlay
			bg='rgba(165,42,42, 0.6)'
			backdropFilter='blur(5px) hue-rotate(90deg)'
		/>
	)

	const { isOpen, onOpen, onClose } = useDisclosure()
	const [overlay, setOverlay] = useState(<PopUp />)
	
	return (
		<>
			<Button
                size='sm'
                backgroundColor='red.500' 
				color='whitesmoke'
				fontWeight='light'
				letterSpacing={1}
				_hover={{bg:'red.700'}}
				onClick={() => {
					setOverlay(<PopUp />)
					onOpen()
				}}
			>
			reset game
			</Button>

			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				{overlay}
				<ModalContent width='70%' pb={3} shadow= { '2px 2px 6px #fd6a6a' }>
					<ModalHeader fontWeight='normal'>Are you sure?</ModalHeader>
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
    return (
        <Box>
            <Text fontSize={20}>You are going to reset the game. All your progress will also be reset.</Text>
            <br />
            <Button 
                    size='lg'
                    backgroundColor='red.500' 
                    color='whitesmoke'
                    fontWeight='light'
                    letterSpacing={1}
                    _hover={{bg:'red.700'}}
                    onClick={() => window.location.reload()}
            >RESET GAME</Button>
        </Box>
    )
}

export default Reset