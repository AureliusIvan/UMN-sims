import React from 'react';
import "../App.css";

import {
  Box
} from '@chakra-ui/react';
import {Line} from './Line';
import { items } from './elementList';

function createList(x){
    return(
        <Line
            key = {x.id}
            first={x.first}
            second={x.second}
            third={x.third}
            fourth={x.fourth}
        />
    );
}

function UI(){
    return(
        <Box>
            {items.map(createList)}
        </Box>
    );
}


export default UI;