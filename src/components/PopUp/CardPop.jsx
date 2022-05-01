import { Box, Button } from "@chakra-ui/react";
import { Pop } from "./Pop";
import {useState} from 'react'

export function CreatePop(props){
  const isOpen = props.isOpen;
  
  if(isOpen){
    return(
      <Box>
          <Pop />
      </Box>
    );
  }
  else return null;
}

// lg nyoba ini
// export function CreatePop(props){
//   const [pop, setPop] = useState(false);
  
//     return (
//       <Box>
//           <Pop />
//       </Box>
//     );
// }