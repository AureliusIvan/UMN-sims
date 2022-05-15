import { Box, Button } from "@chakra-ui/react"
import { ArrowBackIcon } from "@chakra-ui/icons";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./DnDShop"

function AppShop(props) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Box>
        <Button
            zIndex={1}
            pos={'absolute'}
            top="10px" 
            left={'10px'}
            bgColor="rgb(0, 0, 0, .0)"
            fontWeight={0}
            borderRadius={'50%'}
            h="50px"
            w="50px"
            padding={0}
            onClick={() => props.handleClick('mall')}
          >
            <ArrowBackIcon h="50px" w={'50px'} position={'absolute'} />
          </Button>
        <DragDrop />
      </Box>
    </DndProvider>
  )
}

export default AppShop