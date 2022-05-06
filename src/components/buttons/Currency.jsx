import React, { forwardRef, useState, useImperativeHandle} from "react";
import { Box } from "@chakra-ui/react";

const Currency = forwardRef((props, ref)=>{
    const [toggle, setToggle] = useState(0);

    useImperativeHandle(ref, ()=>({
        alterToggle(x){
            setToggle(toggle+x);
        }
    }));
    return(
        <>
            <Box display={'flex'} w={'200px'} overflow='hidden' h='50px' border={'1px solid white'} shadow="10px 5px black" borderRadius={'10px'} bgColor={'green.500'} pos='absolute' right='50px' top='10px' padding='10px' color={'white'}>
            <Box borderRadius={'50%'} w='10px' >$</Box>
            <Box marginLeft={'10px'}>{toggle}</Box>
            </Box>
        </>
    );
});

export default Currency;