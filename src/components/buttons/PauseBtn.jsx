import { Box, Flex, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

function Pause (props) {
	const [pop, setPop] = useState(false);

  return (
    <Box>
		<Button onClick={() => setPop(pop => !pop)}>{props.btnName}</Button>
		{pop?
		<Flex
			bg='rgba(0,0,0,0.5)'
			backdropFilter='auto'
			backdropBlur='2px'
			height='100%'
			width='100%'
			position='absolute'
			top={0}
			justifyContent='center'
			alignItems='center'
		>
			<Box
				backgroundColor='Black'
				height='100px'
				width='500px'
				ml='auto' mr='auto'
				color='white'
				textAlign='center'
				p={3}
				>
				<Flex>
					<Text cursor='pointer' onClick={() => setPop(false)}>x</Text>
					<Text ml={10}>Header</Text>
				</Flex>
				<Flex justifyContent='center'>
					A Pop Up
				</Flex>
			</Box>
		</Flex>:""}
    </Box>
  )
}

export default Pause;