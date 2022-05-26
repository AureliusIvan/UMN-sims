import Read from './icon/Library.png';
import {
    Image
  } from '@chakra-ui/react';

function reading(props) {
    return (
        <Image
        src={Read}
        width = {{base: "50%", md:"40%", sm:"70%" }}
        cursor="pointer"
        transition="0.2s linear"
        _hover={{ transform: 'scale(1.15)' }}
        onClick={props.function}
        />
    )
}

export default reading