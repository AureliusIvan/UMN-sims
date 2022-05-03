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
            right={0}
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
    <Grid className="Grid" h='100%' templateRows='repeat(4, 1fr)' templateColumns='repeat(1, 1fr)' gap={0}>
        <GridItem padding='20px' className="gridItems" rowSpan={1} colSpan={1}>
        <Text textAlign='left'>ivan</Text>
        </GridItem>
        <GridItem padding='20px' className="gridItems" rowSpan={1} colSpan={1}>
        <Text textAlign='left'>arka</Text>
        </GridItem>
        <GridItem padding='20px' className="gridItems" rowSpan={1} colSpan={1}>
        <Text textAlign='left'>mae</Text>
        </GridItem>
        <GridItem padding='20px' className="gridItems" rowSpan={1} colSpan={1}>
        <Text textAlign='left'>pat</Text>
        </GridItem>
    </Grid>
                    </Box>
			</Box>
		</Flex>
	)
}

function Credit (props) {
	const [pop, setPop] = useState(false);

	const ClickOpen = () => {
		setPop(!pop);
	}

	const Close = () => {
		setPop(false);
	}

	return (
    <Box>
		<Button onClick={ClickOpen}>Credit</Button>
		{pop? <Content close={Close}/> :""}
    </Box>
  	)
}

export default Credit;