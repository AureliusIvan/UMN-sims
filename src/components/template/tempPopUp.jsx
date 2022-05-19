import { Button, Modal, ModalContent, ModalBody, ModalOverlay, useDisclosure } from '@chakra-ui/react'
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
					setOverlay(<PopUp />)
					onOpen()
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

// function PopTemplate(props){
//     return(
//         <Flex
// 			bg='rgba(0,0,0, 0.6)'
// 			backdropFilter='auto'
// 			backdropBlur='1.5px'
// 			height='100%'
// 			width='100%'
// 			position='absolute'
// 			top={0}
// 			left={0}
// 			justifyContent='center'
// 			alignItems='center'
//             zIndex={20}
//             overflow='hidden'
// 		>
// 			<Box
// 				backgroundColor='beige'
// 				height='auto'
// 				width='70%'
// 				ml='auto' mr='auto'
// 				textAlign='center'
// 				p={5}
//                 borderRadius={10}
//                 shadow= { '2px 2px 6px #fd6a6a' }
// 			>
// 				<Flex mb={2}>
// 					<CloseButton onClick={props.function} />
//                     <Spacer />
// 					<Text textAlign='center' ml={-7} alignSelf='center' fontSize='3xl' color='#fd6a6a'>{props.title}</Text>
//                     <Spacer />
//                 </Flex>
//                 <hr color="black" />
//                 {/* <Divider size='20px' color='black' orientation="horizontal" /> */}
// 				<Box justifyContent='center' mt={3}>
// 					{props.content}
// 				</Box>
// 			</Box>
// 		</Flex>
//     );
// }