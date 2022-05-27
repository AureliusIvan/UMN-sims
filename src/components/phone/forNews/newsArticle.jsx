import React from 'react';
import { Box, Text, Flex, Image, Button } from '@chakra-ui/react';

function NewsArticle({ data }) {
  return (
    <Box bgColor="white" p="10px" borderRadius="15px" marginY={'10px'}>
      <Box marginBottom={'10px'} bgColor={'white'}>
      </Box>
      <Image borderRadius={'10px'} src={data.urlToImage} alt="images" />
      <Text fontSize={'20px'}>{data.title}</Text>
      <Text></Text>
      <Text color="gray">{data.content}</Text>
      <Flex justify="center">
        <Button size="sm" fontWeight="light" href={data.url}>
          Read More
        </Button>
      </Flex>
    </Box>
  );
}

export default NewsArticle;

// export default NewsArticle;
//     <div className="news">
//       <h1 className="news__title">{data.title}</h1>
//       <p className="news__desc">{data.description}</p>
//       <span className="news__author">{data.author}</span> <br />
//       <span className="news__published">{data.publishedAt}</span>
//       <span className="news__source">{data.source.name}</span>
//     </div>
