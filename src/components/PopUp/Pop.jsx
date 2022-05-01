import { div, Flex, Center, Text, Square, Button } from "@chakra-ui/react";

export function Pop(props){
    return(
        <div className="Outer">
            <div className="Inner">
                <div className="Top">
                    <Button onClick={props.function}>x</Button>
                </div>
                <div className="Bottom">
                <Flex color='white'>
                <Center w='100px' bg='green.500'>
                    <Text>div 1</Text>
                </Center>
                <Square bg='blue.500' size='150px'>
                    <Text>div 2</Text>
                </Square>
                <div flex='1' bg='tomato'>
                    <Text>div 3</Text>
                </div>
                </Flex>
                </div>
            </div>
        </div>
    );
}