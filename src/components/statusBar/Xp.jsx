import { Box, Progress, Flex, Tooltip } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AllContext } from "../Value/CoinContext";

export function Xp(){
    const { belajar } = useContext(AllContext);
    return (
        <Box pos="absolute" right="50px" top="130px">
            <Tooltip 
                label={`Study ${belajar}%`} 
                placement="bottom"
            >
                <Flex alignItems="center">
                    <Progress 
                        mr="-10px"
                        w={'150px'} 
                        colorScheme={'green'} 
                        borderRadius='20px' 
                        border='2px solid white' 
                        h={'20px'} 
                        value={belajar}
                    />
                    <Flex 
                        fontSize="20px"
                        borderRadius="50%" 
                        width="40px" 
                        height="40px" 
                        bgColor='white'
                        alignItems="center"
                        justifyContent="center"
                        zIndex={5}
                    >XP</Flex>
                </Flex>
            </Tooltip>
        </Box>
    );
}