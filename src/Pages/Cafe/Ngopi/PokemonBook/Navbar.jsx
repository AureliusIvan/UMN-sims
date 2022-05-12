import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import logo from './Images/logo.png'

function PokeNavbar() {
    return (
            <Image pos={'absolute'} margin="auto" left={0} right={0} top="10px" w="100px" src={logo}/>
    );
}

export default PokeNavbar;