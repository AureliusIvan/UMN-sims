import { Box, Flex, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

function Test () {
	const [pop, setPop] = useState(false);

	const ClickOpen = () => {
		setPop(!pop);
	}

	const Close = () => {
		setPop(false);
	}

  return (
    <Box>
      <Button onClick={ClickOpen}>Try me</Button>
			{pop?
			<Flex
				bg='rgba(255,0,0,0.5)'
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
					backgroundColor='black'
					height='100px'
					width='500px'
					ml='auto' mr='auto'
					color='white'
					textAlign='center'
					p={3}
					>
					<Flex>
						<Text cursor='pointer' onClick={Close}>x</Text>
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

export default Test;