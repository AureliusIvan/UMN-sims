import React, { forwardRef, useState, useImperativeHandle, useContext } from "react";
import { Box, Button } from "@chakra-ui/react";
import { AllContext } from "../Value/CoinContext";

function Currency (props){
    const {coin, setCoin} = useContext(AllContext);
    const set = () =>{
        setCoin(10)
    }
    return(
        <>
            <Box display={'flex'} w={'200px'} overflow='hidden' h='50px' border={'1px solid white'} shadow="10px 5px black" borderRadius={'10px'} bgColor={'green.500'} pos='absolute' right='50px' top='10px' padding='10px' color={'white'}>
            <Box borderRadius={'50%'} w='10px' >$</Box>
            <Box marginLeft={'10px'}>{coin}</Box>
            </Box>
        </>
    );
};

export default Currency;