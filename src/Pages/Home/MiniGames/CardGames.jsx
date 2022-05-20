import { Box, Image } from "@chakra-ui/react";

function CardGames({item, id, handleClick}){
    const itemClass = item.stat ? " active " + item.stat : ""
  
    return (
        <Box bgColor={'orange.200'} className={"card"+ itemClass} onClick={() => handleClick(id)}>
            <Image src={item.img} alt=""/>
        </Box>
 
    )
  }
  
  export default CardGames;