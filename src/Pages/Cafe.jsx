import React from "react";
import { Box, Button } from "@chakra-ui/react";

function Cafe(props){
    return(
        <Box>
            test
            <Button display='' id='buttonStart' onClick={ () => props.handleClick('home')} bgColor='blue.100' border='1px solid black'>go home</Button>
            <Button  bottom='60px' onClick={ () => props.handleClick('home')} bgColor='blue.100' border='1px solid black'>LET'S GO</Button>
        </Box>
    );
}

export default Cafe;