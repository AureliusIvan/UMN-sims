import React from 'react';
import { Box, Text, Flex, Image, Button } from '@chakra-ui/react';

function NewsArticle({ data }) {
  return (
    <Box marginY={'10px'}>
      <Box marginBottom={'10px'} borderY={'1px solid black'} bgColor={'white'}>
        <Text fontSize={'20px'}>{data.title}</Text>
      </Box>
      <Image borderRadius={'10px'} src={data.urlToImage} alt="images" />
      <Text fontSize='10px'>{data.publishedAt}</Text>
      <Text></Text>
      <Text>{data.description}</Text>
      <Text>{data.source.name}</Text>
      <Text>{data.content}</Text>
      <Flex justify="center">
        <Button size="sm" fontWeight="light" href={data.url}>
          Read More
        </Button>
      </Flex>
    </Box>
  );
}

export default NewsArticle;