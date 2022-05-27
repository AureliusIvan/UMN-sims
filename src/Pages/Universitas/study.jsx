import study from './icon/study.png';
import {
    Image,
    Button,
  } from '@chakra-ui/react';

function studying(props) {
    return (
        <Image
        src={study}
        width = {{base: "50%", md:"40%", sm:"70%" }}
        cursor="pointer"
        transition="0.2s linear"
        _hover={{ transform: 'scale(1.15)' }}
        onClick={props.function}
        />
    )
}

export default studying