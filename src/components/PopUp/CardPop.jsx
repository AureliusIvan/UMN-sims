import { Box, Button
} from "@chakra-ui/react";
import { Pop } from "./Pop";

export function CreatePop(props){
  const isOpen = props.isOpen;
  if(isOpen){
    return(
      <Box>
          <Pop
          
          />
      </Box>
  );
  }
  else return null;
}