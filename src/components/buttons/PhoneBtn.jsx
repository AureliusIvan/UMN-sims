import { Box, Flex, Button, Text, Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';

function Content(props) {
	return (
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
				backgroundColor='gray'
				height='90%'
				width={{base:'50%', md:'40%', lg:'30%'}}
				ml='auto' mr='auto'
				color='Black'
				textAlign='center'
                borderRadius='10px'
				p={3}
				>
				<Flex>
					<Text cursor='pointer' onClick={props.close}>x</Text>
				</Flex>
                    <Box
                    backgroundColor='Aquamarine'
                    height='95%'
                    width='100%'
                    >
                        <Grid>
                            <GridItem>
                                
                            </GridItem>
                        </Grid>
                    </Box>
			</Box>
		</Flex>
	)
}

function Phone (props) {
	const [pop, setPop] = useState(false);

	const ClickOpen = () => {
		setPop(!pop);
	}

	const Close = () => {
		setPop(false);
	}

	return (
    <Box>
		<Button onClick={ClickOpen}>{props.btnName}</Button>
		{pop? <Content close={Close}/> :""}
    </Box>
  	)
}

export default Phone;