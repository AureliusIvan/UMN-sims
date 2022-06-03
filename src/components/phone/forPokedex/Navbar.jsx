import React from 'react';
import { Image } from '@chakra-ui/react';
import logo from './Images/logo.png'

function PokeNavbar() {
    return (
        <Image my={3} mx="auto" w="100px" src={logo}/>
    );
}

export default PokeNavbar;