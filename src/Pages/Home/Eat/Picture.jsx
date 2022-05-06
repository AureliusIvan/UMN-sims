import { Box, Image } from '@chakra-ui/react';
import React from 'react';

function Picture({ id, url }) {
  return (
    <Box bgColor={'red.100'} h="50px" w="50px" border={"1px solid black"}>
      <Image src={url} />
    </Box>
  );
}

export default Picture;
