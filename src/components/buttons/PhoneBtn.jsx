import { Box, Flex, Button, CloseButton, Image, Text, Grid, GridItem, usePointerEvent } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { useState } from 'react';

import cursorImg from '../asset/cursor/cursor_point.png';

function Content(props) {
	return (
		<Flex
			bg='rgb(0,0,0,0.5)'
			backdropFilter='auto'
			backdropBlur='1.5px'
			height='100%'
			width='100%'
			position='absolute'
			top={0}
			left={0}
			justifyContent='center'
			alignItems='center'
			zIndex={10}
		>
			<Box
				backgroundColor='gray'
				height='90%'
				width={{base:'90%', sm:'50%', md:'40%', lg:'30%'}}
				ml='auto' mr='auto'
				color='Black'
				textAlign='center'
                borderRadius='10px'
				p={3}
				>
				<Flex>
					<CloseButton 
						mb={2} 
						size='sm' 
						onClick={props.close} />
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

function Phone () {
	const [pop, setPop] = useState(false);

	const ClickOpen = () => {
		setPop(!pop);
	}

	const Close = () => {
		setPop(false);
	}

	return (
    <Box>
		<Button onClick={ClickOpen}>Phone</Button>
		{pop? <Content close={Close}/> :""}
    </Box>
  	)
}

export default Phone;