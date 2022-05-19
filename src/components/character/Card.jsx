import React from "react";
import { Box, Image } from "@chakra-ui/react";
import hairfront  from "./characterAsset/default/nakMukbang/1.png"
import face from "./characterAsset/default/nakMukbang/2.png"
import lefthand from "./characterAsset/default/nakMukbang/3.png"
import body from "./characterAsset/default/nakMukbang/4.png"
import righthand from "./characterAsset/default/nakMukbang/5.png"
import hairback from "./characterAsset/default/nakMukbang/6.png"
import feet from "./characterAsset/default/nakMukbang/7.png"
import "./chara.css"

function CharacterModule(props){
    return(
        <>
        <Box
        >
            {props.text}
            <Image pointerEvents={'none'} className="top" objectFit={'cover'} filter="drop-shadow(5px 5px #222)" margin={'auto'} left="0" right={'0'} bottom='0' w="600" h={'600px'} zIndex={7} pos={'absolute'} src={hairfront} alt={"test"} />
            <Image pointerEvents={'none'} className="top" objectFit={'cover'} filter="drop-shadow(5px 5px #222)" margin={'auto'} left="0" right={'0'} bottom='0' w="600" h={'600px'} zIndex={6} pos={'absolute'} src={face} alt={"test"} />
            <Image pointerEvents={'none'} className="body" objectFit={'cover'}  margin={'auto'} left="0" right={'0'} bottom='0' w="600" h={'600px'} zIndex={5} pos={'absolute'} src={lefthand} alt={"test"} />
            <Image pointerEvents={'none'} className="body" objectFit={'cover'}  margin={'auto'} left="0" right={'0'} bottom='0' w="600" h={'600px'} zIndex={4} pos={'absolute'} src={body} alt={"test"} />
            <Image pointerEvents={'none'} className="body" objectFit={'cover'}  margin={'auto'} left="0" right={'0'} bottom='0' w="600" h={'600px'} zIndex={3} pos={'absolute'} src={righthand} alt={"test"} />
            <Image pointerEvents={'none'} className="top" objectFit={'cover'}  margin={'auto'} left="0" right={'0'} bottom='0' w="600" h={'600px'} zIndex={2} pos={'absolute'} src={hairback} alt={"test"} />
            <Image pointerEvents={'none'} className="bottom" objectFit={'cover'}  margin={'auto'} left="0" right={'0'} bottom='0' w="600" h={'600px'} zIndex={1} pos={'absolute'} src={feet} alt={"test"} />
            <Box margin={'auto'} left="0" right={'0'} bottom='0' w="200px" h={'100px'} borderRadius="50%" zIndex={0} bgColor={'black'} opacity="0.6" pos="absolute" />
        </Box>
        </>
    );
}

export default CharacterModule;