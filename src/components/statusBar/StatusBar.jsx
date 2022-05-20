import { Box } from "@chakra-ui/react";
import React, { useContext , useState } from "react";


function Bar(props){
    return(
        <Box>
            {props.content}
        </Box>
    );
}

export function EatBar(){
    return(
        <Bar/>
    );
}