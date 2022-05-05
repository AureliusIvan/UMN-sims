import { Button, Box, Center } from "@chakra-ui/react";

function Mall(props){
    return(
        <Button onClick={() => props.handleClick('map')}>test</Button>
    );
}

export default Mall;