import { Box } from "@chakra-ui/react";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import React from "react";
import Picture from "./Picture";
import FoodList from "./FoodList";


function DnDfood(){
    return(
        <Box>
            <DragDropContext>
            {FoodList.map((picture)=>{
                return <Picture src={picture.url} id={picture.id}/>

            })}
            </DragDropContext>
        </Box>
    );
}

export default DnDfood;
