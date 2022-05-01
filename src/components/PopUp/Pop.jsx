import { Flex, Center, Text, Square, Button, Box } from "@chakra-ui/react";

export function Pop(props){
    return(
        <Box className="Outer">
            <Box className="Inner">
                <Box className="Top">
                    <Button onClick={props.function}>x</Button>
                </Box>
                <Box className="Bottom">
                <Flex color='white'>
                <Center w='100px' bg='green.500'>
                    <Text>div 1</Text>
                </Center>
                <Square bg='blue.500' size='150px'>
                    <Text>div 2</Text>
                </Square>
                <Box flex='1' bg='tomato'>
                    <Text>div 3</Text>
                </Box>
                </Flex>
                </Box>
            </Box>
        </Box>
    );
}