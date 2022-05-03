import {
    Grid,
    GridItem,
    Center
} from '@chakra-ui/react';

export function Line(props){
    return(
    <Grid className="Grid" h='10vh' templateRows='repeat(1, 1fr)' templateColumns='repeat(4, 1fr)' gap={0}>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        {props.first}
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        <Center>
        {props.second}
        </Center>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        <Center>
        {props.third}
        </Center>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        <Center>
        {props.fourth}
        </Center>
        </GridItem>
    </Grid>
    );
}

