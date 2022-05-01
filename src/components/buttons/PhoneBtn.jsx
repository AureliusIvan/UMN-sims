import { Box, Flex, Button, Text, Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';

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
					backgroundColor='gray'
					height='90%'
					width='50%'
					ml='auto' mr='auto'
					color='Black'
					textAlign='center'
                    borderRadius='10px'
					p={3}
					>
					<Flex>
						<Text cursor='pointer' onClick={Close}>x</Text>
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
			</Flex>:""}
    </Box>
  )
}

export default Phone;