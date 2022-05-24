import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import logo from './Images/logo.png'

function PokeNavbar() {
    return (
            <Image margin="auto" w="100px" src={logo}/>
    );
}

export default PokeNavbar;