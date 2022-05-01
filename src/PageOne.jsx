import { Box, Stack, Input, Center , Flex, Button, Text, Grid, GridItem } from '@chakra-ui/react';

function PageOne(props) {
	return (
		<Box
        backgroundColor='teal'
        position='fixed'
        width='100%'
        height='100%'
        zIndex='100'
        >
        <Grid className="Grid" h='10vh' templateRows='repeat(1, 1fr)' templateColumns='repeat(3, 1fr)' gap={0}>

        <GridItem className="gridItems" rowSpan={1} colSpan={3}>
        <Center mt='30px' gap='10px'>
        <Input width='70%' maxW='400px'  variant='outline' placeholder='Masukan Nama' />
        <Button>✔</Button>
        </Center>
        </GridItem>

    </Grid>
    <Grid className="Grid" h='60vh' templateRows='repeat(1, 1fr)' templateColumns='repeat(3, 1fr)' gap={0}>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        <Center>
        <Button transform='translateY(25vh) translateX(-100px)' position='absolute'>{"<<"}</Button>
        <Button transform='translateY(25vh) translateX(100px)' position='absolute'>{">>"}</Button>
        </Center>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        <Center>
        {props.third}
        </Center>
        </GridItem>
    </Grid>
    <Grid className="Grid" h='20vh' templateRows='repeat(1, 1fr)' templateColumns='repeat(3, 1fr)' gap={0}>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        {props.first}
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        <Center gap='10px'>
        <Button>Setting</Button>
        <Button 
        width='100px'
        height='100px'
        borderRadius='50%'
        onClick={props.play}
        pointerEvents='all'
        >Play</Button>
        <Button>Credit</Button>
        </Center>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        <Center>
        {props.third}
        </Center>
        </GridItem>
    </Grid>
        </Box>
	)
}



export default PageOne;