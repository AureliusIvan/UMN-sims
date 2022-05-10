import { Button, Box, Center } from "@chakra-ui/react";
import mapIcon from "../../components/asset/icon/mapIcon.png"

function Mall(props){
    return(
        <Button onClick={() => props.handleClick('map')}>test</Button>
    );
}

export default Mall;