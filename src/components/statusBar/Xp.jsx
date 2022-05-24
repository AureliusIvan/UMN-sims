import { Box, Progress, Center, Flex } from "@chakra-ui/react";
import React, {useState, useContext} from "react";
import { AllContext } from "../Value/CoinContext";

export function Xp(){
    const {belajar, setBelajar} = useContext(AllContext);
    return(<>
    <Center>
        <Flex padding={0} fontSize='20px' zIndex={10} alignItems={'center'} justifyContent={'center'} pos={'absolute'} right='50px' top='130px' w={'40px'} h='40px' borderRadius={'50%'} bgColor='white'>XP</Flex>
        <Progress pos={'absolute'} right='80px' top='140px' w={'150px'} colorScheme={'green'} borderRadius='20px' border='2px solid white' h={'20px'} value={belajar}/>
    </Center>
    </>);
}